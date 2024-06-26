import { heroImg } from "assets/images";

const HeroWithHeader7 = () => {
  return (
    <header class="bg-white ">
      <nav class="px-6 py-4 shadow">
        <div class="lg:items-center lg:justify-between lg:flex">
          <div class="flex items-center justify-between">
            <a href="#" class="mx-auto ">
              <img class="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="" />
            </a>

            {/* <!-- Mobile menu button --> */}
            <div class="lg:hidden">
              <button
                type="button"
                class="text-gray-500  hover:text-gray-600  focus:outline-none focus:text-gray-600 "
                aria-label="toggle menu"
              >
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
                </svg>
              </button>
            </div>
          </div>

          {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
          <div class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg: lg:shadow-none  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
            <a href="#" class="block px-3 py-2 text-gray-600 rounded-lg  hover:bg-gray-100 lg:mx-2">
              Home
            </a>
            <a href="#" class="block px-3 py-2 text-gray-600 rounded-lg  hover:bg-gray-100 lg:mx-2">
              About
            </a>
            <a href="#" class="block px-3 py-2 text-gray-600 rounded-lg  hover:bg-gray-100 lg:mx-2">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <div class="lg:flex">
        <div class="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
          <div class="max-w-xl">
            <h2 class="text-3xl font-semibold text-gray-800  lg:text-4xl">
              Build Your New <span class="text-blue-600 ">Idea</span>
            </h2>

            <p class="mt-4 text-sm text-gray-500  lg:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit
              harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates.
            </p>

            <div class="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
              <a
                href="#"
                class="block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700"
              >
                Get Started
              </a>
              <a
                href="#"
                class="block px-5 py-2 text-sm font-medium tracking-wider text-center text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div class="w-full h-64 lg:w-1/2 lg:h-auto">
          <div
            class="w-full h-full bg-cover"
            style="background-image: url(https://images.unsplash.com/photo-1508394522741-82ac9c15ba69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=748&q=80)"
          >
            <div class="w-full h-full bg-black opacity-25"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroWithHeader7;
