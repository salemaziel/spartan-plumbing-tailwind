import React from 'react';
import Footer2 from './Footer2';
import Header2 from './Header2';

const Layout = ({ children }) => {
  return (
    <>
      <Header2 />
      <main className="text-gray-900">{children}</main>
      <Footer2 />
    </>
  );
};

export default Layout;
