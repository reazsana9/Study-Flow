import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            {/* Dynamic content goes here */}
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;