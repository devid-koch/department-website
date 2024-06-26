import { Component } from "solid-js";

const Features5 = () => {
  return (
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span class="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern id="bebc38d1-bf72-4c77-a073-f0fe5abe0753" x="0" y="0" width=".135" height=".30">
                  <circle cx="1" cy="1" r=".7"></circle>
                </pattern>
              </defs>
              <rect fill="url(#bebc38d1-bf72-4c77-a073-f0fe5abe0753)" width="52" height="24"></rect>
            </svg>
            <span class="relative">The</span>
          </span>
          quick, brown fox jumps over a lazy dog
        </h2>
        <p class="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa
          quae.
        </p>
      </div>
      <div class="grid gap-8 row-gap-12 lg:grid-cols-2">
        <div class="max-w-md sm:mx-auto sm:text-center">
          <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <svg class="w-12 h-12 text-purple-400 sm:w-20 sm:h-20" stroke="currentColor" viewBox="0 0 52 52">
              <polygon
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              ></polygon>
            </svg>
          </div>
          <h6 class="mb-3 text-xl font-bold leading-5">A business big</h6>
          <p class="mb-3 text-sm text-gray-900">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium rem aperiam, eaque ipsa quae. Sed
            ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa
            quae.
          </p>
          <a
            href="/"
            aria-label=""
            class="inline-flex items-center font-semibold transition-colors duration-200 text-purple-400 hover:text-purple-800"
          >
            Learn more
          </a>
        </div>
        <div class="max-w-md sm:mx-auto sm:text-center">
          <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <svg class="w-12 h-12 text-purple-400 sm:w-20 sm:h-20" stroke="currentColor" viewBox="0 0 52 52">
              <polygon
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              ></polygon>
            </svg>
          </div>
          <h6 class="mb-3 text-xl font-bold leading-5">The quick dog</h6>
          <p class="mb-3 text-sm text-gray-900">
            Yolo ipsum dolor sit amet, consectetur adipiscing elit. Ut ac suscipit leo. Carpe diem vulputate est nec
            commodo rutrum. Pellentesque mattis convallis nisi eu and I ain’t stoppin until the swear jar’s full.
          </p>
          <a
            href="/"
            aria-label=""
            class="inline-flex items-center font-semibold transition-colors duration-200 text-purple-400 hover:text-purple-800"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Features5;
