import bgAbout from "assets/images/aboutbg.jpg";
import { defaultPadding } from "config/styles";
import Header from "widgets/layout/header/header-7";
import Footer4 from "widgets/layout/footer/footer-4";
import Pricing7 from "widgets/layout/content/pricing/pricing-7";
import HeaderBar from "widgets/header-bar";
import Gallery1 from "widgets/layout/content/gallery/gallery-1";

const PhotoGallery = () => {
  return (
    <>
      <Header />
      <div class="bg-white">
        <div class={`w-full h-[30rem] flex overflow-hidden`}>
          <img class="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1606819717115-9159c900370b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="nalbari-about-image" />
        </div>
        <HeaderBar title="Photos" />
        <Gallery1 />
      </div>
      <Footer4 />
    </>
  );
};
export default PhotoGallery;
