import sectionOneImage from "../assets/section1.png";
import Navbar from "./Navbar";

function Hero() {
  const titleFirst = "Effortlessly Create High-";
  const titleSecond = "Quality Articles with Our ";
  const titleRest = " Article Generator";
  return (
    <section className="flex flex-col  section-gradient" id="section-1">
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

        <div className="md:mt-16">
          <img
            src={sectionOneImage}
            alt="section1"
            className="md:w-4xl w-screen max-w-none px-3"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
