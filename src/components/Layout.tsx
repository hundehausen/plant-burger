import React from 'react';

import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="bg-white px-4 text-gray-800 dark:bg-purple-700 dark:text-gray-200">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
