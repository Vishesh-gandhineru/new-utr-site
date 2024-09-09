import React from 'react';
import MainMenu from './Header/Header';
import Footer from './Footer/Footer';

type LayoutProps = {
    children: React.ReactNode;
    };

const GlobalLayout = ({ children } : LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
    <header>
      <div className="container mt-5">
          <MainMenu />
        </div>
      </header>

      <main className="flex-grow w-full">
        <section className="container">
          {children}
        </section>
      </main>

      <footer className="mt-10">
       <Footer />
      </footer>
    </div>
  );
};

export default GlobalLayout;