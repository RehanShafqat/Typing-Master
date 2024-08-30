import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./Pages/Mainpage";
import { getData, Api_Data } from "./Components/GetText";

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
        <Routes>
          <Route
            path="/"
            element={<Mainpage text={data?.text || "Rehanwrjgnwrlkm"} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
