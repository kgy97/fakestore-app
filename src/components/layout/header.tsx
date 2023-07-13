import * as React from 'react';
import HeaderNavigationItem from './header-navigation-item';
import CartButton from './cart-button';

type Props = {
    categories: string[];
};

const Header: React.FC<Props> = ({ categories }) => {
    const [mobileNavOpen, setMobileNavOpen] = React.useState<boolean>(false);

    const navigationLinks = React.useMemo(() => {
        return [
            { title: 'All products', link: '/' },
            ...categories.map(category => ({ title: category, link: `/${encodeURIComponent(category)}` }))
        ];
    }, [categories]);

    return (
        <header className='bg-cyan-100 lg:h-20 lg:flex lg:items-center'>
            <nav className='px-4 lg:px-12 py-2 flex flex-row justify-between items-start md:items-center lg:text-md xl:text-lg text-lg w-full relative font-semibold'>
                <div className='mt-1 lg:mt-0 w-2/5 lg:w-1/6 md:pl-4 text-center md:text-left flex-1 md:flex-none'>
                    MY SHOP
                </div>
                <div className='flex flex-col md:justify-center items-end md:w-3/5 lg:w-5/6 flex-1 md:flex-none w-1/5'>
                    <div className='lg:hidden space-y-2 m-2 mb-3' onClick={() => setMobileNavOpen(prev => !prev)}>
                        <div className='w-8 h-0.5 bg-gray-600'></div>
                        <div className='w-8 h-0.5 bg-gray-600'></div>
                        <div className='w-8 h-0.5 bg-gray-600'></div>
                    </div>
                    <div className={`flex flex-col lg:flex-row justify-center md:mr-4 text-right lg:text-left ${mobileNavOpen ? '' : 'hidden lg:flex'}`}>
                        {navigationLinks.map(navItem => {
                            return <HeaderNavigationItem key={navItem.title} title={navItem.title} target={navItem.link} />;
                        })}
                    </div>
                </div>
                <div className='-order-1 flex-1 md:order-3 md:flex-none'>
                    <CartButton />
                </div>
            </nav>
        </header>
    );
};

export default Header;