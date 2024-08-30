import React, { useEffect, useRef, useState } from "react";
import RenderTextWithBackground from "../Components/RenderText";
type TextProps = {
  text: string;
};
const MainPage = ({ text }: TextProps) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [counter, setCounter] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  //words typed
  useEffect(() => {
    const trimmedValue = inputValue.trim();
    if (trimmedValue.length === 0) {
      setCounter(0);
    } else {
      const words = trimmedValue.split(/\s+/);
      setCounter(words.length);
    }
  }, [inputValue]);

  //disable backspace
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    const handleKeyDown = (event) => {
      if (event.key === "Backspace" || event.keyCode === 8) {
        const element = event.target || event.srcElement;
        const isInputField =
          element.tagName === "input" || element.tagName === "textarea";

        // Prevent backspace outside input and textarea fields
        if (!isInputField) {
          event.preventDefault();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      className="
   flex items-center justify-center mt-6 "
    >
      <div className="relative  w-[80%] border border-black h-[80vh]">
        <div className="h-[80vh]">
          <input
            type="text"
            ref={inputRef}
            value={inputValue}
            onChange={handleChange}
            className="px-3 py-2 border-none border-gray-300 rounded-md text-gray-900 placeholder-transparent outline-none   w-full "
            style={{ letterSpacing: 0 }}
          />
          <div
            className="absolute top-[0.56rem] left-[0.8rem] text-gray-500 transition-all duration-300 w-full"
            style={{ letterSpacing: 7, wordSpacing: 4 }}
          >
            {RenderTextWithBackground(text, inputValue)}
          </div>
        </div>
        <span>Typed Words: {counter}</span>
      </div>
    </div>
  );
};

export default MainPage;
