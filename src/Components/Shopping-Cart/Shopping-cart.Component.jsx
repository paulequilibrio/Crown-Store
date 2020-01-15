import React from 'react';
import { connect } from 'react-redux';
import {toggleCartHidden} from '../../redux/Cart/Cart.action';
import { selectCartItemsCount } from '../../redux/Cart/Cart.selectors';
import {ReactComponent as ShoppingIcon} from '../../Assets/shopping-bag.svg';
import './Shopping-cart.Styles.scss';

const CartIcon = ({ toggleCartHidden, cartCount }) => (
    <div className='cart-icon' onClick={ toggleCartHidden }>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{cartCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = state => ({
    cartCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);