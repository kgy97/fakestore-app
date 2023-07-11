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
            <div className='bg-violet-600 m-4 h-48 w-72 relative'>
                <div className='h-full w-2/5 relative'>
                    <Image alt={product.title} src={product.image} fill objectFit='contain' className="w-4/5 h-4/5 object-cover" />
                </div>
                {product.title}
            </div>
        </Link>
    );
};

export default ProductCard;