const About2 = () => {
  return (
    <div>
      <div class="flex flex-col px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 lg:flex-row">
        <div class="mb-5 lg:w-1/3 lg:mb-0 lg:mr-20">
          <h2 class="relative mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            <span class="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern id="6bfa0e57-faa2-4bb2-ac0e-310782e5eb2d" x="0" y="0" width=".135" height=".30">
                    <circle cx="1" cy="1" r=".7"></circle>
                  </pattern>
                </defs>
                <rect fill="url(#6bfa0e57-faa2-4bb2-ac0e-310782e5eb2d)" width="52" height="24"></rect>
              </svg>
              <span class="relative">The</span>
            </span>
            brown fox
          </h2>
          <p class="mb-4 text-gray-900 lg:mb-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem laudantium, totam rem aperiam, eaque ipsa
            quae explicabo.
          </p>
          <a
            href="/"
            aria-label=""
            class="inline-flex items-center font-semibold transition-colors duration-200 text-purple-400 hover:text-purple-800"
          >
            Learn more
            <svg class="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
            </svg>
          </a>
        </div>
        <div class="flex-grow pt-1">
          <div class="flex items-center mb-3">
            <span class="font-bold tracking-wide text-gray-900">Categories</span>
            <span class="ml-1">
              <svg class="w-5 h-5 mt-px text-purple-400" stroke="currentColor" viewBox="0 0 52 52">
                <polygon
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                ></polygon>
              </svg>
            </span>
          </div>
          <div class="grid grid-cols-2 row-gap-6 sm:grid-cols-4">
            <ul class="space-y-2">
              <li>
                <a href="/" class="transition-colors duration-300 hover:text-purple-700">
                  Computers
                </a>
              </li>
              <li>
                <a href="/" class="transition-colors duration-300 hover:text-purple-700">
                  Health
                </a>
              </li>
              <li>
                <a href="/" class="transition-colors duration-300 hover:text-purple-700">
                  Reference
                </a>
              </li>
              <li>
                <a href="/" class="transition-colors duration-300 hover:text-purple-700">
                  World
                </a>
              </li>
            </ul>
            <ul class="space-y-2">
              <li>
                <a href="/" class="transition-colors duration-300 hover:text-purple-700">
                  eCommerce
                </a>
              </li>
              <li>
                <a href="/" class="transition-colors duration-300 hover:text-purple-700">
                  Business
                </a>
              </li>
              <li>
                <a href="/" class="transition-colors duration-300 hover:text-purple-700">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/" class="transition-colors duration-300 hover:text-purple-700">
                  Video
                </a>
              </li>
            </ul>
            <ul class="space-y-2">
              <li>
                <a href="/" class="transition-colors duration-300 hover:text-purple-700">
                  Brochure
                </a>
              </li>
              <li>
                <a href="/" class="transition-colors duration-300 hover:text-purple-700">
                  Nonprofit
                </a>
              </li>
              <li>
                <a href="/" class="transition-colors duration-300 hover:text-purple-700">
                  Educational
                </a>
              </li>
              <li>
                <a href="/" class="transition-colors duration-300 hover:text-purple-700">
                  Sports
                </a>
              </li>
            </ul>
            <ul class="space-y-2">
              <li>
                <a href="/" class="transition-colors duration-300 hover:text-purple-700">
                  Infopreneur
                </a>
              </li>
              <li>
                <a href="/" class="transition-colors duration-300 hover:text-purple-700">
                  Health
                </a>
              </li>
              <li>
                <a href="/" class="transition-colors duration-300 hover:text-purple-700">
                  Web
                </a>
              </li>
              <li>
                <a href="/" class="transition-colors duration-300 hover:text-purple-700">
                  Personal
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="relative">
        <img
          class="object-cover w-full h-56 sm:h-96"
          src="https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
        <div class="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
      </div>
    </div>
  );
};
export default About2;
