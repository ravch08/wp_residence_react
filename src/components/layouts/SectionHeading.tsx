import { HeadingProps } from "../../types/types";

const SectionHeading = ({ superHeading, heading1, heading2 }: HeadingProps) => {
  return (
    <div className="flex flex-col">
      <span className="text-sm text-primary-100">{superHeading}</span>
      <h2 className="py-4 text-3xl leading-10">
        <p>{heading1}</p>
        <p>{heading2}</p>
      </h2>
    </div>
  );
};

export default SectionHeading;
