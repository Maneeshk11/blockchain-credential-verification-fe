interface SigninButtonProps {
	text: string;
	startColor?: string;
	endColor?: string;
}
  
const SigninButton = ({ text, startColor="lowpurple", endColor="highpurple" }: SigninButtonProps) => {
	const fromColor = "from-" + startColor;
	const toColor = "to-" + endColor;
	return (
		<button className={`font text-white bg-gradient-to-r ${fromColor} ${toColor} hover:bg-[#C8BCD1] text-gray-800 px-9 py-3 rounded-full text-base font-medium font-semibold`}>
		{text}
	  </button>
	)
}
  
export default SigninButton;