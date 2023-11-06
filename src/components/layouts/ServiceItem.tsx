import { ServiceItemProps } from "../../types/types";

const ServiceItem = ({ svg, heading, description }: ServiceItemProps) => {
  return (
    <div className="w-[30%] rounded-lg   bg-white p-8 shadow-xl transition-shadow duration-500 ease-in-out hover:shadow-md">
      <figure className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-100">
        {svg}
      </figure>
      <h3 className="py-5 text-lg">{heading}</h3>
      <p className="text-base">{description}</p>
    </div>
  );
};

export default ServiceItem;
