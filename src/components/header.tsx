import { getCategoryNameFromURL } from '@/helpers';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import NavigationItem from './navigation-item';

type Props = {
    categories: string[];
};

const Header: React.FC<Props> = ({ categories }) => {
    const [mobileNavOpen, setMobileNavOpen] = React.useState<boolean>(false);

    const navigationLinks = React.useMemo(() => {
        return [
            { title: 'All product', link: '/' },
            ...categories.map(category => ({ title: category, link: `/${encodeURIComponent(category)}` }))
        ];
    }, [categories]);

    return (
        <header>
            <nav className='px-4 lg:px-6 py-2.5 bg-sky-100 flex flex-row justify-between items-top'>
                <div className='mt-2 lg:mt-0'>
                    MY SHOP
                </div>
                <div className='flex flex-col items-end'>
                    <div className='lg:hidden space-y-2 m-2 mb-3' onClick={() => setMobileNavOpen(prev => !prev)}>
                        <div className='w-8 h-0.5 bg-gray-600'></div>
                        <div className='w-8 h-0.5 bg-gray-600'></div>
                        <div className='w-8 h-0.5 bg-gray-600'></div>
                    </div>
                    <div className={`flex flex-col lg:flex-row justify-start text-right lg:text-left ${mobileNavOpen ? '' : 'hidden lg:block'}`}>
                        {navigationLinks.map(navItem => {
                            return <NavigationItem key={navItem.title} Title={navItem.title} Target={navItem.link} />;
                        })}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;