import Image from 'next/image';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { selectCartState } from '@/redux/cart-slice';

type Props = {};

const CartButton: React.FC<Props> = ({ }) => {
    const cartState = useSelector(selectCartState);

    return (
        <button className='md:-ml-6 relative h-9 w-9'>
            <Image src={'/cart.svg'} fill objectFit='contain' alt='cart' />
            <div className='absolute w-5 h-5 -right-2 bottom-0 bg-gray-800 flex items-center justify-center rounded-full text-sm text-cyan-100 font-semibold'>{cartState?.length ?? 0}</div>
        </button>
    );
};

export default CartButton;