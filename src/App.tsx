import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  About,
  BlogPage,
  Contact,
  Footer,
  Header,
  Home,
  Page404,
  Properties,
} from "./components/utils/helper";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="properties" element={<Properties />} />
        <Route path="blogs" element={<BlogPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
