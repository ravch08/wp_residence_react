import { Link, NavLink } from "react-router-dom";
import { logo } from "../utils/helper";

const Header = () => {
  return (
    <header>
      <div className="d-flex container">
        <Link to="/">
          <img src={logo} alt="wp residence" />
        </Link>

        <nav
          aria-labelledby="Primary Navigation"
          className="d-flex font-roboto-sans gap-2 font-[500]"
        >
          <NavLink to="/" className="navlink">
            Home
          </NavLink>
          <NavLink to="about" className="navlink">
            About Us
          </NavLink>
          <NavLink to="properties" className="navlink">
            Properties
          </NavLink>
          <NavLink to="blogs" className="navlink">
            Blogs
          </NavLink>
          <NavLink to="contact" className="navlink">
            Contact
          </NavLink>
        </nav>

        <div className="d-flex gap-4">
          <a href="tel:800-555-6789" className="d-flex gap-2">
            <svg
              className="fill-primary-400 h-4 w-4"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>

            <span>800-555-6789</span>
          </a>

          <div className="cursor-pointer">
            <svg
              className="fill-primary-400 h-6 w-6"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
