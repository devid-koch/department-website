import Card from "widgets/card";
import Carousal1 from "widgets/carousal";
import Collapse1 from "widgets/collapse";
import About1 from "widgets/layout/content/about/about-1";
import About2 from "widgets/layout/content/about/about-2";
import About3 from "widgets/layout/content/about/about-3";
import About4 from "widgets/layout/content/about/about-4";
import About5 from "widgets/layout/content/about/about-5";
import About6 from "widgets/layout/content/about/about-6";
import PrincipalDesk from "widgets/layout/content/about/about-7";
import About7 from "widgets/layout/content/about/about-7";
import About8 from "widgets/layout/content/about/about-8";
import About9 from "widgets/layout/content/about/about-9";
import Blog2 from "widgets/layout/content/blogs/blog-2";
import Features10 from "widgets/layout/content/features/features-10";
import Features9 from "widgets/layout/content/features/features-9";
import News1 from "widgets/layout/content/news-events";
import News2 from "widgets/layout/content/news-events-2";
import Pricing7 from "widgets/layout/content/pricing/pricing-7";
import Statistics1 from "widgets/layout/content/statistics/statistics-1";
import Statistics2 from "widgets/layout/content/statistics/statistics-2";
import Statistics3 from "widgets/layout/content/statistics/statistics-3";
import Statistics6 from "widgets/layout/content/statistics/statistics-6";
import Statistics7 from "widgets/layout/content/statistics/statistics-7";
import Team3 from "widgets/layout/content/team/team-3";
import Footer4 from "widgets/layout/footer/footer-4";
import Header from "widgets/layout/header/header-7";
import HeroWithHeader from "./hero-with-header";
import ToTheJourney from "./to-the-jouney";
import Features8 from "widgets/layout/content/features/features-8";
import HeroWithHeader4 from "widgets/layout/hero-with-header/hero-header-4";
import Contact1 from "widgets/layout/content/contact/contact-1";

const Home = () => {
  return (
    <>
      <Header />
      {/* <HeroWithHeader4 /> */ }
      <HeroWithHeader />
      <ToTheJourney />
      <Features8 />
      {/* <Features9 /> */ }
      {/* <PrincipalDesk />
      <About9 />
      <Blog2 />
      <Statistics3 />
      <Team3 />
       */}
      <Footer4 />
    </>
  );
};
export default Home;
