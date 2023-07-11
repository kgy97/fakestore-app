import { backendUrl } from '@/consts';
import { Product } from '@/interfaces';

const getProductsInCategory = async (category: string): Promise<Product[]> => {
    const response = await fetch(`${backendUrl}/products/category/${encodeURIComponent(category)}`, {
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

export default getProductsInCategory;