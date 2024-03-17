import React from "react";
import Image from "next/image";
import Navbar from "@/components/navbar/navbar";
import Linetext from "@/components/docs/linetext";
import Doc from "@/components/docs/doc";

const docs = () => {
	
	return (
		<div className="flex flex-col gap-12 bg-white w-screen h-screen">
			<Navbar />
			<div className="w-3/5 mx-auto my-12 flex flex-col gap-8">

				<div className="flex flex-row items-center justify-start gap-2">
					<Image src="/images/logo.png" alt="logo" width={110} height={110} />
					<div className="flex flex-col items-start justify-center gap-0">
						<span className="font font-semibold text-black text-3xl">Docverify</span>
						<span className="font text-black">Blockchain-based document verification services</span>
					</div>
				</div>

				<div className="flex flex-row gap-1 items-center justify-evenly">
					<Linetext text="Overview"></Linetext>
					<Linetext text="Documents"></Linetext>
					<Linetext text="Settings"></Linetext>
				</div>

				<div className="flex flex-col gap-4">
					<span className="font font-semibold text-xl text-black">Your Documents</span>
					<div className="flex flex-col justify-start gap-3">
						<Doc docName="Diploma" lastVerified={12}></Doc>
						<Doc docName="Transcript"></Doc>
						<Doc docName="Resume"></Doc>
						<Doc docName="Employment Contract"></Doc>
						<Doc docName="Employment Contract"></Doc>
						<Doc docName="Employment Contract"></Doc>
					</div>
				</div>

			</div>
		</div>
	)
}
export default docs;