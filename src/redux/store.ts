import { cartSlice } from './cart-slice';
import { createWrapper } from 'next-redux-wrapper';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import setCartDataInLocalStorage from '@/helpers/set-cart-data-in-local-storage';

const saveCartDataToLocalStorageMiddleware = (store) => (next) => (action) => {
    if (cartSlice.actions.setCartState.match(action)) {
        setCartDataInLocalStorage(action.payload);
    }
    return next(action);
};

const makeStore = () =>
    configureStore({
        reducer: {
            [cartSlice.name]: cartSlice.reducer,
        },
        devTools: true,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saveCartDataToLocalStorageMiddleware)
    });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);