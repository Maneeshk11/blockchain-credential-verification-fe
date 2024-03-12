import Navbar from '@/components/navbar/navbar';
import React from 'react';

const CreateAccountForm = () => {
	return (
    <>
    <div className="min-h-screen bg-gray-100">
        <Navbar />
      {/* <div className="flex justify-center items-center h-screen"> */}
      <div className="mt-36 bg-gray-100">
		<div className="bg-gray p-8 rounded-xl shadow-md mx-auto max-w-lg">
		<h1 className="text-2xl font-bold mb-9 text-[#0D171C]">Create a free account</h1>
		<div className="mb-4">	
          <label htmlFor="email" className="block font-medium mb-2 text-[#0D171C]">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            className="w-96 border border-gray-300 rounded-xl px-3 py-2 text-[#333333]"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-medium mb-2 text-[#0D171C]">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="At least 8 characters"
            className="w-96 border border-gray-300 rounded-xl px-3 py-2 text-[#333333]"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block font-medium mb-2 text-[#0D171C]">
            Re-enter password
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm your password"
            className="w-96 border border-gray-300 rounded-xl px-3 py-2 text-[#333333]"
          />
        </div>
        <button className="w-96 bg-[#1A85C7] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
          Create account
        </button>
        <p className="mt-4 text-[#4F7A96] text-justify">
          By clicking 'Create account', you agree to our Terms of Service and
          Privacy Policy. You may receive email from us and can opt out at any
          time.
        </p>
      </div>
      </div>
      </div>
	</>
  );
};

export default CreateAccountForm;