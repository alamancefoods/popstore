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
  StyledSubmitButton,
  StyledProfileContainer,
  StyledOrderContainer,
  StyledFlavorContainer,
  StyledH1,
  StyledH3
} from '../../styles/payment/PaymentStyles';
import { ORDER, CHECKOUT_TO_PROFILE, ORDER_ROUTE, PROFILE_ROUTE } from '../../constants/constants';

function mapStateToProps(state: any) {
  return {
    profile: state.profileReducer.profile,
    order: state.orderReducer.order,
    display: state.displayReducer.display
  };
};




class PaymentForm extends Component<PaymentFormProps, {}> {
  constructor(props: PaymentFormProps) {
    super(props);
    this.submit = this.submit.bind(this);
    this.orderParser = this.orderParser.bind(this);
    this.orderMapper = this.orderMapper.bind(this);
  }


  orderParser(returnBalance: boolean): any {
    const balance = this.props.order.totalCount;
    let orderCopy = Object.assign({}, this.props.order);
    delete orderCopy.balance;
    delete orderCopy.totalCount;
    if (returnBalance) {
      return convertPopCountToCharge(balance, false);
    } else {
      // Return array of key value pairs
      return Object.entries(orderCopy);
    }
  };


  orderMapper() {
    return (
      this.orderParser(false).map(function(kvArray: [string, number]) {
        if (kvArray[1] > 0) {
          return <StyledH3
            key={popStringify(kvArray[0])}>
            {popStringify(kvArray[0])} : {kvArray[1]}
          </StyledH3>;
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
          <StyledFlavorContainer>
            <StyledH1>Balance: ${this.orderParser(true)}</StyledH1>
            {this.orderMapper()}
          </StyledFlavorContainer>
        </StyledOrderContainer>
        <StyledProfileContainer>
          <StyledH1>Name:</StyledH1>
          <StyledH3>{this.props.profile.name}</StyledH3>
          <StyledH1>Address: </StyledH1>
          <StyledH3>{this.props.profile.addressLineOne}</StyledH3>
          {this.props.profile.addressLineTwo.length > 0 ?
            <StyledH3>{this.props.profile.addressLineTwo}</StyledH3> :
            null
          }
          <StyledH3>{this.props.profile.city}, {this.props.profile.state}</StyledH3>
          <StyledH3>{this.props.profile.postalCode}</StyledH3>
        </StyledProfileContainer>
        <StyledCardContainer>
          <label>Payment:</label>
          <CardElement hidePostalCode={true} />
        </StyledCardContainer>
        <StyledSubmitButton onClick={this.submit}>Submit Payment</StyledSubmitButton>
        {this.props.display.isTrue ?
          <StyledLinkContainer>
            <StyledOrderLink location={ORDER} route={ORDER_ROUTE} />
            <StyledProfileLink location={CHECKOUT_TO_PROFILE} route={PROFILE_ROUTE} />
          </StyledLinkContainer>
          : null
        }
      </StyledPaymentContainer>
    );
  }

}

export default connect(mapStateToProps)(injectStripe(PaymentForm));
