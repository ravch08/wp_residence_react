import { Link } from "react-router-dom";
import { ButtonProps } from "../../types/types";

const ButtonText = ({ btnText, target }: ButtonProps) => {
  return (
    <Link to={target} className="flex items-center gap-2 text-sm">
      {btnText}
      <svg
        fill="none"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        className="h-4 w-4 stroke-white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </Link>
  );
};

export default ButtonText;
