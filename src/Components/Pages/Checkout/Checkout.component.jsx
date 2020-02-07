import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../../redux/Cart/Cart.selectors';
import StripeCheckoutButton from '../../Stripe/stripeCheckout-button';
import {CheckoutPageContainer, CheckoutHeaderContainer, HeaderBlocksContainer
, TotalContainer, TestWarning} from './Checkout.styles';
import CheckoutItem from '../../Checkout-item/Checkout-item.component';

const Checkout = ({ cartItems, total }) => (

    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlocksContainer>
                <span>Product</span>
            </HeaderBlocksContainer>
            <HeaderBlocksContainer>
                <span>Description</span>
            </HeaderBlocksContainer>
            <HeaderBlocksContainer>
                <span>Quantity</span>
            </HeaderBlocksContainer>
            <HeaderBlocksContainer>
                <span>Price</span>
            </HeaderBlocksContainer>
            <HeaderBlocksContainer>
                <span>Remove</span>
            </HeaderBlocksContainer>
        </CheckoutHeaderContainer>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))
        }

        <TotalContainer>
            <span>Total: ${total}</span>
        </TotalContainer>
        <TestWarning>
            *Please use the following test credit card for payment*
            <br />
            4242 4242 4242 4242 - EXP: 01/20 Cvv:123
        </TestWarning>
        <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout);