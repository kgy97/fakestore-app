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
        addToCart(state, action) {
            if (!action?.payload) return;

            const { product, quantity } = action.payload;

            const itemAlreadyInCartIndex = state.cartState.findIndex(prod => prod.id === product.id);
            if (itemAlreadyInCartIndex == -1) {
                state.cartState.push({ ...product, quantity: quantity ?? 0 });
            }
            else {
                state.cartState[itemAlreadyInCartIndex].quantity += quantity ?? 0;
            }
        },
        removeFromCart(state, action) {
            state.cartState = state.cartState.filter(product => product.id !== action.payload?.id);
        },
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

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectCartState = (state: AppState) => state.cart.cartState;

export default cartSlice.reducer;