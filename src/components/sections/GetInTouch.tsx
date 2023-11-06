import { Button, ContactForm, SectionHeading } from "../utils/helper";

const GetInTouch = () => {
  return (
    <section aria-labelledby="Get in Touch" className="mx-12 mb-12">
      <div className="rounded-3xl bg-secondary-400">
        <div className="container">
          <div className="d-flex">
            <ContactForm />
            <div className="w-[40%]">
              <SectionHeading
                superHeading="CONTACT"
                heading1="Get in touch with us today"
                heading2="and our team will assist you"
              />
              <p className="mb-12 mt-6">
                Our experts and developers would love to contribute their
                expertise and insights and help you today. Contact us to help
                you plan your next transaction, either buying or selling a home.
              </p>
              <Button btnText="Contact Us" target="contact" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
