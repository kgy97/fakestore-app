import { backendUrl } from '@/consts';

// Return every product category
const getCategories = async (): Promise<string[]> => {
    const response = await fetch(`${backendUrl}/products/categories`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    });

    try {
        const categories: string[] = await response.json();

        return categories;
    } catch (e) {
        return [];
    }
};

export default getCategories;