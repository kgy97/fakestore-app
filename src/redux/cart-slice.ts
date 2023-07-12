import { AppState } from './store';
import { HYDRATE } from 'next-redux-wrapper';
import { createSlice } from '@reduxjs/toolkit';
import { Product } from '@/interfaces';

// Type for our state
export interface CartState {
    cartState: Product[];
}

// Initial state
const initialState: CartState = {
    cartState: [],
};

// Actual Slice
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Action to set the authentication status
        setCartState(state, action) {
            state.cartState = action.payload;
        },
        addToCart(state, action) {
            const isItemAlreadyInCart = state.cartState.find(product => product.id === action.payload?.id);
            if (!isItemAlreadyInCart) state.cartState.push(action.payload);
        },
        removeFromCart(state, action) {
            state.cartState = state.cartState.filter(product => product.id !== action.payload?.id);
        },
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.cart,
            };
        },
    },
});

export const { setCartState, addToCart, removeFromCart } = cartSlice.actions;

export const selectCartState = (state: AppState) => state.cart.cartState;

export default cartSlice.reducer;