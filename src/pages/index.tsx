import Head from 'next/head';
import { Product } from '@/interfaces';
import { getCategories, getProducts } from '@/helpers';
import Link from 'next/link';
import { Layout } from '@/components';

interface Props {
    products: Product[];
    categories: string[];
}

const Home: React.FC<Props> = ({ products, categories }) => {
    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout categories={categories} >
                <main>
                    <h1 className="text-3xl font-bold underline">
                        Hello world!
                    </h1>
                    {products?.map(prod => {
                        return <Link key={prod.id} href={`/product/${encodeURIComponent(`${prod.title}-${prod.id}`)}`} legacyBehavior about={prod.title}>{prod.title}</Link>;
                    })}
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