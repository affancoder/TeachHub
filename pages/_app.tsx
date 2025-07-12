import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 pt-6 pb-8 px-2 md:pl-64 transition-all duration-200">
          <Component {...pageProps} />
        </main>
      </div>
      <ScrollToTop />
      <Footer />
    </div>
  );
}
