import { getCategoryNameFromURL } from '@/helpers';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

type Props = {
    Title: string;
    Target: string;
};

const NavigationItem: React.FC<Props> = ({ Title, Target }) => {
    const { asPath } = useRouter();

    // const currentCategory = React.useCallback((categoryTitle: string) => {
    //     console.log(categoryTitle == getCategoryNameFromURL(asPath));
    //     console.log(getCategoryNameFromURL(asPath));
    //     return categoryTitle == getCategoryNameFromURL(asPath);
    // }, [asPath]);

    const isItemCurrentCategory = React.useMemo(() => {
        console.log(Title == getCategoryNameFromURL(asPath));
        return Title == getCategoryNameFromURL(asPath);

    }, [asPath, Title]);

    return (
        <Link key={Title} href={Target} legacyBehavior about={Title}>
            <a className={`lg:mr-14 hover:text-gray-800 duration-500 mr-2 py-2 ${isItemCurrentCategory ? 'text-gray-950' : 'text-gray-600'}`}>{Title.toUpperCase()}</a>
        </Link>
    );
};

export default NavigationItem;