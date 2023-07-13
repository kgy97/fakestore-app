import * as React from 'react';
import { useDispatch } from 'react-redux';
import { setCartState } from '@/redux/cart-slice';
import getCartDataFromLocalStorage from '@/helpers/get-cart-data-from-local-storage';

// Initializes the Redux state with the data from the localStorage.
// The type check of the 'localStorage' ensures that the function is not called server-side.
const useInitialCartData = (): void => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        if (typeof localStorage == "undefined") return;

        const cartData = getCartDataFromLocalStorage();

        if (cartData) dispatch(setCartState(cartData));
    }, [dispatch]);

};

export default useInitialCartData;