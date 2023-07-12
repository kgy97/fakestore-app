import { getCategoryNameFromURL } from '@/helpers';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

type Props = {
    title: string;
    target: string;
};

const NavigationItem: React.FC<Props> = ({ title, target }) => {
    const { asPath } = useRouter();

    const isItemCurrentCategory = React.useMemo(() => {
        return title == getCategoryNameFromURL(asPath) || asPath === target;
    }, [asPath, title, target]);

    return (
        <Link key={title} href={target} legacyBehavior about={title}>
            <a
                className={`lg:mr-14 hover:text-gray-600 duration-100 mr-2 py-2`}
                style={{ textShadow: `${isItemCurrentCategory ? '0px 0px 1px black' : 'none'}` }}>
                {title.toUpperCase()}
            </a>
        </Link>
    );
};

export default NavigationItem;