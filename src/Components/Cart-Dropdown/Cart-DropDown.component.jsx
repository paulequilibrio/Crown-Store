import React from 'react';
import CustomButton from '../Custom-button/Custom-button.component';
import './Cart-Dropdown.styles.scss';

const CartDropdown = ({ toggleCartHidden }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'/>
        <CustomButton> GO TO CHECKOUT </CustomButton>
    </div>
) 

export default CartDropdown;