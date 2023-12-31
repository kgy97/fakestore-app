import Head from 'next/head';
import * as React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Product } from '@/interfaces';
import { Layout, ProductForm } from '@/components';
import { getCategories, getProduct } from '@/helpers';

interface Props {
    product: Product;
    categories: string[];
};

// The webpage of a single Product. The URL contains both the name of the product and its id, therefore the browser and user are able to get the
// the product name from the url.
// If the product is not found, the page redirect to the home page.
const Product: React.FC<Props> = ({ product, categories }) => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>{product.title}</title>
                <meta name="description" content="Shop electronics, jewelery, women's or men's clothing" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout categories={categories} >
                <button onClick={() => router.back()} className='text-xl m-5 ml-8 hover:underline font-semibold flex flex-row items-center'>
                    <div className='relative h-6 w-6 mr-2'>
                        <Image src={'/left.png'} fill objectFit='contain' alt='cart' />
                    </div>
                    Back to the category
                </button>
                <main className='h-full'>
                    <ProductForm product={product} />
                </main>
            </Layout>
        </>
    );
};

export default Product;

export async function getServerSideProps(context) {
    const categories = await getCategories();
    const productNameWithId: string = context.params['product-name-with-id'];

    if (!productNameWithId?.length) return { redirect: { destination: '/', permanent: true, } };

    const productName = productNameWithId.slice(0, productNameWithId.lastIndexOf('-'));
    const productId = productNameWithId.slice(productNameWithId.lastIndexOf('-') + 1);

    if (!productName?.length || !productId?.length) return { redirect: { destination: '/', permanent: false, } };

    const product = await getProduct(+productId);

    if (!product) return { redirect: { destination: '/', permanent: false, } };

    return { props: { product, categories } };
}