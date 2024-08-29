import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./Pages/Mainpage";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Mainpage text="The quick brown fox jumps over the lazy dog." />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
