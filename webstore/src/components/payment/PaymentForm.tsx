import React, { Component } from 'react';
import { connect } from 'react-redux';
import { animated } from 'react-spring';
import { Spring } from 'react-spring/renderprops';
import { completePurchase } from '../../redux/payment/actions';
import { CardCVCElement, CardNumberElement, CardExpiryElement, injectStripe } from 'react-stripe-elements';
import { devRootURL } from '../../utilities/rootURLS';
import { PaymentFormProps, PaymentFormState } from './types';
import { popStringify } from '../../utilities/popConverter';
import { convertPopCountToCharge } from '../../utilities/convertPopCountToCharge';
import { MenuPanelSpring } from '../../springs/MenuPanelSpring';
import { ReactComponent as ExampleIc } from '../../static/buttonPanel.svg';
import {
  SubmitButton,
  ButtonContainer,
  PaymentPanelSpring
} from '../../styles/root/RootStyles';
import {
  PaymentContainer,
  SummaryContainer,
  OrderSummary,
  ProfileSummary,
  InfoContainer,
  OrderSubContainer,
  StyledH1,
  StyledH3,
  StyledH4,
  WrappedH3,
  StyledLabel,
  CardBackground,
  UpperCardElement,
  LowerCardElements,
  CardCvc,
  CardNumber,
  CardExpiry,
  FormBlock,
  CardLabel,
  HiddenCardLabel,
  LinkContainer,
  OrderLink,
  ProfileLink,
  Button
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



class PaymentForm extends Component<PaymentFormProps, PaymentFormState> {
  constructor(props: PaymentFormProps) {
    super(props);
    this.state = { offset: 100 };
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
        let nonNilCount = 0;
        for (let attr in orderCopy) {
          if (orderCopy[attr] !== 0) {
            ++nonNilCount;
          };
        }
        return nonNilCount;
        break;
      default:
        break;
    }
  };


  orderMapper() {
    let nilCount = this.orderParser(NON_ZERO_FLAVOR_COUNT);
    return (
      this.orderParser(NON_ZERO_FLAVORS).map(function(kvArray: [string, number]) {
        if (kvArray[1] > 0) {
          return <WrappedH3
            nilCount={nilCount}
            onClick={() => console.log(nilCount)}
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
      <PaymentContainer>
        <SummaryContainer>
          <OrderSummary>
            <InfoContainer>
              <StyledH1>Balance: ${this.orderParser(PARSED_BALANCE)}</StyledH1>
              <OrderSubContainer>
                {this.orderMapper()}
              </OrderSubContainer>
            </InfoContainer>
          </OrderSummary>
          <ProfileSummary>
            <InfoContainer >
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
            </InfoContainer>
          </ProfileSummary>
        </SummaryContainer>
        <CardBackground>
          <UpperCardElement>
            <FormBlock>
              <CardLabel>Card Number</CardLabel>
              <CardNumber
                style={{
                  base: {
                    fontSize: `${this.props.display.isPortrait ? this.props.display.windowHeight * 0.02 : this.props.display.windowHeight * 0.02}px`,
                    color: 'rgba(240, 150, 120)'
                  }
                }}
              />
            </FormBlock>
          </UpperCardElement>
          <LowerCardElements>
            <FormBlock>
              <CardLabel>Expiration</CardLabel>
              <CardExpiry
                style={{
                  base: {
                    fontSize: `${this.props.display.isPortrait ? this.props.display.windowHeight * 0.02 : this.props.display.windowHeight * 0.02}px`,
                    color: 'rgba(240, 150, 120)'
                  }
                }}
              />
            </FormBlock>
            <FormBlock>
              <HiddenCardLabel>CVC</HiddenCardLabel>
              <CardCvc
                style={{
                  base: {
                    fontSize: `${this.props.display.isPortrait ? this.props.display.windowHeight * 0.02 : this.props.display.windowHeight * 0.02}px`,
                    color: 'rgba(240, 150, 120)'
                  }
                }}
              />
            </FormBlock>
          </LowerCardElements>
        </CardBackground>
        <ButtonContainer>
          <SubmitButton type="submit">Pay Now</SubmitButton>
          <Spring
            from={{ dash: this.state.offset }}
            to={{ dash: 0 }}
          >
            {props => (
              <animated.svg
                style={{
                  gridArea: 'center',
                  alignSelf: 'center',
                  justifySelf: 'center',
                  filter: 'drop-shadow(7px -7px 0px rgb(110, 110, 224))'
                }}
                height={this.props.display.windowHeight * 0.075}
                strokeDasharray={this.state.offset}
                strokeDashoffset={props.dash}
              >
                <ExampleIc />
              </animated.svg>
            )}
          </Spring>
        </ButtonContainer>
      </PaymentContainer>
    );
  }

}


export default connect(mapStateToProps)(injectStripe(PaymentForm));

        //<StyledFormButton onClick={this.submit}>Submit Payment</StyledFormButton>
