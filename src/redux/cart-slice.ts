import { AppState } from './store';
import { ProductInCart } from '@/interfaces';
import { HYDRATE } from 'next-redux-wrapper';
import { createSlice } from '@reduxjs/toolkit';

// Cart state handling with Redux
export interface CartState {
    cartState: ProductInCart[];
}

const initialState: CartState = {
    cartState: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // This reducer gets the new cart state pre-calculated, so it only needs to set this value to the cartState.
        // I found this unified step a better option when handling Redux, Next.js and localStorage.
        setCartState(state, action) {
            state.cartState = action.payload;
        }
    },

    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.cart,
            };
        },
    },
});

export const { setCartState } = cartSlice.actions;

export const selectCartState = (state: AppState) => state.cart.cartState;

export default cartSlice.reducer;