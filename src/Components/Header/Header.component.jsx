import React from 'react';
import { connect } from 'react-redux';
import {ReactComponent as Logo} from './crown.svg';
import { auth } from '../../Firebase/firebase.utils';
import CartIcon from '../Shopping-Cart/Shopping-cart.Component';
import CartDropdown from '../Cart-Dropdown/Cart-DropDown.component';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './Header.Styles';

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />  
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                Shop
            </OptionLink>
            <OptionLink to='/shop'>
                Contact
            </OptionLink>
            {
                currentUser ? 
                <OptionDiv onClick={() => auth.signOut()}>
                    Sign Out
                </OptionDiv>
                : <OptionLink to='/sign'>
                        Sign In
                  </OptionLink>
            }
            <CartIcon/>
        </OptionsContainer>
        {
            hidden
            ? null 
            : <CartDropdown/> 
        }
    </HeaderContainer>

)

const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
    currentUser,
    hidden
})


export default connect(mapStateToProps)(Header);