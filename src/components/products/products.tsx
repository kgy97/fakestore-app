import * as React from 'react';
import { Product } from '@/interfaces';
import ProductCard from './product-card';

type Props = {
    products: Product[];
};

// Displays the products in a list
const Products: React.FC<Props> = ({ products }) => {

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 lg:mx-10 m-auto justify-items-center pt-8'>
            {products.map(product => {
                return <ProductCard key={product.id} product={product} />;
            })}
        </div>
    );
};

export default Products;