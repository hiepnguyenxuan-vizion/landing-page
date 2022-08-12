import React from 'react';

import { Outlet } from 'react-router-dom';

import AppHeader from './AppHeader';
import AppSidebar from './AppSidebar';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <>
      <AppHeader />
      <AppSidebar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
