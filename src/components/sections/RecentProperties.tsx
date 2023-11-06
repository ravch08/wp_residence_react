import { properties } from "../utils/data";
import { Button, PropertyItem, SectionHeading } from "../utils/helper";

const RecentProperties = () => {
  return (
    <section aria-labelledby="Recent Properties">
      <div className="container">
        <SectionHeading
          superHeading="RECENT PROPERTES"
          heading1="Explore the latest"
          heading2="properties available"
        />

        <div className="d-flex mb-16 mt-12 flex-wrap gap-10">
          {properties
            ?.slice(0, 6)
            .map((item) => (
              <PropertyItem
                key={item.id}
                area={item.area}
                title={item.title}
                price={item.price}
                badge={item.badge}
                target={item.target}
                bedroom={item.bedroom}
                featured={item.featured}
                bathroom={item.bathroom}
                userName={item.userName}
                location={item.location}
                userImgSrc={item.userImgSrc}
                description={item.description}
                propertyImgSrc={item.propertyImgSrc}
              />
            ))}
        </div>

        <div className="text-center">
          <Button btnText="Load More" target="#" />
        </div>
      </div>
    </section>
  );
};

export default RecentProperties;
