import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { Formik, FormikActions, Form, ErrorMessage, Field } from 'formik';
import { devRootURL } from '../../utilities/rootURLS';
import { PaymentFormProps } from './types';
import { NavLink } from 'react-router-dom';
import { StyledCardContainer, StyledPaymentContainer } from '../../styles/payment/PaymentStyles';
import { ConditionalLink } from '../main/Navigation';
import { ORDER, CHECKOUT_TO_PROFILE, ORDER_ROUTE, PROFILE_ROUTE } from '../../constants/constants';

function mapStateToProps(state: any) {
  return {
    profile: state.profileReducer.profile,
    order: state.orderReducer.order
  };
};

class PaymentForm extends Component<PaymentFormProps, {}> {
  constructor(props: PaymentFormProps) {
    super(props);
    this.submit = this.submit.bind(this);
    this.paymentFormEntry = this.paymentFormEntry.bind(this);
  }

  async submit() {
    let { token } = await this.props.stripe.createToken({ name: 'Name' })
      // @ts-ignore
      .then(function(result) {
        result.error ?
          console.log(result.error) :
          console.log("success!");
        return result;
      });
    if (typeof token !== 'undefined') {
      console.log(this.props.order);
      let payload = {
        token: token, order: { order: "dooop" }, profile:
          { profile: "poop" }
      };
      let response = await fetch(`${devRootURL}/charge/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      let myOK = await response.ok;
      if (myOK) console.log('Oll Korrect!');
    } else {
      console.log("Please enter your credit card information");
      console.log(this.props.stripe);
    }
  }

  paymentFormEntry() {
    return (
      <StyledCardContainer>
        <label>Payment:</label>
        <CardElement hidePostalCode={true} />
        <button onClick={this.submit}>Submit Payment</button>
      </StyledCardContainer>
    );
  }

  render() {
    return (
      <StyledPaymentContainer>
        {this.paymentFormEntry()}
        <ConditionalLink location={ORDER} route={ORDER_ROUTE} />
        <ConditionalLink location={CHECKOUT_TO_PROFILE} route={PROFILE_ROUTE} />
      </StyledPaymentContainer>
    );
  }

}

export default connect(mapStateToProps)(injectStripe(PaymentForm));
