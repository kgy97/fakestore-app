import Image from 'next/image';
import * as React from 'react';
import { currency } from '@/consts';
import { Product } from '@/interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartState, setCartState } from '@/redux/cart-slice';

type Props = {
    product: Product;
};

const ProductForm: React.FC<Props> = ({ product }) => {
    const dispatch = useDispatch();
    const cartState = useSelector(selectCartState);
    const [quantity, setQuantity] = React.useState<number>(1);

    const addItemToCart = React.useCallback(() => {
        let newCartState = structuredClone(cartState);

        const itemAlreadyInCartIndex = newCartState.findIndex(prod => prod.id === product.id);
        if (itemAlreadyInCartIndex == -1) {
            newCartState.push({ ...product, quantity: quantity ?? 0 });
        }
        else {
            newCartState[itemAlreadyInCartIndex].quantity += quantity ?? 0;
        }
        dispatch(setCartState(newCartState));
    }, [product, dispatch, quantity, cartState]);

    const removeItemFromCart = React.useCallback(() => {
        const newCartState = cartState.filter(prod => prod.id !== product.id);

        dispatch(setCartState(newCartState));
    }, [product, dispatch, cartState]);

    return (
        <div className='h-min md:mt-16'>
            <div className='bg-white mx-auto mt-4 h-5/6 md:h-50vh w-90% xl:w-70% relative flex flex-col md:flex-row items-center rounded-lg border-2 border-neutral-200'>
                <div className='h-52 w-full md:h-96 md:w-30% relative mt-4 md:my-5 md:ml-8'>
                    <Image alt={product.title} src={product.image} fill objectFit='contain' className="w-4/5 h-4/5 object-cover" />
                </div>
                <div className='w-full p-5 md:w-70% h-full md:p-16 flex flex-col justify-between md:ml-3'>
                    <h1 className='font-semibold text-xl'>
                        {product.title}
                    </h1>
                    <p className='text-md text-justify my-4'>
                        {product.description}
                    </p>
                    <p className='text-md my-4'>
                        Rating: <span className='font-semibold'>{product.rating.rate}/5</span> (out of {product.rating.count})
                    </p>
                    <div className='flex flex-col md:flex-row md:justify-end md:items-center items-end'>
                        <div className='flex flex-row items-center align-center pb-3 md:pb-0'>
                            <span className='font-semibold text-2xl  pr-5'>
                                {product.price} {currency}
                            </span>
                            <input
                                type='number'
                                className='h-10 text-lg w-16 border-2 rounded-lg px-2'
                                value={quantity}
                                onChange={(e) => setQuantity(+e?.target?.value ?? 1)} />
                        </div>
                        <div className='flex flex-row items-center md:pl-5'>
                            <button onClick={addItemToCart} className='m-2 ml-4 bg-neutral-200 rounded-md px-4 py-2 hover:bg-neutral-300 active:bg-neutral-400'>
                                Add to cart
                            </button>
                            <button onClick={removeItemFromCart} className='m-2 ml-4 bg-neutral-200 rounded-md px-4 py-2 hover:bg-neutral-300 active:bg-neutral-400 -order-1 md:order-1'>
                                Remove product
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductForm;