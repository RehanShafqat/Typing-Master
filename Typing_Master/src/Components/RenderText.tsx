const RenderTextWithBackground = (text: string, inputValue: string) => {
  // Use the longest string length to ensure proper comparison
  const maxLength = Math.max(text.length, inputValue.length);
  let output = [];

  // Iterate through each character index up to the maximum length
  for (let i = 0; i < maxLength; i++) {
    const textChar = text[i] || ""; // Handle cases where text is shorter
    const inputChar = inputValue[i] || ""; // Handle cases where inputValue is shorter

    const isCorrect = inputChar === textChar;
    const isWrong = inputChar && inputChar !== textChar;

    // Determine background color
    const bgColor = isCorrect
      ? "bg-green-300"
      : isWrong
      ? "bg-red-500"
      : "bg-gray-300";
    output.push(
      <span key={i} className={`inline-block ${bgColor} text-center`}>
        {textChar === " " ? "\u00A0" : textChar}{" "}
        {/* if it is space , handled correctly */}
      </span>
    );
  }

  return <>{output}</>;
};
export default RenderTextWithBackground;
