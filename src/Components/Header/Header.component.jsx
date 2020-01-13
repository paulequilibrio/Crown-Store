import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {ReactComponent as Logo} from './crown.svg';
import { auth } from '../../Firebase/firebase.utils';
import './Header.styles.scss';
import CartIcon from '../Shopping-Cart/Shopping-cart.Component';
import CartDropdown from '../Cart-Dropdown/Cart-DropDown.component';

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />  
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                Shop
            </Link>
            <Link className='option' to='/shop'>
                Contact
            </Link>
            {
                currentUser ? 
                <div className='option' onClick={() => auth.signOut()}>
                    Sign Out
                </div>
                : <Link className='option' to='/sign'>
                        Sign In
                  </Link>
            }
            <CartIcon/>
        </div>
        {
            hidden
            ? null 
            : <CartDropdown/> 
        }
    </div>

)

const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
    currentUser,
    hidden
})


export default connect(mapStateToProps)(Header);