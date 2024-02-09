import { Route, Routes, useLocation, useNavigate } from "@solidjs/router";
import AboutUs from "pages/about";
import Admission from "pages/Notice";
import ContactUs from "pages/contact-us";
import Courses from "pages/courses";

import Home from "pages/home";
import Home0 from "pages/home0";
import PhotoGallery from "pages/photo-gallery";
import Notices from "pages/Notice";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" component={ Home } />
      <Route path="/app" component={ Home0 } />
      <Route path="/about-us" component={ AboutUs } />
      <Route path="/notices" component={ Notices } />
      <Route path="/contact-us" component={ ContactUs } />
    </Routes>
  );
};

export default App;
