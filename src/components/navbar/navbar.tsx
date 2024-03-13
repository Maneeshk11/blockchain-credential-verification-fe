import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray shadow-md">
      <div className="max-w-1xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-row justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-gray-800 font-bold text-xl">
              VeriDocs
            </Link>
          </div>
          <div>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-9 py-3 rounded-xl text-sm font-medium font-semibold">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;