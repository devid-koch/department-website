import Header from "widgets/layout/header/header-7";
import Footer4 from "widgets/layout/footer/footer-4";
import Features9 from "widgets/layout/content/features/features-9";
import HeroWithHeader from "widgets/hero-header";

const Notices = () => {
  return (
    <>
      <Header />
      {/* <HeroWithHeader /> */ }
      <div class="w-full h-[30rem] overflow-hidden">
        <img src="https://cliply.co/wp-content/uploads/2019/06/371906220_TYPING_ON_LAPTOP_400px.gif" alt="" class="w-full h-full object-cover" />
      </div>
      <Features9 />
      <Footer4 />
    </>
  );
};
export default Notices;
