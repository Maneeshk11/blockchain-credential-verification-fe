import Image from "next/image"


interface docProps {
	docName: string;
	lastVerified?: number;
	isVerified?: boolean;
}

const Doc = ({ docName, lastVerified=6, isVerified=true }: docProps) => {
	
	var verified = "Verified";
	if (!isVerified) {
		verified = "Not Verified";
	}
	return (
		<div>
			<div className="flex flex-row gap-2 justify-between items-center">
				<div className="flex flex-row gap-12 justify-start">
					<Image src="/images/logo.png" alt="logo" width={55} height={55} />
					<div className="flex flex-col gap-0 items-start justify-start">
							<span className="font font-medium text-black text-lg">{docName}</span>
						<span className="font text-black font-medium">Last verified: {lastVerified} months ago</span>
					</div>
				</div>
				<span className="font text-black">{verified}</span>
			</div>
		</div>
	)
}

export default Doc;