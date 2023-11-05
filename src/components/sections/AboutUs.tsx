import Button from "../layouts/Button";
import { SectionHeading, aboutImg } from "../utils/helper";

const AboutUs = () => {
  return (
    <section aria-labelledby="About Us">
      <div className="d-flex container gap-8">
        <img src={aboutImg} alt="about us" className="w-[30%] rounded-3xl" />

        <div className="w-[65%]">
          <SectionHeading
            superHeading="WHO WE ARE"
            heading1="We help clients buy"
            heading2="and sell houses since 1989"
          />
          <p className="mb-12">
            With over $2 Billion in sales, due to our unparalleled results,
            expertise and dedication, we rank amongst the top 6 agencies in Las
            Vegas. Our agency is the industry’s top luxury producer.
          </p>
          <Button btnText="Show More" target="#!" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
