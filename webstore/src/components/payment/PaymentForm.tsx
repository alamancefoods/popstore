import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completePurchase } from '../../redux/payment/actions';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { Formik, FormikActions, Form, ErrorMessage, Field } from 'formik';
import { devRootURL } from '../../utilities/rootURLS';
import { PaymentFormProps } from './types';
import { NavLink } from 'react-router-dom';
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
  StyledOrderContainer
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
    this.orderParser = this.orderParser.bind(this);
    this.orderMapper = this.orderMapper.bind(this);
  }


  orderParser(returnBalance: boolean): any {
    const balance = this.props.order.totalCount;
    let orderCopy = Object.assign({}, this.props.order);
    delete orderCopy.balance;
    delete orderCopy.totalCount;
    console.log(orderCopy);
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
          return <h3>{popStringify(kvArray[0])} : {kvArray[1]}</h3>;
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
        <StyledOrderContainer>
          <h1>Balance: ${this.orderParser(true)}</h1>
          {this.orderMapper()}
        </StyledOrderContainer>
        <StyledProfileContainer>
          <h1>Name:</h1>
          <h3>{this.props.profile.name}</h3>
          <h1>Address: </h1>
          <h3>{this.props.profile.addressLineOne}</h3>
          {this.props.profile.addressLineTwo.length > 0 ?
            <h3>{this.props.profile.addressLineTwo}</h3> :
            null
          }
          <h3>{this.props.profile.city}, {this.props.profile.state}</h3>
          <h3>{this.props.profile.postalCode}</h3>
        </StyledProfileContainer>
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
