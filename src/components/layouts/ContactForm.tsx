const ContactForm = () => {
  return (
    <div className="w-[50%] translate-y-24 rounded-lg bg-white px-8 pb-24 pt-16 shadow-lg">
      <h3 className="mb-8 text-xl text-primary-400">
        What is your query today?
      </h3>
      <form>
        <div className="form-control">
          <label htmlFor="name" className="mb-2 text-sm">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="form-input"
          />
        </div>
        <div className="form-control">
          <label htmlFor="phone" className="mb-2 text-sm">
            Phone Number *
          </label>
          <input
            type="number"
            id="phone"
            placeholder="Phone Number"
            className="form-input"
          />
        </div>
        <div className="form-control">
          <label htmlFor="email" className="mb-2 text-sm">
            Email *
          </label>
          <input
            type="text"
            id="email"
            placeholder="Email"
            className="form-input"
          />
        </div>
        <div className="form-control">
          <label htmlFor="message" className="mb-2 text-sm">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Enter message here..."
            className="form-input"
            rows={6}
          ></textarea>
        </div>
        <button type="submit" className="btn-primary mt-8">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
