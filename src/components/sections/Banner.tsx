const Banner = () => {
  return (
    <section aria-labelledby="Banner" className="px-12 py-0">
      <div className="bg-banner-img relative flex h-[500px] items-center rounded-3xl bg-cover bg-no-repeat">
        <div className="container">
          <div className="flex w-[45%] flex-col">
            <h1 className="mb-8 text-5xl">
              Find your next <br /> Home in Las Vegas
            </h1>
            <p>
              Through our proprietary platform, WpResidence is changing how
              agents and clients navigate the process of finding or selling a
              home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
