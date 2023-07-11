import Head from 'next/head';
import * as React from 'react';
import { useRouter } from 'next/router';
import { Product } from '@/interfaces';
import { getCategories, getCategoryNameFromURL, getProductsInCategory } from '@/helpers';
import Link from 'next/link';
import { Layout } from '@/components';

interface Props {
    products: Product[];
    categories: string[];
};

const ProductsInCategory: React.FC<Props> = ({ products, categories }) => {
    const { asPath } = useRouter();

    return (
        <>
            <Head>
                <title>{`SHOP - ${getCategoryNameFromURL(asPath).toUpperCase()}`}</title>
                <meta name="description" content="Shop electronics, jewelery, women's or men's clothing" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout categories={categories} >
                <main>
                    {products?.map(prod => {
                        return <Link key={prod.id} href={`/product/${encodeURIComponent(`${prod.title}-${prod.id}`)}`} legacyBehavior about={prod.title}>{prod.title}</Link>;
                    })}
                    <br />
                </main>
            </Layout>
        </>
    );
};

export default ProductsInCategory;

export async function getServerSideProps(context) {
    const categories = await getCategories();
    const products = await getProductsInCategory(context.params.category);

    if (!products?.length) return { redirect: { destination: '/', permanent: false, } };

    return { props: { products, categories } };
}