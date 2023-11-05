import { blogItems } from "../utils/data";
import { BlogItem, Button, SectionHeading } from "../utils/helper";

const Blogs = () => {
  return (
    <section aria-labelledby="Blogs">
      <div className="container">
        <div className="flex items-end justify-between">
          <SectionHeading
            superHeading="BLOG ARTICLES"
            heading1="The most recent"
            heading2="local Real Estate news"
          />
          <Button btnText="Explore More" target="blogs" />
        </div>
        <div className="d-flex mt-12 flex-wrap gap-8">
          {blogItems?.map((item) => (
            <BlogItem
              key={item.id}
              title={item.title}
              imgSrc={item.imgSrc}
              target={item.target}
              btnText={item.btnText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
