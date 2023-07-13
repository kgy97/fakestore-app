import { Product } from '@/interfaces';
import Image from 'next/image';
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, selectCartState, removeFromCart } from '@/redux/cart-slice';

type Props = {
    product: Product;
};

const ProductForm: React.FC<Props> = ({ product }) => {
    const cartState = useSelector(selectCartState);
    const dispatch = useDispatch();

    React.useEffect(() => {
        console.log(cartState);
    }, [cartState]);

    const addItemToCart = React.useCallback(() => {
        dispatch(addToCart(product));
    }, [product, dispatch]);

    const removeItemFromCart = React.useCallback(() => {
        dispatch(removeFromCart(product));
    }, [product, dispatch]);

    return (
        <div className='h-min md:mt-16'>
            <div className='bg-white mx-auto mt-4 h-5/6 md:h-50vh w-90% xl:w-70% relative flex flex-col md:flex-row items-center rounded-md border-2'>
                <div className='h-52 w-full md:h-96 md:w-30% relative mt-4 md:my-5 md:ml-4'>
                    <Image alt={product.title} src={product.image} fill objectFit='contain' className="w-4/5 h-4/5 object-cover" />
                </div>
                <div className='bg-white w-full p-5 md:w-70% h-full md:p-16 flex flex-col justify-between md:ml-4'>
                    <h1 className='font-semibold text-xl'>{product.title}</h1>
                    <p className='text-md text-justify my-4'>{product.description}</p>
                    <p className='text-md my-4'>Rating: {product.rating.rate}/5 (out of {product.rating.count})</p>
                    <div className='flex flex-row justify-end items-center'>
                        <span className='font-semibold text-2xl'>{product.price} $</span>
                        <button onClick={addItemToCart} className='m-2 ml-4 bg-violet-200 rounded-md px-4 py-2 hover:bg-violet-300 active:bg-violet-400'>Add to cart</button>
                        <button onClick={removeItemFromCart} className='m-2 ml-4 bg-violet-200 rounded-md px-4 py-2 hover:bg-violet-300 active:bg-violet-400'>Remove from cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductForm;