import { Link } from "react-router-dom";
import {
  Button,
  SectionHeading,
  listing1,
  listing2,
  listing3,
} from "../utils/helper";

const ExploreAreas = () => {
  return (
    <section aria-labelledby="Explore Popular Areas" className="mx-12 pt-0">
      <div className="rounded-3xl bg-secondary-400 py-20">
        <div className="d-flex container">
          <div className="w-[35%]">
            <SectionHeading
              superHeading="POPULAR AREAS"
              heading1="Explore"
              heading2="most popular areas"
            />
            <p className="mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nemo
              aspernatur impedit. Sequi adipisci dignissimos similique? Eos
              aspernatur deleniti maiores!
            </p>
            <Button btnText="Explore" target="#!" />
          </div>
          <div className="d-flex w-[60%] gap-4">
            <Link to="#!" className="listing">
              <img
                src={listing1}
                alt="Winchester"
                className="flex rounded-lg"
              />
              <div className="absolute left-0 top-0 z-30 flex h-full w-full flex-col  items-start justify-between p-4 text-white">
                <span>Winchester</span>
                <span>2 listings</span>
              </div>
            </Link>
            <Link to="#!" className="listing">
              <img
                src={listing2}
                alt="Meadows Village"
                className="flex rounded-lg "
              />
              <div className="absolute left-0 top-0 z-30 flex h-full w-full flex-col  items-start justify-between p-4 text-white">
                <span>Meadows Village</span>
                <span>4 listings</span>
              </div>
            </Link>
            <Link to="#!" className="listing">
              <img src={listing3} alt="Downtown" className="flex rounded-lg" />
              <div className="absolute left-0 top-0 z-30 flex h-full w-full flex-col items-start justify-between  p-4 text-white">
                <span>Downtown</span>
                <span>5 listings</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreAreas;
