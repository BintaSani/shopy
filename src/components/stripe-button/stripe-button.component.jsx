import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
//import {ReactComponent as Logo } from '../../assets/cart-basket-for-ec-site-svgrepo-com.svg';



const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51NHDZFHl89l2miXQg56qwY63yNtdijjISwQWycxPAak151vA31J3krJHExK5xtxnBO3n5kldP6AJ2ZY1xeJ2pBJv00zlZ1AjC3';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
     
    return(
        <StripeCheckout
          label='Pay Now'
          name='Shopy Ltd.'
          billingAddress
          shippingAddress
          image= 'https://i.ibb.co/r4d8n2C/cart.png'
          description={`Your total is $${price}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}
        
        />
    );
};

export default StripeCheckoutButton;