import React from 'react';

import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="px-4">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
