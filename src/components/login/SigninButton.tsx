
import Image from 'next/image';

interface SigninButtonProps {
	imagePath: string;
	text: string;
}
  
const SigninButton = ({ imagePath, text }: SigninButtonProps) => {
	if (imagePath != "") {
	  return (
		<div className="flex flex-row justify-center">
		  <button className="w-96 border border-gray-300 rounded-full px-3 py-3 text-[#333333] font-bold">
			{text}
		  </button>
		</div>
	  )
	} else {
	  return (
		<div className="flex flex-row justify-center">
		  <Image src={text} alt="image" width={22} height={10} />
		  <button className="w-96 border border-gray-300 rounded-full px-3 py-3 text-[#333333] font-bold">
			{text}
		  </button>
		</div>
	  )
	}
}
  
export default SigninButton;