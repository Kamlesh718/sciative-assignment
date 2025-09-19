import BarGraph from "./BarGraph";
import InfoSection from "./InfoSection";

function ReviewExpertPublishSection() {
  return (
    <section
      className="flex flex-col items-center justify-center mb-24"
      id="section-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <InfoSection
          title="Review,export and publish copy"
          bgImage={false}
          sectionThreeImage={false}
        />
        <div className="flex items-center justify-center p-[32px] rounded-lg bg-gradient-to-r from-red-100 to-blue-200 mx-4">
          <div className="rounded-lg bg-white px-4 py-2 text-center">
            <BarGraph />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewExpertPublishSection;
