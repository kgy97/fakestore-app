import Image from 'next/image';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { selectCartState } from '@/redux/cart-slice';

type Props = {};

//Displays the cart component and the number of items in the cart
const CartButton: React.FC<Props> = ({ }) => {
    const cartState = useSelector(selectCartState);

    const cartItemCount = React.useMemo(() => {
        return cartState?.reduce((prev, cur) => {
            return prev + cur?.quantity ?? 0;
        }, 0) ?? 0;
    }, [cartState]);

    return (
        <button className='xl:-ml-6 relative h-9 w-9'>
            <Image src={'/cart.svg'} fill objectFit='contain' alt='cart' />
            <div className='absolute w-5 h-5 -right-2 bottom-0 bg-gray-800 flex items-center justify-center rounded-full text-sm text-neutral-100 font-semibold'>
                {cartItemCount}
            </div>
        </button>
    );
};

export default CartButton;