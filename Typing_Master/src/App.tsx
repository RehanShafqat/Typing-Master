import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./Pages/Mainpage";
import { getData, Api_Data } from "./Components/GetText";
import Header from "./Components/Header";
import Home from "./Pages/Home";

const App = () => {
  const [data, setData] = useState<Api_Data | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div>
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
