import {
  blog1,
  blog2,
  blog3,
  blog4,
  property01,
  property02,
  property03,
  property04,
  property05,
  property06,
  property07,
  property08,
  property09,
  property10,
  property11,
  property12,
  user1,
  user2,
  user3,
  user4,
  user5,
  user6,
} from "./helper";

export const serviceItems = [
  {
    id: 1,
    heading: "Sell your home",
    description: "We sell your home at the best market price.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-10 w-10 fill-transparent stroke-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    heading: "Home loans",
    description: "We offer you free consultancy to get a loan.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-10 w-10 fill-transparent stroke-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
        />
      </svg>
    ),
  },
  {
    id: 3,
    heading: "Legal services",
    description: "Expert legal help for all related property items.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 fill-transparent stroke-white"
        viewBox="0 0 33.441 33.441"
      >
        <g>
          <g>
            <path d="M11.452,5.3l7.317,4.225c0.203,0.116,0.461,0.046,0.578-0.155l0.211-0.366c0.117-0.201,0.047-0.46-0.154-0.577    l-7.318-4.225c-0.202-0.117-0.461-0.047-0.577,0.154l-0.211,0.366C11.181,4.924,11.25,5.183,11.452,5.3z"></path>
            <path d="M5.115,16.277l7.318,4.226c0.202,0.116,0.461,0.047,0.577-0.154l0.211-0.365c0.117-0.201,0.048-0.461-0.154-0.577    l-7.318-4.225c-0.202-0.117-0.461-0.047-0.577,0.154l-0.211,0.366C4.843,15.901,4.912,16.16,5.115,16.277z"></path>
            <path d="M30.92,21.44l-14.646-7.591l1.969-3.41c0.116-0.201,0.047-0.461-0.153-0.577l-6.588-3.803    c-0.201-0.116-0.461-0.046-0.577,0.155l-4.648,8.05c-0.115,0.201-0.046,0.461,0.155,0.577l6.587,3.802    c0.201,0.117,0.461,0.047,0.576-0.154l1.97-3.41l13.896,8.889c0.196,0.125,0.451,0.063,0.567-0.139l1.057-1.83    C31.2,21.8,31.126,21.548,30.92,21.44z"></path>
            <path d="M33.23,22.509l-0.731-0.422c-0.2-0.117-0.461-0.047-0.577,0.154l-1.269,2.195c-0.115,0.201-0.046,0.461,0.155,0.576    l0.731,0.422c0.201,0.117,0.46,0.048,0.577-0.154l1.268-2.195C33.501,22.884,33.432,22.624,33.23,22.509z"></path>
            <path d="M17.418,25.114h-0.881c0.111-0.124,0.185-0.284,0.185-0.464v-0.696c0-0.383-0.313-0.697-0.696-0.697H2.09    c-0.384,0-0.697,0.314-0.697,0.697v0.696c0,0.18,0.074,0.34,0.186,0.464H0.697C0.312,25.114,0,25.429,0,25.812v2.787    c0,0.383,0.313,0.697,0.697,0.697H17.42c0.385,0,0.696-0.314,0.696-0.697V25.81C18.116,25.429,17.803,25.114,17.418,25.114z     M16.427,28.335H1.752c-0.403,0-0.733-0.33-0.733-0.732v-0.734c0.001-0.402,0.33-0.734,0.733-0.732h14.675    c0.405,0,0.735,0.33,0.734,0.731l0.001,0.735C17.161,28.005,16.832,28.335,16.427,28.335z"></path>
          </g>
        </g>
      </svg>
    ),
  },
  {
    id: 4,
    heading: "Home inspection",
    description: "We make sure you get what you were promised.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-10 w-10 fill-transparent stroke-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    ),
  },
  {
    id: 5,
    heading: "Evaluation",
    description: "We offer you free evaluation to get a mortgage loan.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-61 0 488 488"
        className="h-10 w-10 fill-white stroke-white"
      >
        <path d="M321.742 67H274V36.984a5.673 5.673 0 0 0-1.543-4.195A5.672 5.672 0 0 0 268.359 31h-40.968c-6.196-18-24.223-31-44.645-31h-.144c-20 0-37.625 13-44.391 31H97.64a5.672 5.672 0 0 0-4.098 1.79A5.673 5.673 0 0 0 92 36.983V67H44.258C20.028 67 0 86.043 0 109.285v336.567C0 469.094 20.027 488 44.258 488h277.484c24.23 0 44.258-18.906 44.258-42.148V109.285C366 86.043 345.973 67 321.742 67zM104 43h38.621a6.009 6.009 0 0 0 5.813-4.512c4.007-15.597 18.078-26.5 34.183-26.488h.113c16.551 0 30.954 11.047 34.243 26.262A6.003 6.003 0 0 0 222.836 43H262v58H104zm250 402.852C354 462.477 339.355 476 321.742 476H44.258C26.645 476 12 462.477 12 445.852V109.285C12 92.66 26.645 79 44.258 79H92v27.7c0 3.316 2.324 6.3 5.64 6.3h170.72c3.316 0 5.64-2.984 5.64-6.3V79h47.742C339.355 79 354 92.66 354 109.285zm0 0"></path>
        <path d="M256.742 415c3.317 0 6-2.688 6-6s-2.683-6-6-6H109.258c-3.317 0-6 2.688-6 6s2.683 6 6 6zm0 0M286.742 429H79.258c-3.317 0-6 2.688-6 6s2.683 6 6 6h207.484c3.317 0 6-2.688 6-6s-2.683-6-6-6zm0 0M297.672 231.285l-20.457-1.93a98.036 98.036 0 0 0-9.977-24.636l12.989-15.781a6.001 6.001 0 0 0-.387-8.051l-23.73-23.735a5.998 5.998 0 0 0-8.055-.386l-15.989 13.172a96.34 96.34 0 0 0-24.64-10.04L205.5 139.43a5.903 5.903 0 0 0-5.938-5.328L166.302 134h-.04a5.906 5.906 0 0 0-5.972 5.328l-1.93 20.457a98.085 98.085 0 0 0-24.632 9.973l-15.993-13.192a5.998 5.998 0 0 0-8.054.383l-23.735 23.73a5.998 5.998 0 0 0-.386 8.055L98.73 204.72a96.293 96.293 0 0 0-10.043 24.644l-20.355 1.922A5.904 5.904 0 0 0 63 237.258v33.484a5.906 5.906 0 0 0 5.328 5.973l20.457 1.93a98.144 98.144 0 0 0 9.973 24.632L85.566 319.27a5.998 5.998 0 0 0 .383 8.054l23.73 23.735a5.998 5.998 0 0 0 8.055.386l15.985-13.172a96.293 96.293 0 0 0 24.644 10.043l1.922 20.356a5.906 5.906 0 0 0 5.973 5.328h33.484a5.906 5.906 0 0 0 5.973-5.328l1.93-20.457a98.144 98.144 0 0 0 24.632-9.973l15.993 13.192a6.002 6.002 0 0 0 8.054-.38l23.735-23.73a5.995 5.995 0 0 0 .386-8.058l-13.172-15.985a96.293 96.293 0 0 0 10.043-24.644l20.356-1.922a5.906 5.906 0 0 0 5.328-5.973v-33.484a5.906 5.906 0 0 0-5.328-5.973zM291 265.277l-19.246 1.82a5.948 5.948 0 0 0-5.266 4.801 83.719 83.719 0 0 1-11.636 28.653 6.002 6.002 0 0 0 .43 7.066l12.433 15.078-16.024 16.028-15.078-12.43a5.995 5.995 0 0 0-7.066-.41 86.483 86.483 0 0 1-28.738 11.68 5.882 5.882 0 0 0-4.711 5.19L194.278 362h-22.555l-1.82-19.246a5.948 5.948 0 0 0-4.801-5.266 83.719 83.719 0 0 1-28.653-11.636 6.002 6.002 0 0 0-7.066.43l-15.078 12.433-16.028-16.024 12.43-15.078a6 6 0 0 0 .41-7.066 86.483 86.483 0 0 1-11.68-28.738 5.882 5.882 0 0 0-5.19-4.711L75 265.278v-22.555l19.246-1.82a5.948 5.948 0 0 0 5.266-4.801 83.719 83.719 0 0 1 11.636-28.653 6.002 6.002 0 0 0-.43-7.066l-12.433-15.078 16.024-16.028 15.078 12.426a6.001 6.001 0 0 0 7.066.414 86.409 86.409 0 0 1 28.738-11.683 5.999 5.999 0 0 0 4.711-5.297l1.817-19.32 22.344.14 1.824 19.39a5.995 5.995 0 0 0 4.8 5.321 83.852 83.852 0 0 1 28.653 11.664 6.001 6.001 0 0 0 7.066-.414l15.078-12.426 16.032 16.031-12.223 14.868a6.001 6.001 0 0 0-.41 7.058 86.429 86.429 0 0 1 11.683 28.742 5.874 5.874 0 0 0 5.192 4.711l19.242 1.82zm0 0"></path>
        <path d="M129.688 200.688c-29.442 29.445-29.446 77.18 0 106.625s77.18 29.445 106.625 0 29.44-77.18 0-106.625c-29.461-29.399-77.165-29.399-106.625 0zm98.14 98.14c-24.754 24.727-64.863 24.715-89.598-.027-24.738-24.746-24.738-64.856 0-89.602 24.735-24.742 64.844-24.754 89.598-.027 24.719 24.773 24.719 64.883 0 89.656zm0 0"></path>
        <path d="M183 224.453c6.387.008 11.559 5.18 11.566 11.567 0 3.312 2.688 6 6 6s6-2.688 6-6A23.6 23.6 0 0 0 189 213.23V209c0-3.313-2.688-6-6-6s-6 2.688-6 6v4.23c-11.457 3.016-18.89 14.067-17.371 25.813 1.52 11.75 11.527 20.543 23.371 20.543 6.39 0 11.57 5.18 11.57 11.566 0 6.391-5.18 11.57-11.57 11.57-6.387 0-11.566-5.179-11.566-11.57 0-3.312-2.688-6-6-6s-6 2.688-6 6A23.608 23.608 0 0 0 177 293.945V299c0 3.312 2.688 6 6 6s6-2.688 6-6v-5.055c11.457-3.015 18.895-14.066 17.375-25.816S194.848 247.586 183 247.586c-6.387 0-11.566-5.18-11.566-11.566 0-6.391 5.18-11.567 11.566-11.567zm0 0"></path>
      </svg>
    ),
  },
  {
    id: 6,
    heading: "Photoshoot",
    description: "We prepare your home visual presentation.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className="h-10 w-10 fill-white stroke-white"
      >
        <path d="m57 25.59 1.315.893c.167.113.362.173.562.173.062 0 .126-.006.188-.018.26-.05.49-.201.639-.421l2.246-3.311c.311-.457.191-1.079-.266-1.389l-29.122-19.761c-.34-.23-.783-.23-1.123 0l-29.124 19.762c-.457.31-.576.932-.266 1.389l2.246 3.311c.148.22.379.371.639.421.262.05.531-.007.75-.155l1.316-.894v10.005c-.586.256-1.065.729-1.316 1.351-1.681 4.156-3.684 9.618-3.684 12.054 0 3.59 2.09 6.378 5 6.903v4.097h-5v2h60v-2h-5zm-51.611-1.323-1.123-1.657 27.734-18.819 27.734 18.819-1.123 1.656-26.049-17.676c-.17-.115-.366-.173-.562-.173s-.392.058-.562.173zm-1.389 24.733c0-1.625 1.289-5.745 3.537-11.304.115-.283.362-.313.463-.313s.348.03.463.313c2.248 5.559 3.537 9.679 3.537 11.304 0 2.897-1.683 5-4 5s-4-2.103-4-5zm5 6.903c2.91-.525 5-3.313 5-6.903 0-2.436-2.003-7.898-3.684-12.054-.251-.622-.73-1.095-1.316-1.351v-11.362l23-15.607 23 15.607v19.465l-.168-.252c-.371-.557-1.293-.557-1.664 0l-2 3c-.109.163-.168.357-.168.554v2h-2v-2c0-.197-.059-.391-.168-.555l-2-3c-.371-.557-1.293-.557-1.664 0l-2 3c-.109.164-.168.358-.168.555v2h-2v-2c0-.197-.059-.391-.168-.555l-2-3c-.371-.557-1.293-.557-1.664 0l-2 3c-.109.164-.168.358-.168.555v13h-6v-19c0-.553-.447-1-1-1h-11c-.553 0-1 .447-1 1v19h-7zm30 4.097h-2v-12.697l1-1.5 1 1.5zm2-9h2v2h-2zm0 4h2v5h-2zm6 5h-2v-12.697l1-1.5 1 1.5zm2-9h2v2h-2zm0 4h2v5h-2zm-22 5h-9v-18h9zm26 0v-12.697l1-1.5 1 1.5v12.697z"></path>
        <path d="m29 33h6c2.206 0 4-1.794 4-4v-6c0-2.206-1.794-4-4-4h-6c-2.206 0-4 1.794-4 4v6c0 2.206 1.794 4 4 4zm-2-4v-2h4v4h-2c-1.103 0-2-.897-2-2zm8 2h-2v-4h4v2c0 1.103-.897 2-2 2zm2-8v2h-4v-4h2c1.103 0 2 .897 2 2zm-8-2h2v4h-4v-2c0-1.103.897-2 2-2z"></path>
        <path d="m23 50h2v2h-2z"></path>
      </svg>
    ),
  },
];

export const testimonialItems = [
  {
    id: 1,
    imgSrc: user1,
    userName: "Dana Gilmore",
    quote:
      "The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication.",
    rating: 5,
    designation: "Sales Manager",
  },
  {
    id: 2,
    imgSrc: user2,
    userName: "Susan Barkley",
    quote:
      "The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication.",
    rating: 5,
    designation: "Sales Manager",
  },
  {
    id: 3,
    imgSrc: user3,
    userName: "Lisa Simpson",
    quote:
      "We hired the WP Estate team as our buyer agent because they are specifically trained in Short Sale & Foreclosure.",
    rating: 4,
    designation: "Sales Manager",
  },
  {
    id: 4,
    imgSrc: user4,
    userName: "Anna McKenzie",
    quote:
      "As I move forward to now BUY my next house, I am extremely certain Residence will be the right partner to help me.",
    rating: 4,
    designation: "Sales Manager",
  },
  {
    id: 5,
    imgSrc: user5,
    userName: "Stephanie Barkley",
    quote:
      "The sale went smoothly, and we just closed on an ideal new place we're excited to call home.",
    rating: 5,
    designation: "Sales Manager",
  },
  {
    id: 6,
    imgSrc: user6,
    userName: "Janine Royce",
    quote:
      "His professionalism, personality, attention to detail, responsiveness and his ability to close the deal was Outstanding",
    rating: 4,
    designation: "Sales Manager",
  },
];

export const blogItems = [
  {
    id: 1,
    imgSrc: blog1,
    target: "#!",
    btnText: "Continue reading",
    title: "Top 10 best appreciating condos in Las Vegas...",
  },
  {
    id: 2,
    imgSrc: blog2,
    target: "#!",
    btnText: "Continue reading",
    title: "The top 5 most livable Las Vegas neighbourhood...",
  },
  {
    id: 3,
    imgSrc: blog3,
    target: "#!",
    btnText: "Continue reading",
    title: "In Las Vegas home prices have doubled in the...",
  },
  {
    id: 4,
    imgSrc: blog4,
    target: "#!",
    btnText: "Continue reading",
    title: "Las Vegas neighbourhoods where it’s better...",
  },
];

export const properties = [
  {
    id: 1,
    area: 250,
    bedroom: 5,
    target: "#!",
    bathroom: 3,
    price: 5500,
    badge: "Sales",
    featured: true,
    userImgSrc: user1,
    userName: "Elena Pernía",
    propertyImgSrc: property01,
    title: "Villa with Amazing View",
    location: "Downtown, Las Vegas",
    description:
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood...",
  },
  {
    id: 2,
    area: 250,
    bedroom: 3,
    target: "#!",
    bathroom: 2,
    price: 210,
    badge: "Sales",
    featured: true,
    userImgSrc: user2,
    userName: "Alessandra Rosales",
    propertyImgSrc: property02,
    title: "Townhouse for Sale",
    location: "Downtown, Las Vegas",
    description:
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood...",
  },
  {
    id: 3,
    area: 250,
    bedroom: 5,
    target: "#!",
    bathroom: 3,
    price: 5500,
    badge: "Rentals",
    featured: false,
    userImgSrc: user3,
    userName: "Elena Pernía",
    propertyImgSrc: property03,
    title: "Townhouse for Rent",
    location: "Winchester, Las Vegas",
    description:
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood...",
  },
  {
    id: 4,
    area: 250,
    bedroom: 5,
    target: "#!",
    bathroom: 3,
    price: 5500,
    badge: "Rentals",
    featured: true,
    userImgSrc: user4,
    userName: "Elena Pernía",
    propertyImgSrc: property04,
    title: "Villa with Amazing View",
    location: "Gorgeous Studio for Rent",
    description:
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood...",
  },
  {
    id: 5,
    area: 250,
    bedroom: 5,
    target: "#!",
    bathroom: 3,
    price: 5500,
    badge: "Sales",
    featured: true,
    userImgSrc: user5,
    userName: "Elena Pernía",
    propertyImgSrc: property05,
    title: "Awesome Family Apartment",
    location: "Meadows Village, Las Vegas",
    description:
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood...",
  },
  {
    id: 6,
    area: 250,
    bedroom: 5,
    target: "#!",
    bathroom: 3,
    price: 5500,
    badge: "Rentals",
    featured: true,
    userImgSrc: user6,
    userName: "Elena Pernía",
    propertyImgSrc: property06,
    title: "2 Rooms Apartment for Rent",
    location: "Downtown, Las Vegas",
    description:
      "This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Val...",
  },
  {
    id: 7,
    area: 250,
    bedroom: 5,
    target: "#!",
    bathroom: 3,
    price: 5500,
    badge: "Sales",
    featured: true,
    userImgSrc: user1,
    userName: "Elena Pernía",
    propertyImgSrc: property07,
    title: "Villa with Amazing View",
    location: "Downtown, Las Vegas",
    description:
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood...",
  },
  {
    id: 8,
    area: 250,
    bedroom: 5,
    target: "#!",
    bathroom: 3,
    price: 5500,
    badge: "Sales",
    featured: true,
    userImgSrc: user2,
    userName: "Elena Pernía",
    propertyImgSrc: property08,
    title: "Villa with Amazing View",
    location: "Downtown, Las Vegas",
    description:
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood...",
  },
  {
    id: 9,
    area: 250,
    bedroom: 5,
    target: "#!",
    bathroom: 3,
    price: 5500,
    badge: "Sales",
    featured: true,
    userImgSrc: user3,
    userName: "Elena Pernía",
    propertyImgSrc: property09,
    title: "Villa with Amazing View",
    location: "Downtown, Las Vegas",
    description:
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood...",
  },
  {
    id: 10,
    area: 250,
    bedroom: 5,
    target: "#!",
    bathroom: 3,
    price: 5500,
    badge: "Sales",
    featured: true,
    userImgSrc: user4,
    userName: "Elena Pernía",
    propertyImgSrc: property10,
    title: "Villa with Amazing View",
    location: "Downtown, Las Vegas",
    description:
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood...",
  },
  {
    id: 11,
    area: 250,
    bedroom: 5,
    target: "#!",
    bathroom: 3,
    price: 5500,
    badge: "Sales",
    featured: true,
    userImgSrc: user5,
    userName: "Elena Pernía",
    propertyImgSrc: property11,
    title: "Villa with Amazing View",
    location: "Downtown, Las Vegas",
    description:
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood...",
  },
  {
    id: 12,
    area: 250,
    bedroom: 5,
    target: "#!",
    bathroom: 3,
    price: 5500,
    badge: "Sales",
    featured: true,
    userImgSrc: user6,
    userName: "Elena Pernía",
    propertyImgSrc: property12,
    title: "Villa with Amazing View",
    location: "Downtown, Las Vegas",
    description:
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood...",
  },
];
