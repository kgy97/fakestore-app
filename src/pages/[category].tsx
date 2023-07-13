import Head from 'next/head';
import * as React from 'react';
import { Product } from '@/interfaces';
import { useRouter } from 'next/router';
import { Layout, Products } from '@/components';
import { getCategories, getCategoryNameFromURL, getProductsInCategory } from '@/helpers';

interface Props {
    products: Product[];
    categories: string[];
};

// Displays the products in the selected category. If the category name is incorrect, the page redirects to the home page.
const ProductsInCategory: React.FC<Props> = ({ products, categories }) => {
    const { asPath } = useRouter();

    const upperCaseCategoryName = React.useMemo(() => {
        return getCategoryNameFromURL(asPath).toUpperCase();
    }, [asPath]);

    return (
        <>
            <Head>
                <title>{`SHOP - ${upperCaseCategoryName}`}</title>
                <meta name="description" content="Shop electronics, jewelery, women's or men's clothing" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout categories={categories} >
                <main>
                    <h1 className="text-3xl font-bold text-center px-1 md:px-12 py-6">
                        {upperCaseCategoryName}
                    </h1>
                    <Products products={products} />
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