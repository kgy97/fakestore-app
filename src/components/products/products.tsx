import { Product } from '@/interfaces';
import * as React from 'react';
import ProductCard from './product-card';

type Props = {
    products: Product[];
};

const Products: React.FC<Props> = ({ products }) => {

    return (
        <div className='bg-violet-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-auto justify-items-center'>
            {products.map(product => {
                return <ProductCard key={product.id} product={product} />;
            })}
        </div>
    );
};

export default Products;