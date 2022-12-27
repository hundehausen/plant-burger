import React from 'react';

import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="relative min-h-full bg-white px-4 text-gray-800 dark:bg-purple-700 dark:text-gray-200">
      <div className="pb-[280px]">
        <Navbar />
        {children}
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
