import { heroImg } from "assets/images";
import { createSignal } from "solid-js";

const HeroWithHeader4 = () => {
  const [isOpen, setIsOpen] = createSignal(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("hiii")
  };

  return (
    <header class="bg-white">
      <nav class="border-b ">
        <div class="container px-6 py-6 mx-auto lg:flex lg:justify-between lg:items-center">
          <div class="flex items-center justify-between">
            <a href="#">
              <img class="w-auto h-6 sm:h-7" src="" alt="" />
            </a>

            {/* <!-- Mobile menu button --> */ }
            <div class="flex lg:hidden">
              <button
                onClick={ () => toggleMenu() }
                type="button"
                class="text-gray-500  hover:text-gray-600  focus:outline-none focus:text-gray-600 "
                aria-label="toggle menu"
              >
                { isOpen() == true ?
                  <svg
                    x-show="!isOpen"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                  </svg>
                  :
                  <svg
                    x-show="isOpen"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg> }
              </button>
            </div>
          </div>

          {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */ }
          <div class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg: lg:shadow-none  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
            <div class="flex flex-col space-y-8 lg:flex-row lg:items-center lg:space-y-0 lg:-px-8">
              <a class="block font-medium text-gray-700  lg:mx-8 hover:text-gray-900  hover:underline" href="#">
                glasses Search
              </a>
              <a class="block font-medium text-gray-700  lg:mx-8 hover:text-gray-900  hover:underline" href="#">
                How it works!
              </a>
              <a class="block font-medium text-gray-700  lg:mx-8 hover:text-gray-900  hover:underline" href="#">
                Why us?
              </a>
              <a class="block font-medium text-gray-700  lg:mx-8 hover:text-gray-900  hover:underline" href="#">
                Contact
              </a>

              <button class="flex items-center justify-center px-5 py-2 text-sm font-medium tracking-wide text-center text-white capitalize transition-colors duration-300 transform bg-gray-700 rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeroWithHeader4;
