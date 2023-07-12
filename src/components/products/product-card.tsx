import { Product } from '@/interfaces';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

type Props = {
    product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {

    return (
        <Link href={`/product/${encodeURIComponent(`${product.title}-${product.id}`)}`} legacyBehavior about={product.title}>
            <div className='bg-white m-4 h-48 w-72 md:w-96 relative flex flex-row items-center cursor-pointer hover:border-2 rounded'>
                <div className='h-44 w-2/5 relative'>
                    <Image alt={product.title} src={product.image} fill objectFit='contain' className="w-4/5 h-4/5 object-cover pl-2" />
                </div>
                <div className='w-3/5 h-full p-4 flex flex-col justify-between'>
                    <span className='font-semibold'>{product.title}</span>
                    <span className='font-semibold text-end'>{product.price} $</span>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;