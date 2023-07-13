import { ProductInCart } from '@/interfaces';

const getCartDataFromLocalStorage = (): ProductInCart[] => {
    try {
        const rawCartData = localStorage.getItem('cartData');

        if (!!rawCartData) return JSON.parse(rawCartData);
    }
    catch (e) {
        console.log(e);
    }

    return [];
};

export default getCartDataFromLocalStorage;