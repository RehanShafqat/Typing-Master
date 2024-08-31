import React from "react";
import heroImage from "../Assets/typing.jpg";
import { Link } from "react-router-dom";
import OurPlan from "../Components/OurPlan";

const Home = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="relative bg-cover bg-center md:h-screen h-[80vh] " style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex  items-center justify-center">
          <div className="container mx-auto px-5 md:mt-0   flex flex-col items-center text-center">
            <h1 className="title-font sm:text-5xl text-3xl mb-2 font-medium text-white">
              Boost your typing speed and accuracy
              <br className="hidden lg:inline-block" />
              with Typing Master!
            </h1>
            <p className="mb-8 md:w-[60%] leading-relaxed text-white">
              Typing Master is your ultimate tool for improving typing speed and
              accuracy. With interactive exercises and real-time feedback, it
              helps you master the keyboard with ease. Track your progress and
              become a typing pro!
            </p>
            <div className="flex justify-center">
              <Link to={"/type"}>
                <button className="inline-flex text-white bg-themeColor border-0 py-3 transition-all px-8 focus:outline-none rounded text-sm hover:bg-themeColorHover">
                  Lets type!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <hr className="bg-gray-400 h-[2px] mt-14 w-[50%] mx-auto" />

      <div className="w-[90%] mx-auto mt-10">
        <h1 className="text-center title-font sm:text-4xl text-3xl mb-16 font-medium text-gray-900">
          How We Make you a Pro!
        </h1>
        <OurPlan />
      </div>
    </section>
  );
};

export default Home;
