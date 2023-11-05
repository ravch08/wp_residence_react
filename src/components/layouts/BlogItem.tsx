import { Link } from "react-router-dom";
import { BlogProps } from "../../types/types";
import { ButtonText } from "../utils/helper";

const BlogItem = (props: BlogProps) => {
  return (
    <Link to="#!" className="listing">
      <img src={props.imgSrc} alt={props.title} className="flex rounded-lg " />
      <div className="absolute bottom-2 left-0 z-30 flex h-full w-full flex-col items-start justify-end p-4 text-white">
        <h3 className="mb-4">{props.title}</h3>
        <ButtonText btnText={props.btnText} target={props.target} />
      </div>
    </Link>
  );
};

export default BlogItem;
