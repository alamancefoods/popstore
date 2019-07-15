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
    let token = await this.props.stripe.createToken({name: 'Name'})
    let payload = {token: token, order: {amount: 100, cherryCount: 100}}
    let response = await fetch(`${devRootURL}/charge/`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    });

    if (response.ok) console.log('Purchase Complete!')
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
