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
  CreditSummary,
  CardBackground,
  UpperCardElement,
  LowerCardElements,
  CardCvc,
  CardNumber,
  CardExpiry,
  FormBlock,
  CardLabel,
  HiddenCardLabel,
  CardErrorWarning,
  InfoContainer,
  OrderSubContainer,
  StyledLabel,
  StyledH3,
  StyledH4,
  WrappedH3,
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
    display: state.displayReducer.display,
    isComplete: state.paymentReducer.isComplete
  };
};

const PARSED_BALANCE = 'PARSE_BALANCE';
const NON_ZERO_FLAVORS = 'NON_ZERO_FLAVORS';
const NON_ZERO_FLAVOR_COUNT = 'NON_ZERO_FLAVOR_COUNT';



class PaymentForm extends Component<PaymentFormProps, PaymentFormState> {
  constructor(props: PaymentFormProps) {
    super(props);
    this.state = {
      offset: 100,
      cardError: 0,
      submitPrompt: "Pay Now"
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
      case NON_ZERO_FLAVORS:
        return Object.entries(orderCopy);
      case NON_ZERO_FLAVOR_COUNT:
        let nonNilCount = 0;
        for (let attr in orderCopy) {
          if (orderCopy[attr] !== 0) {
            ++nonNilCount;
          };
        }
        return nonNilCount;
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
        console.log('oll korrect!');
      } else {
        console.log(response);
      }
    } else {
      this.setState({
        cardError: 101,
        submitPrompt: "Card Error"
      });
      setTimeout(() => {
        this.setState({
          cardError: 0,
          submitPrompt: "Pay Now"
        });
      }, 3500);
      console.log('That value doesn\'t work!');
    }
  }




  render() {
    return (
      <PaymentContainer>
        <SummaryContainer>
          <OrderSummary>
            <InfoContainer>
              <StyledLabel>Balance: ${this.orderParser(PARSED_BALANCE)}</StyledLabel>
              <OrderSubContainer>
                {this.orderMapper()}
              </OrderSubContainer>
            </InfoContainer>
          </OrderSummary>
          <ProfileSummary>
            <InfoContainer >
              <StyledLabel>Name:</StyledLabel>
              <StyledH3>{this.props.profile.name}</StyledH3>
              <StyledLabel onClick={() => this.orderParser(NON_ZERO_FLAVOR_COUNT)}>Address: </StyledLabel>
              <StyledH3>{this.props.profile.addressLineOne}</StyledH3>
              {this.props.profile.addressLineTwo.length > 0 ?
                <StyledH3>{this.props.profile.addressLineTwo}</StyledH3> :
                null
              }
              <StyledH3>{this.props.profile.city}, {this.props.profile.state}</StyledH3>
              <StyledH3>{this.props.profile.postalCode}</StyledH3>
            </InfoContainer>
          </ProfileSummary>
          <CreditSummary>
            <CardBackground>
              <UpperCardElement>
                <FormBlock>
                  <StyledLabel>Card Number</StyledLabel>
                  <CardNumber
                    style={{
                      base: {
                        fontSize: `${this.props.display.isPortrait ? this.props.display.windowHeight * 0.02 : this.props.display.windowHeight * 0.02}px`,
                        color: 'rgba(110, 110, 224)'
                      }
                    }}
                  />
                </FormBlock>
              </UpperCardElement>
              <LowerCardElements>
                <FormBlock>
                  <StyledLabel>Expiration</StyledLabel>
                  <CardExpiry
                    style={{
                      base: {
                        fontSize: `${this.props.display.isPortrait ? this.props.display.windowHeight * 0.02 : this.props.display.windowHeight * 0.02}px`,
                        color: 'rgba(110, 110, 224)'
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
                        color: 'rgba(110, 110, 224)'
                      }
                    }}
                  />
                </FormBlock>
              </LowerCardElements>
            </CardBackground>
            {this.state.cardError > 0 ?
              this.props.display.isPortrait ?
                null :
                <CardErrorWarning>
                  Whoops! <br />
                  Something didn't compute. <br />
                  Try entering that number again!
              </CardErrorWarning>
              : null}
          </CreditSummary>
        </SummaryContainer>
        <ButtonContainer>
          <SubmitButton
            onClick={this.submit}
            type="submit"
            errors={this.state.cardError}
          >
            {this.state.submitPrompt}
          </SubmitButton>
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
