import Navbar from '@/components/navbar/navbar';
import React from 'react';
import LoginEntry from '@/components/login/LoginEntry'

const CreateAccountForm = () => {
	return (
    <>
    <div className="min-h-screen bg-gray-100 flex flex-col gap-36">
        <Navbar />
        <div className="bg-gray p-8 rounded-xl shadow-md mx-auto max-w-lg flex flex-col gap-6 items-center justify-center">
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col items-center gap-3'>
		          <h1 className="text-2xl font-bold text-[#0D171C]">Create a free account</h1>
              <LoginEntry heading="Email" placeholder="you@example.com" />
              <LoginEntry heading="Password" placeholder="At least 8 characters" />
              <LoginEntry heading="Re-enter password" placeholder="Confirm your password" />
            </div>
            <button className="w-96 bg-[#1A85C7] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
            Create account
            </button>
          </div>
        <p className="text-[#4F7A96]">
          By clicking 'Create account', you agree to our Terms of Service and
          Privacy Policy. You may receive email from us and can opt out at any
          time.
        </p>
      </div>
    </div>

	</>
  );
};

export default CreateAccountForm;