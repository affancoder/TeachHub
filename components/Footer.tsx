import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-white border-t py-4 text-center text-gray-500 text-sm mt-10" role="contentinfo">
    <span className="inline-flex items-center gap-2 justify-center"><img src="/logo.png" alt="TeachHub logo" className="w-6 h-6 inline-block align-middle rounded-full" /> &copy; {new Date().getFullYear()} TeachHub. All rights reserved.</span>
  </footer>
);

export default Footer;
