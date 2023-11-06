import { serviceItems } from "../utils/data";
import { SectionHeading, ServiceItem } from "../utils/helper";

const Services = () => {
  return (
    <section aria-labelledby="Our Services" className="mx-12">
      <div className="rounded-3xl bg-secondary-400 pt-12">
        <div className="container translate-y-20">
          <SectionHeading
            superHeading="OUR SERVICES"
            heading1="Top Real Estate"
            heading2="services available"
          />
          <div className="mt-12 flex flex-wrap items-center justify-between gap-8">
            {serviceItems?.map((item) => (
              <ServiceItem
                key={item.id}
                svg={item.svg}
                heading={item.heading}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
