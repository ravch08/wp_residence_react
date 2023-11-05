import { testimonialItems } from "../utils/data";
import { SectionHeading, TestimonialItem } from "../utils/helper";

const Testimonials = () => {
  return (
    <section aria-labelledby="Testimonials" className="pt-36">
      <div className="container">
        <SectionHeading
          superHeading="OUR CLIENTS"
          heading1="What are our clients"
          heading2="saying about us"
        />
        <div className="d-flex mt-12 flex-wrap gap-8">
          {testimonialItems?.map((item) => (
            <TestimonialItem
              key={item.id}
              quote={item.quote}
              rating={item.rating}
              imgSrc={item.imgSrc}
              userName={item.userName}
              designation={item.designation}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
