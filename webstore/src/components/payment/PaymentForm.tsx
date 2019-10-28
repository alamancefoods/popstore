import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completePurchase } from '../../redux/payment/actions';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { Formik, FormikActions, Form, ErrorMessage, Field } from 'formik';
import { devRootURL } from '../../utilities/rootURLS';
import { PaymentFormProps } from './types';
import { NavLink } from 'react-router-dom';
import {
  StyledCardContainer,
  StyledPaymentContainer,
  StyledLinkContainer,
  StyledOrderLink,
  StyledProfileLink,
  StyledSubmitButton
} from '../../styles/payment/PaymentStyles';
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
  }

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
      console.log(payload);
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
        console.log('yay!');
      } else {
        console.log('failure');
        console.log(response);
      }
    } else {
      console.log('That value doesn\'t work!');
    }
  }



  render() {
    return (
      <StyledPaymentContainer>
        <StyledCardContainer>
          <label>Payment:</label>
          <CardElement hidePostalCode={true} />
        </StyledCardContainer>
        <StyledSubmitButton onClick={this.submit}>Submit Payment</StyledSubmitButton>
        <StyledLinkContainer>
          <StyledOrderLink location={ORDER} route={ORDER_ROUTE} />
          <StyledProfileLink location={CHECKOUT_TO_PROFILE} route={PROFILE_ROUTE} />
        </StyledLinkContainer>
      </StyledPaymentContainer>
    );
  }

}

export default connect(mapStateToProps)(injectStripe(PaymentForm));
