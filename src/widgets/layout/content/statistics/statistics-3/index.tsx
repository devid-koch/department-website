import { BiRegularUserPlus } from "solid-icons/bi";
import { FaSolidFileContract } from "solid-icons/fa";
import { FiUserPlus } from "solid-icons/fi";
import { TbUserStar } from "solid-icons/tb";
import { BiRegularCalendar } from "solid-icons/bi";
import { defaultPadding } from "config/styles";

const Statistics3 = () => {
  return (
    <section class={`text-gray-600 bg-white body-font ${defaultPadding}`}>
      <div class="px-5">
        <div class="flex flex-col md:flex-row justify-center items-center -m-4 text-center p-8">
          <div class="p-4 sm:w-1/2 w-full">
            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <div><TbUserStar class="text-secondary inline-block w-12 h-12 mb-3"/></div>
              <h2 class="ChivoFont font-bold text-3xl text-gray-900">10k+</h2>
              <p class="leading-relaxed">Enrolled Students</p>
            </div>
          </div>
          <div class="p-4 sm:w-1/2 w-full">
            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="text-secondary w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
              </svg>
              <h2 class="ChivoFont font-bold text-3xl text-gray-900">50+</h2>
              <p class="leading-relaxed">Best Faculty</p>
            </div>
          </div>
          <div class="p-4 sm:w-1/2 w-full">
            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
              {/* <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                <path d="M21 19a2 2 0 
                01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
              </svg> */}
              <div><BiRegularCalendar class="text-secondary inline-block w-12 h-12 mb-3"/></div>
              <h2 class="ChivoFont font-bold text-3xl text-gray-900">42 years</h2>
              <p class="leading-relaxed">Delivering Excellence</p>
            </div>
          </div>
          {/* <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="text-secondary w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <h2 class="ChivoFont font-bold text-3xl text-gray-900">85%</h2>
              <p class="leading-relaxed">Placements Rate</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Statistics3;
