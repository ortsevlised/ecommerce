import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckOutButton = ({price}) => {
    const priceInCents = price * 100;
    const publishableKey = 'pk_test_51HUAqzF1sI9VIFr7a4aBBB2skMzo0YfU0pgyR3imvIdNdjCCVJ2ym5Uz3Uwou8V0hAfPOqGN3qfwUoy71SMGdk0M00dbSvLgBT';

    const onToken = token => {
        console.log(token);
        alert("paaay");
    }
    return (
        <StripeCheckout currency='EUR' stripeKey={publishableKey}
                        label='Pay Now'
                        billingAddress
                        shippingAddress
                        image
                        description={`Your total is €${price}`}
                        amount={priceInCents}
                        panelLabel='Pay Now'
                        token={onToken}

        />
    )
}
export default StripeCheckOutButton;
