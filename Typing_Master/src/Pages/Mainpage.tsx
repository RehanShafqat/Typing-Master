import React, { useEffect, useRef, useState } from "react";
import RenderTextWithBackground from "../Components/RenderText";

const MainPage = ({ text }: { text: string }) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [counter, setCounter] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Count words typed
  useEffect(() => {
    const words = inputValue.trim().split(/\s+/);
    setCounter(words.filter(Boolean).length);
  }, [inputValue]);

  //  Disable backspace globally
  useEffect(() => {
    inputRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Backspace") {
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="flex flex-col items-center justify-between mt-4">
      <h1 className="text-3xl mb-2">
        Boost your typing speed and accuracy with Typing Master!
      </h1>
      <span className="mt-4 text-lg">Typed Words: {counter}</span>
      <div className="relative w-[90%]  h-[80vh]">
        <div className="h-[80vh] w-full  ">
          <input
            type="text"
            ref={inputRef}
            value={inputValue}
            onChange={handleChange}
            className="px-3 py-2 border-none text-white border-gray-300 rounded-md  placeholder-transparent outline-none w-full"
            style={{ letterSpacing: 0, wordSpacing: 3 }}
          />
          <div
            className="absolute border border-black rounded-lg overflow-auto  top-[0.56rem] left-[0.8rem] p-2 text-gray-500 transition-all duration-300 w-full h-full"
            style={{ letterSpacing: 3, wordSpacing: 3 }}
            onClick={handleClick}
          >
            <RenderTextWithBackground text={text} inputValue={inputValue} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
