import Head from 'next/head';
import * as React from 'react';
import { Product } from '@/interfaces';
import { Layout, Products } from '@/components';
import { getCategories, getProducts } from '@/helpers';

interface Props {
    products: Product[];
    categories: string[];
}

const Home: React.FC<Props> = ({ products, categories }) => {
    return (
        <>
            <Head>
                <title>SHOP</title>
                <meta name="description" content="Shop electronics, jewelery, women's or men's clothing" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout categories={categories} >
                <main>
                    <h1 className="text-3xl font-bold text-center md:px-12 py-6">
                        ALL PRODUCTS
                    </h1>
                    <Products products={products} />
                </main>
            </Layout>
        </>
    );
};

export default Home;

export async function getServerSideProps(context) {
    const products = await getProducts();
    const categories = await getCategories();

    return { props: { products, categories } };
}