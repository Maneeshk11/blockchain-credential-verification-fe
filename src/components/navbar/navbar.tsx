import Link from 'next/link';
import React from 'react';
import SigninButton from '../login/SigninButton';

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
          <div className='flex flex-row items-center justify-center gap-3'>
            <SigninButton text="Docs" startColor='gray-500' endColor='highpurple'/>
            <SigninButton text="Sign in" />
            <SigninButton text="Get Started" startColor='lowpurple' endColor='gray-500' />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;