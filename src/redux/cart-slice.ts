import { AppState } from './store';
import { ProductInCart } from '@/interfaces';
import { HYDRATE } from 'next-redux-wrapper';
import { createSlice } from '@reduxjs/toolkit';

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