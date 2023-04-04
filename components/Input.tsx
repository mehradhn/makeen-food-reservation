import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

interface InputProps {
  type: string;
  name: string;
  id: string;
  autoComplete?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  name,
  id,
  autoComplete,
  placeholder,
}) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <>
      <div className="relative px-2">
        <input
          type={type}
          name={name}
          id={id}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className="
        w-full  placeholder-transparent appearance-none
        bg-transparent rounded-lg border-1 border-gray-300 
        dark:text-white dark:border-gray-600 dark:focus:border-blue-500 
        focus:outline-none focus:ring-0 focus:border-blue-600 peer p-4"
        />
        <label
          htmlFor={name}
          className="absolute text-sm text-gray-500 
        dark:text-gray-400 duration-300 transform 
                -translate-y-4 scale-75 top-2 z-10 origin-[0] 
                bg-gray-100 dark:bg-gray-900 px-2 peer-focus:px-2 
                peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
                peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 
                peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 
                peer-focus:-translate-y-5 peer-focus:text-base peer-focus:font-bold right-3"
        >
          {placeholder}
        </label>
      </div>
    </>
  );
};

export default Input;
