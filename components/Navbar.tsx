import React from 'react';
import Link from 'next/link';

import { useState } from 'react';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-white shadow-sm border-b-2 border-blue-100 px-4 sm:px-6 py-3 flex items-center justify-between sticky top-0 z-30 w-full" aria-label="Main navigation" style={{background: 'linear-gradient(90deg, #f8fafc 80%, #dbeafe 100%)'}}>
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="TeachHub logo" className="w-10 h-10 rounded-full shadow-sm bg-white object-cover" />
        <span className="ml-2 text-2xl sm:text-3xl font-extrabold text-blue-700 tracking-tight drop-shadow-sm">TeachHub</span>
      </div>
      {/* Desktop Links */}
      <div className="hidden md:flex gap-4 text-gray-700 font-medium items-center">
        <Link href="/" className="hover:text-blue-700 focus-visible:underline focus-visible:text-blue-700 transition">Dashboard</Link>
        <Link href="/teachers" className="hover:text-blue-700 focus-visible:underline focus-visible:text-blue-700 transition">Teachers</Link>
        <Link href="/payments" className="hover:text-blue-700 focus-visible:underline focus-visible:text-blue-700 transition">Payments</Link>
      </div>
      {/* Hamburger for mobile */}
      <button
        className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
        aria-label="Toggle navigation menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="text-3xl text-blue-700 font-light tracking-wide">{menuOpen ? '╳' : '≡'}</span>
      </button>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md border-b-2 border-blue-100 flex flex-col items-center gap-2 py-4 md:hidden animate-fade-in z-40">
          <Link href="/" className="py-2 px-6 w-full text-center hover:bg-blue-50 rounded transition font-medium text-gray-700 focus-visible:underline focus-visible:text-blue-700" onClick={() => setMenuOpen(false)}>Dashboard</Link>
          <Link href="/teachers" className="py-2 px-6 w-full text-center hover:bg-blue-50 rounded transition font-medium text-gray-700 focus-visible:underline focus-visible:text-blue-700" onClick={() => setMenuOpen(false)}>Teachers</Link>
          <Link href="/payments" className="py-2 px-6 w-full text-center hover:bg-blue-50 rounded transition font-medium text-gray-700 focus-visible:underline focus-visible:text-blue-700" onClick={() => setMenuOpen(false)}>Payments</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
