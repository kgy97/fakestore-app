import { getCategoryNameFromURL } from '@/helpers';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import HeaderNavigationItem from './header-navigation-item';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartState } from '@/redux/cart-slice';

type Props = {
    categories: string[];
};

const Header: React.FC<Props> = ({ categories }) => {
    const cartState = useSelector(selectCartState);
    const [mobileNavOpen, setMobileNavOpen] = React.useState<boolean>(false);

    const navigationLinks = React.useMemo(() => {
        return [
            { title: 'All products', link: '/' },
            ...categories.map(category => ({ title: category, link: `/${encodeURIComponent(category)}` }))
        ];
    }, [categories]);

    return (
        <header className='bg-sky-100 lg:h-20 lg:flex lg:items-center'>
            <nav className='bg-sky-200 px-4 lg:px-6 py-2.5 flex flex-row justify-between items-top lg:text-md xl:text-lg text-lg w-full relative'>
                <div className='mt-1 lg:mt-0 w-2/5 lg:w-1/6'>
                    MY SHOP
                </div>
                <div className='flex flex-col items-end w-3/5 lg:w-5/6'>
                    <div className='lg:hidden space-y-2 m-2 mb-3' onClick={() => setMobileNavOpen(prev => !prev)}>
                        <div className='w-8 h-0.5 bg-gray-600'></div>
                        <div className='w-8 h-0.5 bg-gray-600'></div>
                        <div className='w-8 h-0.5 bg-gray-600'></div>
                    </div>
                    <div className={`flex flex-col lg:flex-row justify-start md:mr-10 text-right lg:text-left ${mobileNavOpen ? '' : 'hidden lg:block'}`}>
                        {navigationLinks.map(navItem => {
                            return <HeaderNavigationItem key={navItem.title} title={navItem.title} target={navItem.link} />;
                        })}
                    </div>
                    <button className='absolute'>Cart ({cartState?.length ?? 0})</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;