import React, {Component} from 'react';
import {CardElement, injectStripe } from 'react-stripe-elements';
import { Elements } from 'react-stripe-elements';
import { devRootURL } from './utilities/rootURLS'

class CheckoutForm extends Component<{stripe?: any}, {}> {
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
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
