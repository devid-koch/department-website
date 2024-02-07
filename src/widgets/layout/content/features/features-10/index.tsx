import { defaultPadding } from "config/styles";
import { Component } from "solid-js";

const Features10 = () => {
  return (
    <div class={`w-full py-16 ${defaultPadding}`}>
      <div class="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
        <h2 class="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
          <span class="inline-block mb-1 sm:mb-4">
            "Unlocking Legal Horizons:
            <br class="hidden md:block" />
            Where Knowledge Meets Advocacy"
          </span>
          <div class="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100"></div>
        </h2>
        {/* <p class="text-gray-700 lg:text-sm lg:max-w-md">
          "Class is dead", says Foucault; however, according to Reicher, it is not so much class that is dead, but
          rather the absurdity, and some would say the paradigm, of class. However, the subject is interpolated into a
          postpatriarchialist dialectic theory that includes consciousness as a totality.
        </p> */}
      </div>
      <div class="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
        <a href="/" aria-label="View Item">
          <div class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              class="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              alt=""
            />
            <div class="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p class="mb-4 text-lg font-bold text-gray-100">Symposia</p>
              <p class="text-sm tracking-wide text-gray-300">
                A focused event that delve deeply into particular legal issue, allowing for in-depth discussions and
                analysis.
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              class="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <div class="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p class="mb-4 text-lg font-bold text-gray-100">Seminars and Workshops</p>
              <p class="text-sm tracking-wide text-gray-300">
                Interactive sessions where students learn about specific legal subjects, practical skills, and emerging
                legal trends through discussions, case studies, and hands-on activities.
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              class="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <div class="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p class="mb-4 text-lg font-bold text-gray-100">Career Fairs</p>
              <p class="text-sm tracking-wide text-gray-300">
                Events that connect law students with law firms, legal departments, and other employers, allowing them
                to explore potential job opportunities and network with legal professionals.
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              class="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <div class="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p class="mb-4 text-lg font-bold text-gray-100">Legal Debates</p>
              <p class="text-sm tracking-wide text-gray-300">
                Debates on legal topics or current legal issues, where students present arguments and counterarguments,
                improving their public speaking and critical thinking abilities.
              </p>
            </div>
          </div>
        </a>
      </div>
      <div class="text-center">
        <a
          href="/"
          aria-label=""
          class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          View gallery
          <svg class="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Features10;
