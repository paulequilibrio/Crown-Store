import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../Custom-button/Custom-button.component';
import './Cart-Dropdown.styles.scss';
import CartItemComponent from '../Cart.item.Component/Cart.item.Component';

const CartDropdown = ({ toggleCartHidden, cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {
            cartItems.map(cartItem => <CartItemComponent key={cartItem.id}  item={cartItem}/>)
        }
        </div>
        <CustomButton> GO TO CHECKOUT </CustomButton>
    </div>
) 

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown);