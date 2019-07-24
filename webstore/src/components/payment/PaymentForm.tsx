import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { Formik, FormikActions, Form, ErrorMessage, Field } from 'formik';
import { devRootURL } from '../../utilities/rootURLS'
import { PaymentFormProps } from './types'
import { NavLink } from 'react-router-dom'
import { StyledCardContainer } from '../../styles/payment/PaymentStyles'


class PaymentForm extends Component<PaymentFormProps, {}> {
  constructor(props: PaymentFormProps){
    super(props);
    this.submit = this.submit.bind(this)
    this.paymentFormEntry = this.paymentFormEntry.bind(this)
  }


  async submit(){
    let { token } = await this.props.stripe.createToken({name: 'Name'})
    if(typeof token !== 'undefined'){
      let payload = {token: token, order: this.props.order, profile: this.props.profile}
      let response = await fetch(`${devRootURL}/charge/`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
      });
      let myOK = await response.ok
      if (myOK) console.log('Oll Korrect!')
    }else{
      console.log("Please enter your credit card information")
    }
  }


  paymentFormEntry() {
    return(
      <StyledCardContainer>
        <label>Payment:</label>
        <CardElement hidePostalCode={true} />
        <button onClick={this.submit}>Submit Payment</button>
      </StyledCardContainer>
    )
  }

  render(){
    return(
      <div className={this.props.className}>
        {this.paymentFormEntry()}
        <NavLink to="/checkout/shipping-details">Change Shipping Details</NavLink>
        <NavLink to="/">Modify Order</NavLink>
      </div>
    )
  }
}

export default injectStripe(PaymentForm);
