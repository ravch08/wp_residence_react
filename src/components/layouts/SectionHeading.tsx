import { HeadingProps } from "../../types/types";

const SectionHeading = ({ superHeading, heading1, heading2 }: HeadingProps) => {
  return (
    <div className="flex flex-col">
      <span className="text-sm text-primary-100">{superHeading}</span>
      <h2 className="flex flex-col py-4 text-3xl leading-10 text-primary-400">
        <span>{heading1}</span>
        <span>{heading2}</span>
      </h2>
    </div>
  );
};

export default SectionHeading;
