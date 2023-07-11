import * as React from 'react';
import Header from './header';

type Props = {
    categories: string[];
    children: JSX.Element | JSX.Element[];
};

const Layout: React.FC<Props> = ({ categories, children }) => {

    return (
        <div>
            <Header categories={categories} />
            {children}
        </div>
    );
};

export default Layout;