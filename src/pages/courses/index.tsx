import bgAbout from "assets/images/aboutbg.jpg";
import { defaultPadding } from "config/styles";
import Header from "widgets/layout/header/header-7";
import Footer4 from "widgets/layout/footer/footer-4";
import Pricing7 from "widgets/layout/content/pricing/pricing-7";
import HeaderBar from "widgets/header-bar";

const Courses = () => {
  return (
    <>
      <Header />
      <div class="bg-white">
        <div class={`w-full h-[30rem] flex overflow-hidden`}>
          <img class="w-full h-full object-cover"
            src={bgAbout} alt="nalbari-about-image" />
        </div>
        <HeaderBar title="Programs We Offer" />
        <Pricing7 />
      </div>
      <Footer4 />
    </>
  );
};
export default Courses;
