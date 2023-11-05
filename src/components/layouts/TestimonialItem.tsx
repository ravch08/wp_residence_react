import { TestimonialProps } from "../../types/types";
import { Rating } from "../utils/helper";

const TestimonialItem = (props: TestimonialProps) => {
  return (
    <div className="w-[30%] rounded-lg bg-white p-6 shadow-2xl">
      <div className="flex items-center gap-4">
        <img
          src={props.imgSrc}
          alt={props.userName}
          className="w-16 rounded-full"
        />
        <div className="flex flex-col">
          <span className="text-lg font-medium">{props.userName}</span>
          <span className="text-sm text-gray-400">{props.designation}</span>
        </div>
      </div>
      <p className="py-6">{props.quote}</p>
      <Rating rating={props.rating} />
    </div>
  );
};

export default TestimonialItem;
