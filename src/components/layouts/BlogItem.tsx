import { BlogProps } from "../../types/types";
import { ButtonText } from "../utils/helper";

const BlogItem = (props: BlogProps) => {
  return (
    <div className="listing w-[22%]">
      <img
        src={props.imgSrc}
        alt={props.title}
        className="flex w-full rounded-lg"
      />
      <div className="absolute bottom-2 left-0 z-30 flex h-full w-full flex-col items-start justify-end p-4 text-white">
        <h3 className="mb-4">{props.title}</h3>
        <ButtonText btnText={props.btnText} target={props.target} />
      </div>
    </div>
  );
};

export default BlogItem;
