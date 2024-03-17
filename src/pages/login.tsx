import Navbar from '@/components/navbar/navbar';
import React from 'react';
import LoginEntry from '@/components/login/LoginEntry'
import SigninButton from '@/components/login/SigninButton'
import Image from 'next/image';
import Link from 'next/link';
import CircleWithTick from '@/components/login/Circle';
import { useState } from 'react';
import { useEffect } from 'react';

const CreateAccountForm = () => {

  const [isScreenSmall, setIsScreenSmall] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth < 1000);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);


	return (
    <>
    <div className="min-h-screen bg-[#FFFFFF] flex flex-col gap-24">
        <Navbar />
        <div className="flex flex-row justify-between items-center w-screen">
          <div className="bg-gray p-8 rounded-xl flex flex-col gap-6 items-center justify-center w-1/2 mx-auto my-auto">
            <div className='w-96'>
              <div className='flex flex-col gap-6'>
                  <h1 className="text-4xl font-bold text-[#0D171C]">Login</h1>
                <h1 className="text-xl font-bold text-greyshade">How do I get myself verified?</h1>
                  <LoginEntry heading="Email" placeholder="" />
                  <LoginEntry heading="Password" placeholder="" />
                  <div className="flex flex-row justify-between w-full justify-center items-center">
                    <div className="flex flex-row gap-x-2 justify-center items-center">
                      <button><CircleWithTick className="w-8 h-8 text-green-500" size={10} /></button>
                      <span className='font text-black'>
                        Remember me?
                    </span>
                    
                    </div>
                    <Link href="/forgot-password">
                      <span className='font text-transparent bg-clip-text bg-gradient-to-r from-lowpurple to-highpurple'>
                          Forgot Password?
                      </span>
                    </Link>
                  </div>
              <button className="w-full bg-gradient-to-r from-lowpurple to-highpurple border border-transparent hover:border-gray-300 text-white px-9 py-3 rounded-full text-base font-medium font-semibold">
                Login
              </button>
              <button className="w-full font text-transparent bg-clip-text bg-gradient-to-r from-lowpurple to-highpurple bg-transparent border border-[#9389FF] hover:border-gray-300 text-gray-800 px-9 py-3 rounded-full text-base font-medium font-semibold">
                Register
              </button>
              <div className='flex flex-row items-center justify-evenly gap-4'>
                  <div className="border-b border-greyshade h-1 w-28"></div>
                  <span className='text-base font-bold text-greyshade'>or Sign in with</span>
                  <div className="border-b border-greyshade h-1 w-28"></div>
              </div>
                <div className='flex flex-row items-center justify-center gap-6'>
                  <Link href="/login"><Image src="/images/google.png" alt="Google" width={33} height={33}></Image></Link>
                  <Link href="/login"><Image src="/images/github.png" alt="Github" width={33} height={33}></Image></Link>
              </div>
              </div>
            </div>
            </div>
            {!isScreenSmall && (
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="w-full max-w-full">
                <div className="mx-auto flex flex-row justify-center">
                  <Image
                    className="mx-auto my-auto"
                    src="/images/blockchain.jpg"
                    alt="Example Image"
                    width={500}
                    height={300}
                  />
                  
                </div>
              </div>
            </div>
          )}
        </div>
    </div>

	</>
  );
};

export default CreateAccountForm;