import React, { memo } from "react";

const CharWithBackground = memo(
  ({ textChar, inputChar }: { textChar: string; inputChar: string }) => {
    const isCorrect = inputChar === textChar;
    const isWrong = inputChar && inputChar !== textChar;

    const bgColor = isCorrect ? "bg-green-300" : isWrong ? "bg-red-500" : "";

    return (
      <span className={`inline-block ${bgColor} text-2xl`}>
        {textChar === " " ? "\u00A0" : textChar}
      </span>
    );
  }
);

const WordWithBackground = memo(
  ({ word, inputWord }: { word: string; inputWord: string }) => (
    <span className="inline-block whitespace-nowrap">
      {Array.from(word).map((textChar, charIndex) => (
        <CharWithBackground
          key={charIndex}
          textChar={textChar}
          inputChar={inputWord[charIndex] || ""}
        />
      ))}
    </span>
  )
);
const RenderTextWithBackground = memo(
  ({ text, inputValue }: { text: string; inputValue: string }) => {
    const textWords = text.split(/(\s+)/);
    const inputWords = inputValue.split(/(\s+)/);

    return textWords.map((word: string, wordIndex: number) => (
      <React.Fragment key={wordIndex}>
        <WordWithBackground
          word={word}
          inputWord={inputWords[wordIndex] || ""}
        />
      </React.Fragment>
    ));
  }
);

export default RenderTextWithBackground;
