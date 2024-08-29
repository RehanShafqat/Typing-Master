import React, { useEffect, useRef, useState } from "react";
import RenderTextWithBackground from "../Components/RenderText";

type TextProps = {
  text: string;
};

const MainPage = ({ text }: TextProps) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    //to focus input field when the component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div
      className="
   flex items-center justify-center mt-6"
    >
      <div className="relative  w-[80%] border border-black min-h-[80vh]">
        <input
          type="text"
          ref={inputRef}
          value={inputValue}
          onChange={handleChange}
          className="px-3 py-2 border-none border-gray-300 rounded-md text-gray-900 placeholder-transparent outline-none  w-full h-full"
          style={{ letterSpacing: 0 }}
        />
        <div
          className="absolute top-[0.56rem] left-[0.8rem] text-gray-500 transition-all duration-300 w-full"
          style={{ letterSpacing: 7, wordSpacing: 4 }}
        >
          {RenderTextWithBackground(text, inputValue)}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
