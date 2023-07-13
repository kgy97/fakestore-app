import { ProductInCart } from '@/interfaces';

const setCartDataInLocalStorage = (cartData: ProductInCart[]): void => {
    try {
        if (typeof window == undefined) return;

        localStorage.setItem('cartData', JSON.stringify(cartData));
    }
    catch (e) {
        console.log(e);
    }
};

export default setCartDataInLocalStorage;