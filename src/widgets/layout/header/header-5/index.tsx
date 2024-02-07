import { FaSolidBars } from "assets/icons";
import { defaultPadding } from "config/styles";
import { Component } from "solid-js";
import Button from "widgets/button";
import logo from "assets/images/logo.jpg";

const Header5 = () => {
  return (
    <nav class={`relative mt-4 bg-white shadow ${defaultPadding}`}>
      {/* <div class="container "> */}
      <div class="flex flex-col md:flex-row md:justify-between md:items-center">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            {/* <a href="#">
              <img class="w-full h-14 object-cover" src={logo} />
            </a> */}
            <p class="text-4xl font-semibold hover:cursor-pointer">Nalbari Law College</p>

            {/* <!-- Search input on desktop screen --> */}
            <div class="hidden mx-10 md:block">
              <div class="relative">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </span>

                <input
                  type="text"
                  class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md hover:cursor-pointer"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>

          {/* <!-- Mobile menu button --> */}
          <div class="flex lg:hidden">
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
        <div class="absolute inset-x-0 z-20 w-full px-6 py-2 transition-all duration-300 ease-in-out bg-white top-24  md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
          <div class="flex flex-col md:flex-row md:mx-1">
            <a
              class="my-2 text-xl leading-5 text-gray-700 transition-colors duration-300 transform  hover:text-secondary   md:mx-4 md:my-0"
              href="#"
            >
              News
            </a>
            <a
              class="my-2 text-xl leading-5 text-gray-700 transition-colors duration-300 transform  hover:text-secondary   md:mx-4 md:my-0"
              href="#"
            >
              Blog
            </a>
            <a
              class="my-2 text-xl leading-5 text-gray-700 transition-colors duration-300 transform  hover:text-secondary   md:mx-4 md:my-0"
              href="#"
            >
              FAQ
            </a>
            <a
              class="my-2 text-xl leading-5 text-gray-700 transition-colors duration-300 transform  hover:text-secondary   md:mx-4 md:my-0"
              href="#"
            >
              Courses
            </a>
          </div>

          {/* <!-- Search input on mobile screen --> */}
          <div class="my-4 md:hidden">
            <div class="relative">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>

              <input
                type="text"
                class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md    focus:border-blue-400  focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="w-full flex justify-between py-3 mt-3 -mx-3 overflow-y-auto whitespace-nowrap scroll-hidden">
        <a
          class="mx-4 text-xl font-semibold leading-5 text-gray-700 transition-colors duration-300 transform  hover:text-secondary   md:my-0"
          href="#"
        >
          Home
        </a>
        <a
          class="mx-4 text-xl font-semibold leading-5 text-gray-700 transition-colors duration-300 transform  hover:text-secondary   md:my-0"
          href="#"
        >
          About
        </a>
        <a
          class="mx-4 text-xl font-semibold leading-5 text-gray-700 transition-colors duration-300 transform  hover:text-secondary   md:my-0"
          href="#"
        >
          Recognition
        </a>
        <a
          class="mx-4 text-xl font-semibold leading-5 text-gray-700 transition-colors duration-300 transform  hover:text-secondary   md:my-0"
          href="#"
        >
          Administration
        </a>
        <a
          class="mx-4 text-xl font-semibold leading-5 text-gray-700 transition-colors duration-300 transform  hover:text-secondary   md:my-0"
          href="#"
        >
          Admission
        </a>
        <a
          class="mx-4 text-xl font-semibold leading-5 text-gray-700 transition-colors duration-300 transform  hover:text-secondary   md:my-0"
          href="#"
        >
          Courses
        </a>
        <a
          class="mx-4 text-xl font-semibold leading-5 text-gray-700 transition-colors duration-300 transform  hover:text-secondary  md:my-0"
          href="#"
        >
          Library
        </a>
        <a
          class="mx-4 text-xl font-semibold leading-5 text-gray-700 transition-colors duration-300 transform  hover:text-secondary  md:my-0"
          href="#"
        >
          Photo Gallery
        </a>
        <a
          class="mx-4 text-xl font-semibold leading-5 text-gray-700 transition-colors duration-300 transform  hover:text-secondary   md:my-0"
          href="#"
        >
          Contact Us
        </a>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Header5;
