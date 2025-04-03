
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import TopHeader from '@/common/TopHeader';
import React from 'react';

const Layout = ({ children }) => {
    return (
        <>
        <TopHeader/>
            <Header />
            <main >{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
