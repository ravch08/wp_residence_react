const Button = ({ btnText }) => {
  return (
    <button className="bg-primary-800 hover:bg-primary-100 inline-block rounded-md px-10 py-3 text-white transition-colors duration-500 ease-in-out">
      {btnText}
    </button>
  );
};

export default Button;
