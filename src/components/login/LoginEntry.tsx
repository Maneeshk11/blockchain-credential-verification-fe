
interface LoginEntryProps {
  heading: string;
  placeholder: string;
}

const LoginEntry = ({ heading, placeholder }: LoginEntryProps) => {

    return (
      <div>
          <label htmlFor={heading} className="block mb-2 text-[#0D171C] font-bold">
            {heading}*
          </label>
        <input
          // type={heading}
          type={(heading.toLowerCase() == "email") ? "email" : "password"}
            id={heading}
            placeholder={placeholder}
            className="w-full border border-gray-300 rounded-full px-3 py-3 text-[#333333]"
          />
      </div>
      
    )
}


  
export default LoginEntry;