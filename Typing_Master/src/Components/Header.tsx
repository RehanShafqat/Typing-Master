import React from "react";
import keyboard from "../Assets/keyboard.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml- flex items-center justify-center gap-2 text-base">
              <img src={keyboard} alt="Description" width={45} height={45} />
              TypingMaster
            </span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center  text-sm justify-center">
            <Link to={"/"}>Start Typing</Link>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded  ml-4 mt-4 md:mt-0 text-sm">
            Button
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
