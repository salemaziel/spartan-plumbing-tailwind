import * as React from 'react';
import Footer from './Footer';
import Header from './Header';

import CTA from '../CTA';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="text-gray-900">{children}</main>
      <CTA
                CTALine2="Contact us to schedule your estimate today"
                Button1Text="Get Started"
            />
      <Footer />
    </>
  );
};

export default Layout;
