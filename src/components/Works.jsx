import SectionThreeImage from "../assets/section3.png";
import BackgroundImage from "../assets/Purple_Circle.png";

import SeatInfoTable from "./SeatInfoTable";
import InfoSection from "./InfoSection";

function Works() {
  return (
    <section
      className="flex flex-col items-center gap-8 mb-12 relative"
      id="section-3"
    >
      <h2 className="text-gray-600 text-3xl lg:text-5xl mt-16 text-center font-semibold md:px-24">
        How it works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 overflow-auto">
        <InfoSection title="Enter your post's title & keyword" />
        <SeatInfoTable />
      </div>
    </section>
  );
}

export default Works;
