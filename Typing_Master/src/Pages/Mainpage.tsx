import React, { useEffect, useRef, useState } from "react";
import RenderTextWithBackground from "../Components/RenderText";
import Dialog from "../Components/Dialog";

const MainPage = ({ text }: { text: string }) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [counter, setCounter] = useState(0);
  const [isDialogueOpen, setIsDialogueOpen] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [accuracy, setAccuracy] = useState(0);
  const [speed, setSpeed] = useState(0);

  const handleDialog = () => {
    if (isDialogueOpen) {
      setInputValue("");
      setCounter(0);
      setAccuracy(0);
      setSpeed(0);
      setStartTime(null);
    }
    setIsDialogueOpen(!isDialogueOpen);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const typedText = newValue.split('');
    const referenceText = text.split('');
    // Handle spaces
    const currentIndex = typedText.length - 1;
    const needsSpace = referenceText[currentIndex] === ' ';
    // If a space is needed but not typed, do not update the input value
    if (needsSpace && !newValue.endsWith(' ') || !needsSpace&&newValue.endsWith(' ') ) {
      return;
    }
    setInputValue(newValue);
    // Set start time if it's not set
    if (!startTime) {
      setStartTime(new Date());
    }
  };
  

  // Counting words typed and calculating accuracy
  useEffect(() => {
    // Count words typed
    const words = inputValue.trim().split(/\s+/);
    setCounter(words.filter(Boolean).length);

    // Convert input and reference texts to arrays of characters
    const typedText = inputValue.split('');
    const referenceText = text.split('');

    
    

    // Calculate the number of correct characters
    let correctChars = 0;
    for (let i = 0; i < inputValue.length; i++) {
        if (typedText[i] === referenceText[i]) {
            // console.log("TypedChar = "+typedText[i]);
            // console.log("Actual = "+referenceText[i]);
            // console.log(inputValue);
            
          correctChars++;
        }
    }
    console.log("Corrected chars = "+correctChars);
    console.log("Input chars = "+inputValue.length);
    

    // Calculate accuracy based on the length of the reference text
    const totalChars = inputValue.length;
    setAccuracy(totalChars > 0 ? (correctChars / totalChars) * 100 : 0);

    // Calculate speed
    if (startTime) {
        const elapsedTime = (new Date().getTime() - startTime.getTime()) / 60000; 
        setSpeed(counter / elapsedTime || 0);
    }
}, [inputValue, text]);



  useEffect(() => {
    if (!isDialogueOpen) inputRef.current?.focus();
  }, [isDialogueOpen]);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="flex flex-col items-center justify-between mt-4">
      <div className="flex mt-4  w-[50%] justify-between items-center mx-auto ">
        <span className=" text-lg">Typed Words: {counter}</span>
        <button
          className="bg-themeColor px-4 py-2 text-white hover:bg-themeColorHover rounded-sm"
          onClick={handleDialog}
        >
          Get Results
        </button>
      </div>
      <div className="relative w-[90%] mb-[40px]  h-[80vh]">
        <div className="h-[80vh] w-full mb-5   ">
          <input
            type="text"
            ref={inputRef}
            value={inputValue}
            onChange={handleChange}
            className="px-3 py-2 border-none text-white border-gray-300 rounded-md  placeholder-transparent outline-none w-full"
            style={{ letterSpacing: 0, wordSpacing: 3 }}
          />
          <div
            className="absolute border border-black rounded-lg overflow-auto   top-[0.56rem] left-[0.8rem] p-2 text-gray-500 transition-all duration-300 w-full h-full"
            style={{ letterSpacing: 3, wordSpacing: 3 }}
            onClick={handleClick}
          >
            <RenderTextWithBackground text={text} inputValue={inputValue} />
          </div>
        </div>
      </div>
      {isDialogueOpen && (
        <Dialog
          totalWords={counter}
          accuracy={Number(accuracy.toFixed(2))}
          speed={Number(speed.toFixed(2))}
          onClose={handleDialog}
        />
      )}
    </div>
  );
};

export default MainPage;
