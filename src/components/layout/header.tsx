import Link from 'next/link';
import * as React from 'react';
import CartButton from './cart-button';
import HeaderNavigationItem from './header-navigation-item';

type Props = {
    categories: string[];
};

// The header of the website, displays the product categories, the name of the store and the cart
const Header: React.FC<Props> = ({ categories }) => {
    const [mobileNavOpen, setMobileNavOpen] = React.useState<boolean>(false);

    const navigationLinks = React.useMemo(() => {
        return [
            { title: 'All products', link: '/' },
            ...categories.map(category => ({ title: category, link: `/${encodeURIComponent(category)}` }))
        ];
    }, [categories]);

    return (
        <header className='bg-neutral-100 xl:h-20 xl:flex xl:items-center border-b-2 border-neutral-300'>
            <nav className='px-4 2xl:px-12 py-2 flex flex-row justify-between items-start xl:items-center xl:text-md xl:text-lg text-lg w-full relative font-semibold'>
                <Link href={'/'} legacyBehavior about={'Home'}>
                    <div className='mt-1 xl:mt-0 w-2/5 xl:w-1/6 xl:pl-4 text-center xl:text-left flex-1 xl:flex-none cursor-pointer  whitespace-nowrap'>
                        FAKESTORE SHOP
                    </div>
                </Link>
                <div className='flex flex-col xl:justify-center items-end xl:w-3/5 xl:w-5/6 flex-1 xl:flex-none w-1/5'>
                    {/* Mobile menu hamburger icon */}
                    <div className='xl:hidden space-y-2 m-2 mb-3' onClick={() => setMobileNavOpen(prev => !prev)}>
                        {Array.from(Array(3).keys()).map(e => {
                            return <div key={e} className='w-8 h-0.5 bg-gray-600'></div>;
                        })}
                    </div>
                    <div className={`flex flex-col xl:flex-row justify-center xl:mr-4 text-right xl:text-left ${mobileNavOpen ? '' : 'hidden xl:flex'}`}>
                        {navigationLinks.map(navItem => {
                            return <HeaderNavigationItem key={navItem.title} title={navItem.title} target={navItem.link} />;
                        })}
                    </div>
                </div>
                <div className='-order-1 flex-1 xl:order-3 xl:flex-none'>
                    <CartButton />
                </div>
            </nav>
        </header>
    );
};

export default Header;