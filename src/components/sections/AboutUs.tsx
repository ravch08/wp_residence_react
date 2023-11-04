import Button from "../layouts/Button";
import { aboutImg } from "../utils/helper";

const AboutUs = () => {
  return (
    <section aria-labelledby="About Us">
      <div className="d-flex container gap-8">
        <img src={aboutImg} alt="about us" className="w-[30%] rounded-3xl" />

        <div className="w-[65%]">
          <span className="text-sm">WHO WE ARE</span>
          <h2 className="py-5 text-3xl">
            We help clients buy and <br /> sell houses since 1989
          </h2>
          <p className="mb-12">
            With over $2 Billion in sales, due to our unparalleled results,
            expertise and dedication, we rank amongst the top 6 agencies in Las
            Vegas. Our agency is the industry’s top luxury producer.
          </p>
          <Button btnText="Show More" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
