import {
  AboutUs,
  Banner,
  Blogs,
  ExploreAreas,
  GetInTouch,
  RecentProperties,
  Services,
  Testimonials,
} from "../utils/helper";

const Home = () => {
  return (
    <main>
      <Banner />
      <AboutUs />
      <ExploreAreas />
      <RecentProperties />
      <Services />
      <Testimonials />
      <GetInTouch />
      <Blogs />
    </main>
  );
};

export default Home;
