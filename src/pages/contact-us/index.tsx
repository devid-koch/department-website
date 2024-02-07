import Header from "widgets/layout/header/header-7";
import Footer4 from "widgets/layout/footer/footer-4";
import HeaderBar from "widgets/header-bar";
import Contact4 from "widgets/layout/content/contact/contact-4";

const ContactUs = () => {
  return (
    <>
      <Header />
      <div class="w-full h-[30rem] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1563906267088-b029e7101114?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="w-full h-full object-cover" />
      </div>
      <HeaderBar title="Contact Us" />
      <Contact4 />
      <Footer4 />
    </>
  );
};
export default ContactUs;
