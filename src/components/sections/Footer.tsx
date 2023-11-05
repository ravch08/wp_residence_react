import { Link } from "react-router-dom";
import {
  ScrollTop,
  SocialIcons,
  logo,
  property01,
  property02,
} from "../utils/helper";

const Footer = () => {
  return (
    <footer className="bg-secondary-400 py-12">
      <div className="container flex items-start justify-between gap-4">
        <div className="w-[33%]">
          <Link to="/">
            <img src={logo} alt="wpresidence" />
          </Link>
          <p className="pb-12 pt-6">
            WpResidence is committed to delivering a high level of expertise,
            customer service, and attention to detail to the marketing and sales
            of luxury real estate, and rental properties.
          </p>
          <SocialIcons
            Twitter="#!"
            LinkedIn="#!"
            Facebook="#!"
            Instagram="#!"
          />
        </div>

        <div>
          <h2 className="mb-6">Contact Us</h2>
          <div className="flex items-center gap-2 py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M4.5 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5h-.75V3.75a.75.75 0 000-1.5h-15zM9 6a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm-.75 3.75A.75.75 0 019 9h1.5a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM9 12a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm3.75-5.25A.75.75 0 0113.5 6H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM13.5 9a.75.75 0 000 1.5H15A.75.75 0 0015 9h-1.5zm-.75 3.75a.75.75 0 01.75-.75H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM9 19.5v-2.25a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-4.5A.75.75 0 019 19.5z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm">
              10845 Griffith Peak Dr, Las Vegas, NV 89135
            </span>
          </div>
          <div className="flex items-center gap-2 py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
            <Link to="tel:+1 800-555-6789" className="text-sm">
              +1 800-555-6789
            </Link>
          </div>
          <div className="flex items-center gap-2 py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
            <Link to="tel:+1 800-555-6744" className="text-sm">
              +1 800-555-6744
            </Link>
          </div>
          <div className="flex items-center gap-2 py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path d="M19.5 22.5a3 3 0 003-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 01-.712 1.321l-5.683-3.06a1.5 1.5 0 00-1.422 0l-5.683 3.06a.75.75 0 01-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 003 3h15z" />
              <path d="M1.5 9.589v-.745a3 3 0 011.578-2.641l7.5-4.039a3 3 0 012.844 0l7.5 4.039A3 3 0 0122.5 8.844v.745l-8.426 4.926-.652-.35a3 3 0 00-2.844 0l-.652.35L1.5 9.59z" />
            </svg>
            <Link to="mailto:office@realestate.com" className="text-sm">
              office@realestate.com
            </Link>
          </div>
        </div>
        <div className="text-right">
          <h2 className="mb-6">Latest Properties</h2>
          <Link to="#!" className="flex items-start justify-end gap-4 pb-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-sm transition-colors duration-500 ease-in-out hover:text-primary-100">
                Villa with Amazing View
              </h3>
              <p className="text-xs">$5.500.000</p>
            </div>
            <img src={property01} alt="property" width={80} />
          </Link>
          <Link to="#!" className="flex items-start justify-end gap-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-sm transition-colors duration-500 ease-in-out hover:text-primary-100">
                Townhouse for Sale
              </h3>
              <p className="text-xs">$210.000</p>
            </div>
            <img src={property02} alt="property" width={80} />
          </Link>
          <p className="mt-12 text-sm text-primary-400">
            Copyright WP Estate. All Rights Reserved.
          </p>
        </div>
      </div>
      <ScrollTop />
    </footer>
  );
};

export default Footer;
