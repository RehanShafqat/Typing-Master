import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./Pages/Mainpage";
import { getData, Api_Data } from "./Components/GetText";
import Header from "./Components/Header";
import Home from "./Pages/Home";

const App = () => {
  const [data, setData] = useState<Api_Data | undefined>(undefined);
  
  //getData+Disable Backspace
  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };
    fetchData();



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

  return (
    <div >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/type"
            element={<Mainpage text={data?.text || "...."} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
