import React, {Component} from 'react';
import {CardElement, injectStripe } from 'react-stripe-elements';
import { CheckoutFormProps } from './types'
import { devRootURL } from '../../utilities/rootURLS'

class CheckoutForm extends Component<CheckoutFormProps, {}> {
  constructor(props: any) {
    super(props);
    this.submit = this.submit.bind(this)
  }

  async submit(ev: any){
    let { token } = await this.props.stripe.createToken({name: 'Name'});
    let payload = {token: token, order: this.props.order}
    let response = await fetch(`${devRootURL}/charge/`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    });
    let myOk = await response.ok
    if (myOk) this.props.completePurchase()
  }


  render(){
    return(
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Send</button>
        <button onClick={this.props.toggleCheckout}>Back to Order</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
