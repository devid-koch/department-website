import logoImg from "assets/images/logo.jpg";
import Button from "widgets/button";

const Header1 = () => {
  return (
    <>
      <nav class="w-full h-20 z-50 container lg:flex lg:justify-between lg:items-center border-b">
        <div class="w-full flex items-center justify-between">
          {/* <!-- Mobile menu button --> */}
          <div class="flex lg:hidden">
            <button
              type="button"
              class="text-gray-500  hover:text-gray-600  focus:outline-none focus:text-gray-600 "
              aria-label="toggle menu"
            ></button>
          </div>
        </div>

        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
        <div class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg: lg:shadow-none  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
          <div class="flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:space-y-0">
            <a class="text-gray-700 lg:mx-6   hover:text-blue-500" href="#">
              Contact
            </a>
            <a class="text-gray-700 lg:mx-6   hover:text-blue-500" href="#">
              FAQ
            </a>
          </div>

          <Button title="Admissions" bgColor="bg-primary" textColor="black" textSize="xl" />
        </div>
      </nav>
    </>
  );
};

export default Header1;
