export type ButtonProps = {
  btnText: string;
  target: string;
};

export type HeadingProps = {
  superHeading: string;
  heading1: string;
  heading2: string;
};

export type ServiceItemProps = {
  id?: number;
  heading: string;
  description: string;
  svg: JSX.Element;
};

export type TestimonialProps = {
  id?: number;
  imgSrc: string;
  userName: string;
  quote: string;
  rating: number;
  designation: string;
};

export type RatingProps = {
  rating: number;
};
