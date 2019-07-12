import React, { useState } from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import  CheckoutForm  from './components/checkout/CheckoutForm'
import OrderForm from './components/order/OrderForm'


const App: React.FC = () => {
  const [isAtCheckout, setCheckout] = useState(false)

  const toggleCheckout: () => void = () => {
    setCheckout(isAtCheckout => !isAtCheckout)
  }

  const RootComponent = () => {
    let root
    if(isAtCheckout){
      root = <Elements><CheckoutForm toggleCheckout={toggleCheckout}/></Elements>
    }else{
      root = <OrderForm toggleCheckout={toggleCheckout}/>
    }

    return (root)
  }

  return (
    <StripeProvider apiKey='pk_test_G0og7jUXcWI9WxiK1YUfgZKe00w9QSGkKy'>
      <RootComponent />
    </StripeProvider>
  );
}

export default App;

