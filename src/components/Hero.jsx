import { useState } from "react";
import sectionOneImage from "../assets/section1.png";
import Navbar from "./Navbar";
import BackgroundImage from "../assets/Purple_Circle_2.png";

function Hero() {
  const [loading, setLoading] = useState(true);

  const titleFirst = "Effortlessly Create High-";
  const titleSecond = "Quality Articles with Our ";
  const titleRest = " Article Generator";

  return (
    <section
      className="flex flex-col  section-gradient relative"
      id="section-1"
    >
      {/* NAVBAR */}
      <Navbar />
      <div className="flex flex-col gap-6 mt-16 px-12 justify-center items-center font-mono">
        <h2 className="text-3xl lg:text-5xl text-center font-semibold md:px-24">
          <span className="md:block">{titleFirst}</span>
          <span className="md:block">{titleSecond}</span>
          <span>{titleRest}</span>
        </h2>

        <p className="text-gray-500 text-center font-semibold">
          AI has the potential to revolutionize the way we live and work,
          <br />
          from improving healthcare and transportation to enhancing the way we
          communicate.
        </p>

        <div className="flex gap-8">
          <button className="border-[2px] border-violet-500  px-4 py-1 rounded-full text-white hover:cursor-pointer bg-violet-500 hover:bg-transparent hover:text-violet-500">
            Get Started
          </button>
          <button className="border-[2px] border-violet-500  px-4 py-1 rounded-full text-violet-500 hover:cursor-pointer hover:bg-violet-500 hover:text-white min-w-32 max-w-32">
            Explore
          </button>
        </div>

        <div className="md:mt-16 relative z-10">
          {loading && (
            <div className="animate-pulse bg-gray-300 md:w-full h-64 md:h-96 px-3 rounded-lg mx-6" />
          )}

          <img
            src={sectionOneImage}
            alt="section1"
            className={`md:w-2xl lg:w-4xl  w-screen max-w-none px-3 transition-opacity duration-500 ${
              loading ? "opacity-0" : "opacity-100"
            }`}
            onLoad={() => setLoading(false)}
          />
          <img
            src={BackgroundImage}
            alt="decoration"
            className="overflow-hidden absolute left-0 md:-translate-x-3/5 -translate-x-1/2 md:top-[-20px]  w-42 top-[-35px] -z-10  opacity-75"
          />
          <img
            src={BackgroundImage}
            alt="decoration"
            className="absolute hidden md:inline md:right-[-50px] right-[-50px] bottom-0 -z-10 overflow-hidden opacity-75 w-42"
            style={{ clipPath: "inset(0 0 50% 0)" }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
