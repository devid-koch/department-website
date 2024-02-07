import { defaultPadding } from "config/styles";

const News2 = () => {
  return (
    <>
      <div class={`w-full flex flex-col gap-6 mb-10 sm:text-center md:mb-12 ${defaultPadding}`}>
        <div>
          <p class="inline-block px-3 py-px mb-4 text-xl font-semibold tracking-wider text-white uppercase rounded-full bg-red-500">
            News And Events
          </p>
        </div>
        <div class="w-full flex">
          <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div class="max-w-screen-lg sm:mx-auto">
              <div class="flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50">
                <div class="mb-4 lg:mb-0">
                  <h5 class="mb-4 text-xl font-bold leading-none sm:text-2xl">The quick, brown fox</h5>
                  <div class="relative pr-8">
                    <p class="text-base text-gray-700 md:text-lg">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                      totam rem aperiam, eaque ipsa quae.
                    </p>
                  </div>
                </div>
                <div class="flex justify-start w-56 lg:justify-end">
                  <a
                    href="/"
                    aria-label=""
                    class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  >
                    Learn more
                    <svg class="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
                      <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50">
                <div class="mb-4 lg:mb-0">
                  <h5 class="mb-4 text-xl font-bold leading-none sm:text-2xl">Bro ipsum dolor sit</h5>
                  <div class="relative pr-8">
                    <p class="text-base text-gray-700 md:text-lg">
                      Lookout flogging bilge rat main sheet bilge water nipper fluke to go on account heave down clap of
                      thunder. Reef sails six pounders.
                    </p>
                  </div>
                </div>
                <div class="flex justify-start w-56 lg:justify-end">
                  <a
                    href="/"
                    aria-label=""
                    class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  >
                    Learn more
                    <svg class="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
                      <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50">
                <div class="mb-4 lg:mb-0">
                  <h5 class="mb-4 text-xl font-bold leading-none sm:text-2xl">Japan air Skate park</h5>
                  <div class="relative pr-8">
                    <p class="text-base text-gray-700 md:text-lg">
                      If one examines precultural libertarianism, one is faced with a choice: either accept rationalism.
                    </p>
                  </div>
                </div>
                <div class="flex justify-start w-56 lg:justify-end">
                  <a
                    href="/"
                    aria-label=""
                    class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  >
                    Learn more
                    <svg class="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
                      <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-5">
            <img
              class="object-cover w-full h-56 col-span-2 rounded shadow-lg"
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <img
              class="object-cover w-full h-48 rounded shadow-lg"
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <img
              class="object-cover w-full h-48 rounded shadow-lg"
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default News2;
