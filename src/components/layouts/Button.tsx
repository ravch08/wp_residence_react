import { Link } from "react-router-dom";
import { ButtonProps } from "../../types/types";

const Button = ({ btnText, target }: ButtonProps) => {
  return (
    <Link
      to={target}
      className="inline-block rounded-md bg-primary-800 px-10 py-3 text-white transition-colors duration-500 ease-in-out hover:bg-primary-100"
    >
      {btnText}
    </Link>
  );
};

export default Button;
