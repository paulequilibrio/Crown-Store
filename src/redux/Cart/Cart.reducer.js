import CartActionTypes from "./Cart.types";

const INITIAL_STATE = {
    hidden: true
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_STATE_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
    
        default:
            return state;
    }
}

export default cartReducer;