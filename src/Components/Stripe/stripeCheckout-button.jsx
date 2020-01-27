import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceToStripe = price * 100;
    const PublishableKey = 'pk_test_GgcsWKCmtlzcHaGlJICojJNz00w6tPxhnf';
    const onToken = token => {
        console.log(token);
        alert('Succesfull Payment');
    }

    return (
        <StripeCheckout
            label={'Pay Now'}
            panelLabel={'Pay Now'}
            name={'CRWN Clothing Ltd.'}
            billingAddress
            shippingAddress
            image={''}
            description={`Your total is $${price}`}
            amount={priceToStripe}
            token={onToken}
            stripeKey={PublishableKey}
        />
    );
};

export default StripeCheckoutButton;