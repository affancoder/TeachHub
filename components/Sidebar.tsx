import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => (
  <aside className="hidden md:flex flex-col bg-white shadow h-full w-60 py-6 px-4 gap-2 fixed top-0 left-0 z-10 font-sans sidebar-font" aria-label="Sidebar navigation"> // Add 'sidebar-font' to apply a custom font if imported

    <Link href="/" className="py-2 px-3 rounded hover:bg-blue-50 transition-all duration-500 hover:scale-105">Dashboard</Link>
    <Link href="/teachers" className="py-2 px-3 rounded hover:bg-blue-50 transition-all duration-500 hover:scale-105">Teachers</Link>
    <Link href="/payments" className="py-2 px-3 rounded hover:bg-blue-50 transition-all duration-500 hover:scale-105">Payments</Link>
  </aside>
);

export default Sidebar;
