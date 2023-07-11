import { backendUrl } from '@/consts';
import { Product } from '@/interfaces';

const getProduct = async (id: number): Promise<Product | null> => {
    const response = await fetch(`${backendUrl}/products/${id}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    });

    try {
        const product: Product | null = await response.json();

        return product;
    } catch (e) {
        return null;
    }
};

export default getProduct;