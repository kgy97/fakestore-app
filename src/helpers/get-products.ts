import { backendUrl } from '@/consts';
import { Product } from '@/interfaces';

//Returns every product
const getProducts = async (): Promise<Product[]> => {
    const response = await fetch(`${backendUrl}/products`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    });

    try {
        const products: Product[] = await response.json();

        return products;
    } catch (e) {
        return [];
    }
};

export default getProducts;