import SectionThreeImage from "../assets/section3.png";
import BackgroundImage from "../assets/Purple_Circle.png";

function InfoSection({ title, bgImage = true, sectionThreeImage = true }) {
  return (
    <div className="flex flex-col gap-4 items-center mx-12 mb-12">
      <h3 className="text-gray-600 text-xl lg:text-2xl mt-6 text-center font-semibold md:px-24">
        {title}
      </h3>
      <p>
        Simply provide our AI writer with 1-2 sentences on what to write,
        <br /> and it'll understand and start writing for you
      </p>
      <ul className="flex flex-col gap-4">
        <li className="flex items-center">
          <span className="inline-flex items-center justify-center text-gray-500 w-6 h-6 self-center bg-gray-300 px-2 py-1 rounded-full mr-2">
            ✔
          </span>
          Include any SEO keywords you want to rank for
        </li>
        <li>
          <span className="inline-flex items-center justify-center text-gray-500 w-6 h-6 self-center bg-gray-300 px-2 py-1 rounded-full mr-2">
            ✔
          </span>
          Customize your copy with tone and perspective options
        </li>
        <li>
          <span className="inline-flex items-center justify-center text-gray-500 w-6 h-6 self-center bg-gray-300 px-2 py-1 rounded-full mr-2">
            ✔
          </span>
          Choose from 25+ languages
        </li>
      </ul>
      {sectionThreeImage && (
        <img
          src={SectionThreeImage}
          alt="section 3"
          className="md:size-96 object-contain"
        />
      )}

      {bgImage && (
        <img
          src={BackgroundImage}
          alt="decoration"
          className="absolute left-2/4 md:-translate-x-3/5 -translate-x-1/2 md:top-3/5 top-1/2 w-64 md:w-75 opacity-80 -z-10"
        />
      )}
    </div>
  );
}

export default InfoSection;
