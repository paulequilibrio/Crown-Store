import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import CustomButton from '../Custom-button/Custom-button.component';
import { toggleCartHidden } from '../../redux/Cart/Cart.action';
import './Cart-Dropdown.styles.scss';
import CartItemComponent from '../Cart.item.Component/Cart.item.Component';
import { selectCartItems } from '../../redux/Cart/Cart.selectors';

const CartDropdown = ({ cartItems, history, dispatch }) => (

         <div className='cart-dropdown'>
            <div className='cart-items'>
            {   cartItems.length ? 
                    cartItems.map(cartItem => <CartItemComponent key={cartItem.id}  item={cartItem}/>)
                    : <div className='empty-message'>Your Cart Is Empty</div>
            }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
                }}> GO TO CHECKOUT </CustomButton>
        </div>
)
   

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));