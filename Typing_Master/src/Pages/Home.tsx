import React from "react";
import heroImage from "../Assets/typing.jpg";
import { Link } from "react-router-dom";
import OurPlan from "../Components/OurPlan";
const Home = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-4  mt-10 lg:mt-28 md:flex-row flex-col items-center w-[90%]">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900">
              Boost your typing speed and accuracy
              <br className="hidden lg:inline-block" />
              with Typing Master!
            </h1>
            <p className="mb-8 leading-relaxed">
              Typing Master is your ultimate tool for improving typing speed and
              accuracy. With interactive exercises and real-time feedback, it
              helps you master the keyboard with ease. Track your progress and
              become a typing pro!"
            </p>
            <div className="flex justify-center">
              <Link to={"/type"}>
                <button className="inline-flex text-white bg-themeColor border-0 py-2 px-6 focus:outline-none  rounded text-sm hover:bg-themeColorHover">
                  Lets type!
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={heroImage}
              style={{ filter: "invert(0)" }}
              width={1000}
            />
          </div>
        </div>
        <hr className="bg-gray-400 h-[0.1rem] mt-14 w-[50%] mx-auto" />
        <div className="w-[90%] mx-auto mt-10">
          <h1 className="text-center title-font sm:text-4xl text-3xl mb-16  font-medium text-gray-900 ">
            How We Make you a Pro!
          </h1>
          <OurPlan />
        </div>
      </section>
    </>
  );
};

export default Home;
