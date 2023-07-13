import Link from 'next/link';
import * as React from 'react';
import { useRouter } from 'next/router';
import { getCategoryNameFromURL } from '@/helpers';

type Props = {
    title: string;
    target: string;
};

// The navigation item of the header, navigates to the current category and displays its name 
const HeaderNavigationItem: React.FC<Props> = ({ title, target }) => {
    const { asPath } = useRouter();

    const isItemCurrentCategory = React.useMemo(() => {
        return title == getCategoryNameFromURL(asPath) || asPath === target;
    }, [asPath, title, target]);

    return (
        <Link key={title} href={target} legacyBehavior about={title}>
            <a className={`lg:mr-6 xl:mr-14 lg:ml-6 hover:text-gray-600 duration-100 mr-2 py-2 whitespace-nowrap`}
                style={{ textShadow: `${isItemCurrentCategory ? '0px 0px 1px black' : 'none'}` }}>
                {title.toUpperCase()}
            </a>
        </Link>
    );
};

export default HeaderNavigationItem;