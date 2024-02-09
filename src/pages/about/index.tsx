import bgAbout from "assets/images/aboutbg.jpg";
import { defaultPadding } from "config/styles";
import Header from "widgets/layout/header/header-7";
import OurMission from "widgets/our-mission";
import Footer4 from "widgets/layout/footer/footer-4";
import Lecturers from "widgets/lecturers";
import WhyNalbariLawCollege from "widgets/why-nalbari-law-college";
import Team4 from "widgets/layout/content/team/team-4";

const AboutUs = () => {
  return (
    <>
      <Header />
      <div class="bg-white">
        <div class={ `w-full h-full flex overflow-hidden relative` }>
          <img class="w-full h-[30rem] object-cover"
            src="https://images.unsplash.com/photo-1588200908342-23b585c03e26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="nalbari-about-image" />
          <div class={ `flex flex-col absolute h-full w-full ${defaultPadding} dmfont uppercase justify-center pt-20` }>
            <p class="text-white tracking-wider whitespace-nowrap">Know us better </p>
            <p class="text-white text-7xl tracking-wider font-bold">
              About
            </p>
          </div>
        </div>
        <div class={ `${defaultPadding}` }>
          <WhyNalbariLawCollege />
          <OurMission />
          <Lecturers />
          <Team4 />
        </div>
      </div>
      <Footer4 />
    </>
  );
};
export default AboutUs;
