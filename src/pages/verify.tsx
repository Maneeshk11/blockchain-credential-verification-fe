import Navbar from "@/components/navbar/navbar";
import React from "react";
import SigninButton from "@/components/login/SigninButton";

const verify = () => {
	return (
		<div className="flex flex-col h-screen w-screen bg-white gap-24">
			<Navbar />
			<div className="flex flex-col w-1/2 items-start gap-8 mx-auto">
				<span className="font text-black font-poppins font-bold text-4xl">Verify a document</span>
				<span className="font text-black font-poppins text-base">Use this page to verify a document by its hash. The document must be signed with a digital signature, and the signature must be verified with the signer's public key. The signature is included with the document, along with the signer's public key and a signature algorithm identifier.</span>
				<span className="font text-black font-poppins font-bold text-xl">Document hash</span>
				<textarea
					id="input"
					placeholder="Enter a document hash"
					className="placeholder: px-[14px] py-[14px] w-full text-start border border-transparent bg-gray-100 rounded-xl w-3/5 h-44 text-[#333333]"
				/>
				<SigninButton text="Verify document"/>
			</div>
		</div>
	);
};

export default verify;