import * as React from 'react';
import Header from './header';

type Props = {
    categories: string[];
    children: JSX.Element | JSX.Element[];
};

const Layout: React.FC<Props> = ({ categories, children }) => {

    return (
        <div className='min-h-full flex flex-col'>
            <Header categories={categories} />
            <div className='bg-neutral-50 grow'>
                {children}
            </div>
        </div>
    );
};

export default Layout;