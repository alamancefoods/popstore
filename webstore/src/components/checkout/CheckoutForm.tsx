import React, {Component} from 'react';
import {CardElement, injectStripe } from 'react-stripe-elements';
import { CheckoutFormProps, CheckoutEntryValueTypes } from './types'
import { Formik, FormikActions, Form, ErrorMessage, Field } from 'formik';
import { devRootURL } from '../../utilities/rootURLS'
import { CheckoutEntrySchema } from './formSchemas'
import { STATE_LIST } from '../../constants/constants'

class CheckoutForm extends Component<CheckoutFormProps, {}> {
  constructor(props: any) {
    super(props);
    this.submit = this.submit.bind(this)
    this.checkoutFormEntry = this.checkoutFormEntry.bind(this)
  }



  async submit(
    email:string,
    name: string,
    city: string,
    country:string,
    state:string,
    addressLineOne:string,
    addressLineTwo:string,
    postalCode: string
  ){
    let { token } = await this.props.stripe.createToken({name: 'Name'});
    let profile = {
      email: email,
      name: name,
      city: city,
      country: country,
      state: state,
      addressLineOne: addressLineOne,
      addressLineTwo: addressLineTwo,
      postalCode: postalCode
    }
    let payload = {token: token, order: this.props.order, profile: profile}
    let response = await fetch(`${devRootURL}/charge/`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    });
    let myOk = await response.ok
    if (myOk) this.props.completePurchase()
    if (myOk) console.log(myOk)
  }


  checkoutFormEntry() {
    return (
      <Formik
        initialValues={{
          email: '',
          name: '',
          city: '',
          country: '',
          state: '',
          addressLineOne: '',
          addressLineTwo: '',
          postalCode: '',
        }}
        validationSchema={CheckoutEntrySchema}
        onSubmit={(values: CheckoutEntryValueTypes, actions: FormikActions<CheckoutEntryValueTypes>) => {
          this.submit(
            values.email,
            values.name,
            values.city,
            values.country,
            values.state,
            values.addressLineOne,
            values.addressLineTwo,
            values.postalCode
          );}}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label>Name:</label>
              <Field name="name" type="text" placeholder="Dr Archibald Pop MD" />
              <ErrorMessage name="name" />
            </div>
            <div>
              <label>Address Line One:</label>
              <Field name="addressLineOne" type="text" placeholder="1616 Funfoods Lane"/>
              <ErrorMessage name ="addressLineOne"/>
            </div>
            <div>
              <label>Address Line Two:</label>
              <Field name="addressLineTwo" type="text" placeholder="Room 132" />
              <ErrorMessage name="addressLineTwo" />
            </div>
            <div>
              <label>City:</label>
              <Field name="city" type="text" placeholder="Burlington" />
              <ErrorMessage name="city" />
            </div>
            <div>
              <label>State:</label>
              <Field component="select" name="state">
                {STATE_LIST.map((state) =>
                  <option value={state}>{state}</option>
                )}
              </Field>
            </div>
            <div>
              <label>Zip Code:</label>
              <Field name="postalCode" type="string" placeholder="27515" />
              <ErrorMessage name="postalCode" />
            </div>
            <div>
              <label>Email:</label>
              <Field name="email" type="email" placeholder="docpop@popmail.com" />
              <ErrorMessage name="email" />
            </div>
            <div>
              <label>Payment:</label>
              <CardElement hidePostalCode={true} />
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    )
  }


  render(){
    return(
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <div>
          {this.checkoutFormEntry()}
        </div>
        <button onClick={this.props.toggleCheckout}>Back to Order</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
