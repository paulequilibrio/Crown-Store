import React from 'react';
import './Cart.Item.Component.styles.scss';


const CartItemComponent = ( {item: { imageUrl, price, quantity, name}}) => (

    <div className='cart-item'>
        <img src={imageUrl} alt='item'/>
        <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price' > {quantity} x {price} </span>
        </div>
    </div>
)

export default CartItemComponent;