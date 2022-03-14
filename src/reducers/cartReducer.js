// {
//     id: "",
//     title: "",
//     price: "20",
//     quantity: "1",
// }

import { ADD_TO_CART, DELETE_CART } from '../actions/cartActions';

const intialState = {
    cart: [],
}

export function cartReducer(state = intialState, action) {
 switch (action.type) {
        case ADD_TO_CART: 
            let updateState
            const foundItem = state.cart.find(item => item.id === action.payload.id);
            if (!foundItem) {
                updateState = [...state.cart, action.payload];
            }else{
                updateState = state.cart.map(item => {
                    if (item.id === action.payload.id) {
                        item.quantity = item.quantity + 1;
                    }
                    return item;
                });
            }
            return {
                ...state,
                cart: updateState
            }
        case DELETE_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        
        default:
            return state;
 }
}