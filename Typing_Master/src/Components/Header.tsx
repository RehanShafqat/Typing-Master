import React from "react";
import keyboard from "../Assets/keyboard.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="text-gray-600 body-font shadow-lg sticky top-0 z-10 w-[100%] bg-white ">
        <div className="container mx-auto md:w-[95%]  flex flex-wrap py-2 flex-col md:flex-row    items-center">
          <Link
            to={"/"}
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="ml- flex items-center justify-center gap-2 text-base">
              <img src={keyboard} alt="Description" width={45} height={45} />
              TypingMaster
            </span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center  text-sm justify-center">
            <Link className="mr-4" to={"/"}>
              Home
            </Link>
            <Link className="mr-4" to={"/type"}>
              Start Typing
            </Link>
          </nav>
          {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded  ml-4 mt-4 md:mt-0 text-sm">
            Button
          </button> */}
        </div>
      </header>
    </>
  );
};

export default Header;
