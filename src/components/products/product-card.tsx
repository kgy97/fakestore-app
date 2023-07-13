import Link from 'next/link';
import Image from 'next/image';
import * as React from 'react';
import { Product } from '@/interfaces';

type Props = {
    product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {

    const targetProductLink = React.useMemo(() => {
        return `/product/${encodeURIComponent(`${product.title}-${product.id}`)}`;
    }, [product]);

    return (
        <div className='bg-white m-4 h-48 w-72 md:w-96 relative flex flex-row items-center rounded'>
            <Link href={targetProductLink} legacyBehavior about={product.title}>
                <div className='h-44 w-2/5 relative cursor-pointer'>
                    <Image alt={product.title} src={product.image} fill objectFit='contain' className="w-4/5 h-4/5 object-cover pl-2" />
                </div>
            </Link>
            <div className='w-3/5 h-full p-4 flex flex-col justify-between'>
                <Link href={targetProductLink} legacyBehavior about={product.title}>
                    <span className='font-semibold cursor-pointer hover:underline'>{product.title}</span>
                </Link>
                <span className='font-semibold text-end'>{product.price} $</span>
            </div>
        </div>
    );
};

export default ProductCard;