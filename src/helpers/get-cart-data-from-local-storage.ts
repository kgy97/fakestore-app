import { ProductInCart } from '@/interfaces';

// Returns the Redux state from the localStorage
const getCartDataFromLocalStorage = (): ProductInCart[] => {
    try {
        if (typeof localStorage == undefined) return [];

        const rawCartData = localStorage.getItem('cartData');

        if (!!rawCartData) return JSON.parse(rawCartData);
    }
    catch (e) {
        console.log(e);
    }

    return [];
};

export default getCartDataFromLocalStorage;