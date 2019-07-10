import React from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import  CheckoutForm  from './MyStoreCheckout'
import Order from './components/order/OrderForm'


const App: React.FC = () => {
  return (
    <StripeProvider apiKey='pk_test_G0og7jUXcWI9WxiK1YUfgZKe00w9QSGkKy'>
      <div>
        <Elements>
          <CheckoutForm />
        </Elements>
        <Order />
      </div>
    </StripeProvider>
  );
}

export default App;
