

interface LoginEntryProps {
  heading: string;
  placeholder: string;
}

const LoginEntry = ({ heading, placeholder }: LoginEntryProps) => {

    return (
      <div>
          <label htmlFor={heading} className="block font-medium mb-2 text-[#0D171C]">
            {heading}
          </label>
        <input
          // type={heading}
          type={(heading.toLowerCase() == "email") ? "email" : "password"}
            id={heading}
            placeholder={placeholder}
            className="w-96 border border-gray-300 rounded-xl px-3 py-2 text-[#333333]"
          />
      </div>
      
    )
}
  
export default LoginEntry;