import React from 'react';
import MainMenu from './Header/Header';

type LayoutProps = {
    children: React.ReactNode;
    };

const GlobalLayout = ({ children } : LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
    <header>
      <div className="max-w-[2500px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-4">
          <MainMenu />
        </div>
      </header>

      <main className="flex-grow w-full">
        <div className="max-w-[2500px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8">
          {children}
        </div>
      </main>

      <footer className="bg-gray-200">
        <div className="max-w-[2500px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-4">
          <p className="text-center text-sm sm:text-base">
            © {new Date().getFullYear()} Under The Root Stays. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default GlobalLayout;