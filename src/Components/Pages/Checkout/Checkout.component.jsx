import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../../redux/Cart/Cart.selectors';
import './Checkout.styles.scss';
import CheckoutItem from '../../Checkout-item/Checkout-item.component';

const Checkout = ({ cartItems, total }) => (

    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-blocks'>
                <span>Product</span>
            </div>
            <div className='header-blocks'>
                <span>Description</span>
            </div>
            <div className='header-blocks'>
                <span>Quantity</span>
            </div>
            <div className='header-blocks'>
                <span>Price</span>
            </div>
            <div className='header-blocks'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))
        }

        <div className='total'>
            <span>Total: ${total}</span>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout);