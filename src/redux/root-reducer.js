import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './Cart/Cart.reducer';

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});