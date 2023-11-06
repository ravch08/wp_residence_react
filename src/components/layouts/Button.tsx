import { Link } from "react-router-dom";
import { ButtonProps } from "../../types/types";

const Button = ({ btnText, target }: ButtonProps) => {
  return (
    <Link to={target} className="btn-primary">
      {btnText}
    </Link>
  );
};

export default Button;
