import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completePurchase } from '../../redux/payment/actions';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { devRootURL } from '../../utilities/rootURLS';
import { PaymentFormProps } from './types';
import { popStringify } from '../../utilities/popConverter';
import { convertPopCountToCharge } from '../../utilities/convertPopCountToCharge';
import {
  StyledCardContainer,
  StyledPaymentContainer,
  StyledLinkContainer,
  StyledOrderLink,
  StyledProfileLink,
  StyledFormButton,
  StyledProfileContainer,
  StyledOrderContainer,
  StyledInfoContainer,
  StyledH1,
  StyledH3,
  WrappedH3,
  StyledLabel
} from '../../styles/payment/PaymentStyles';
import { ORDER, PORTRAIT_CHECKOUT_TO_PROFILE, ORDER_ROUTE, PROFILE_ROUTE } from '../../constants/constants';

function mapStateToProps(state: any) {
  return {
    profile: state.profileReducer.profile,
    order: state.orderReducer.order,
    display: state.displayReducer.display
  };
};

const PARSED_BALANCE = 'PARSE_BALANCE';
const NON_ZERO_FLAVORS = 'NON_ZERO_FLAVORS';
const NON_ZERO_FLAVOR_COUNT = 'NON_ZERO_FLAVOR_COUNT';



class PaymentForm extends Component<PaymentFormProps, {}> {
  constructor(props: PaymentFormProps) {
    super(props);
    this.state = {
      zedCount: this.orderParser(NON_ZERO_FLAVOR_COUNT)
    };
    this.submit = this.submit.bind(this);
    this.orderParser = this.orderParser.bind(this);
    this.orderMapper = this.orderMapper.bind(this);
  }


  orderParser(parseChoice: string): any | Number {
    const balance = this.props.order.totalCount;
    let orderCopy = Object.assign({}, this.props.order);
    delete orderCopy.balance;
    delete orderCopy.totalCount;
    switch (parseChoice) {
      case PARSED_BALANCE:
        return convertPopCountToCharge(balance, false);
        break;
      case NON_ZERO_FLAVORS:
        return Object.entries(orderCopy);
        break;
      case NON_ZERO_FLAVOR_COUNT:
        let nonZedCount = 0;
        for (let attr in orderCopy) {
          if (orderCopy[attr] !== 0) {
            ++nonZedCount;
          };
        }
        return nonZedCount;
        break;
      default:
        break;
    }
  };


  orderMapper() {
    let zedCount = this.orderParser(NON_ZERO_FLAVOR_COUNT);
    return (
      this.orderParser(NON_ZERO_FLAVORS).map(function(kvArray: [string, number]) {
        if (kvArray[1] > 0) {
          return <WrappedH3
            zedCount={zedCount}
            onClick={() => console.log(zedCount)}
            key={popStringify(kvArray[0])}>
            {popStringify(kvArray[0])} : {kvArray[1]}
          </WrappedH3>;
        };
      }));
  };




  async submit() {
    let token;
    try {
      token = await this.props.stripe.createToken({ name: 'Name' });
    } catch (e) {
      console.log(e);
    }
    if (typeof token.token !== 'undefined') {
      let payload = {
        token: token.token, order: this.props.order, profile: this.props.profile
      };
      let response: any;
      try {
        response = await fetch(`${devRootURL}/charge/`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      } catch (e) {
        console.log(e);
      }
      if (response!.ok) {
        this.props.dispatch(completePurchase());
      } else {
        console.log(response);
      }
    } else {
      console.log('That value doesn\'t work!');
    }
  }




  render() {
    return (
      <StyledPaymentContainer>
        <StyledOrderContainer>
          <StyledInfoContainer>
            <StyledH1>Balance: ${this.orderParser(PARSED_BALANCE)}</StyledH1>
            {this.orderMapper()}
          </StyledInfoContainer>
        </StyledOrderContainer>
        <StyledProfileContainer>
          <StyledInfoContainer >
            <StyledH1>Name:</StyledH1>
            <StyledH3>{this.props.profile.name}</StyledH3>
            <StyledH1 onClick={() => this.orderParser(NON_ZERO_FLAVOR_COUNT)}>Address: </StyledH1>
            <StyledH3>{this.props.profile.addressLineOne}</StyledH3>
            {this.props.profile.addressLineTwo.length > 0 ?
              <StyledH3>{this.props.profile.addressLineTwo}</StyledH3> :
              null
            }
            <StyledH3>{this.props.profile.city}, {this.props.profile.state}</StyledH3>
            <StyledH3>{this.props.profile.postalCode}</StyledH3>
          </StyledInfoContainer>
        </StyledProfileContainer>
        <StyledCardContainer>
          <StyledH1>Payment:</StyledH1>
          <CardElement
            style={{
              base: {
                fontSize: `${this.props.display.isPortrait ? this.props.display.windowHeight * 0.02 : this.props.display.windowHeight * 0.03}px`
              }
            }} hidePostalCode={true} />
        </StyledCardContainer>
        <StyledFormButton onClick={this.submit}>Submit Payment</StyledFormButton>
        {/**Super hacky. Quick fix for conditional links.*/}
        {this.props.display.isPortrait ?
          <StyledLinkContainer>
            <StyledProfileLink location={PORTRAIT_CHECKOUT_TO_PROFILE} route={PROFILE_ROUTE} />
          </StyledLinkContainer>
          : null
        }
      </StyledPaymentContainer>
    );
  }

}


export default connect(mapStateToProps)(injectStripe(PaymentForm));
