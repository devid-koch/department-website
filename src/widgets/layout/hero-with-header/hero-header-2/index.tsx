import { BiRegularSearch } from "solid-icons/bi";

const HeroWithHeader2 = () => {
  return (
    <section class="bg-white ">
      <nav class="container p-6 mx-auto lg:flex lg:justify-between items-center ">
        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
        <div class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg: lg:shadow-none  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
          <div class="flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:-px-8 lg:space-y-0">
            <a
              class="text-gray-700 capitalize transition-colors duration-300 transform lg:mx-8   hover:text-blue-500"
              href="#"
            >
              Home
            </a>
            <a
              class="text-gray-700 capitalize transition-colors duration-300 transform lg:mx-8   hover:text-blue-500"
              href="#"
            >
              About Us
            </a>
            <a
              class="text-gray-700 capitalize transition-colors duration-300 transform lg:mx-8   hover:text-blue-500"
              href="#"
            >
              Recognition
            </a>
            <a
              class="text-gray-700 capitalize transition-colors duration-300 transform lg:mx-8   hover:text-blue-500"
              href="#"
            >
              Administration
            </a>
            <a
              class="text-gray-700 capitalize transition-colors duration-300 transform lg:mx-8   hover:text-blue-500"
              href="#"
            >
              Admission
            </a>
            <a
              class="text-gray-700 capitalize transition-colors duration-300 transform lg:mx-8   hover:text-blue-500"
              href="#"
            >
              courses
            </a>
            <a
              class="text-gray-700 capitalize transition-colors duration-300 transform lg:mx-8   hover:text-blue-500"
              href="#"
            >
              library
            </a>
            <a
              class="text-gray-700 capitalize transition-colors duration-300 transform lg:mx-8   hover:text-blue-500"
              href="#"
            >
              photo gallery
            </a>
            <div class="flex items-center hover:cursor-pointer">
              <BiRegularSearch class="w-7 h-7" />
            </div>
          </div>
        </div>
      </nav>

      <div
        class="w-full bg-center bg-cover h-[38rem] heroImgBg"
        // style="background-image: url('https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80');"
      >
        <div class="flex items-center justify-center w-full h-full bg-gray-900/40">
          <div class="text-center">
            <h1 class="text-3xl font-semibold text-white lg:text-4xl">Welcome</h1>
            {/* <button class="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              Explore
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithHeader2;
