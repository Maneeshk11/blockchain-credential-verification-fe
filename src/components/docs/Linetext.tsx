
interface linetextProps {
	text: string;
}
  
const Linetext = ({ text }: linetextProps) => {
	return (
		<div className="flex flex-col justify-center items-center">
			<span className="font text-black">{text}</span>
			<div className="border-b border-gray-100 h-0.5 w-80 bg-gray-100"></div>
		</div>
	)
}

export default Linetext;