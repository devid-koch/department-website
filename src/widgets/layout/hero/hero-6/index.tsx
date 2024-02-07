import heroImg from "assets/images/hero-img-temp.jpg";
import { defaultPadding } from "config/styles";
import { FaSolidArrowRight } from "solid-icons/fa";
import Button from "widgets/button";
import { TbSpeakerphone } from "solid-icons/tb";
import { BsCalendarDate } from "solid-icons/bs";

const Hero6 = () => {
  return (
    <div class="relative bg-white">
      <img src={heroImg} class="absolute inset-0 object-cover w-full h-full" />
      <div class="relative bg-gray-900 bg-opacity-75">
        <div class={`py-16 ${defaultPadding}`}>
          <div class="flex flex-col items-center justify-between xl:flex-row">
            <div class="w-full mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                The quick, brown fox <br class="hidden md:block" />
                jumps over a <span class="text-gray-500">lazy dog</span>
              </h2>
              <p class="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan, totam rem
                aperiam, eaque ipsa quae.
              </p>

              <Button
                title="Admissions 2023"
                bgColor="bg-secondary"
                textColor="black"
                fontSize="semibold"
                textSize="xl"
                height="h-16"
                width="w-72"
                children={<FaSolidArrowRight />}
              />
            </div>
            <div class="w-full max-w-xl xl:px-8 xl:w-5/12">
              {/* <div class="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 class="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">Sign up for updates</h3>
                <form>
                  <div class="mb-1 sm:mb-2">
                    <label for="firstName" class="inline-block mb-1 font-medium">
                      First name
                    </label>
                    <input
                      placeholder="John"
                      type="text"
                      class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="firstName"
                      name="firstName"
                    />
                  </div>
                  <div class="mb-1 sm:mb-2">
                    <label for="lastName" class="inline-block mb-1 font-medium">
                      Last name
                    </label>
                    <input
                      placeholder="Doe"
                      type="text"
                      class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="lastName"
                      name="lastName"
                    />
                  </div>
                  <div class="mb-1 sm:mb-2">
                    <label for="email" class="inline-block mb-1 font-medium">
                      E-mail
                    </label>
                    <input
                      placeholder="john.doe@example.org"
                      type="text"
                      class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div class="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                      Subscribe
                    </button>
                  </div>
                  <p class="text-xs text-gray-600 sm:text-sm">We respect your privacy. Unsubscribe at any time.</p>
                </form>
              </div> */}
              <div class="w-full flex gap-4">
                <div class="py-16">
                  <div class="grid gap-8 row-gap-5">
                    <div class="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl hover:cursor-pointer">
                      <div class="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100 "></div>
                      <div class="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100 "></div>
                      <div class="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100 "></div>
                      <div class="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100 "></div>
                      <div class="relative p-5 bg-secondary rounded-sm">
                        <div class="flex flex-col mb-2 lg:items-center lg:flex-row">
                          <div class="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                            {/* <svg class="w-8 h-8" stroke="currentColor" viewBox="0 0 52 52">
                            <polygon
                              stroke-width="3"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                              points="29 13 14 29 25 29 23 39 38 23 27 23"
                            ></polygon>
                          </svg> */}
                            <TbSpeakerphone />
                          </div>
                          <h6 class="font-semibold leading-5 text-white">Upcoming Events and Announcements</h6>
                        </div>
                      </div>
                    </div>
                    <div class="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl hover:cursor-pointer">
                      <div class="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"></div>
                      <div class="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"></div>
                      <div class="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"></div>
                      <div class="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"></div>
                      <div class="relative p-5 bg-white rounded-sm">
                        <div class="flex flex-col mb-2 lg:items-center lg:flex-row">
                          {/* <div class="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0"> */}
                          {/* <svg class="w-8 h-8" stroke="currentColor" viewBox="0 0 52 52">
                              <polygon
                                stroke-width="3"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                              ></polygon>
                            </svg> */}
                          <BsCalendarDate class="w-14 h-14 text-secondary" />
                          {/* </div> */}
                          <h6 class="ml-4 font-semibold leading-5">Smooth as an android</h6>
                        </div>
                        <p class="mb-2 text-sm text-gray-900">
                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem
                          aperiam.
                        </p>
                        <a
                          href="/"
                          aria-label=""
                          class="inline-flex items-center text-sm font-semibold transition-colors duration-200 ">
                          Learn more
                        </a>
                      </div>
                    </div>
                    <div class="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl hover:cursor-pointer">
                      <div class="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"></div>
                      <div class="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"></div>
                      <div class="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"></div>
                      <div class="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"></div>
                      <div class="relative p-5 bg-white rounded-sm">
                        <div class="flex flex-col mb-2 lg:items-center lg:flex-row">
                          <div class="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                            <svg class="w-8 h-8" stroke="currentColor" viewBox="0 0 52 52">
                              <polygon
                                stroke-width="3"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg>
                          </div>
                          <h6 class="font-semibold leading-5">This is about justice</h6>
                        </div>
                        <p class="mb-2 text-sm text-gray-900">
                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem
                          aperiam.
                        </p>
                        <a
                          href="/"
                          aria-label=""
                          class="inline-flex items-center text-sm font-semibold transition-colors duration-200 ">
                          Learn more
                        </a>
                      </div>
                    </div>
                    <div class="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl hover:cursor-pointer">
                      <div class="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"></div>
                      <div class="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"></div>
                      <div class="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"></div>
                      <div class="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"></div>
                      <div class="relative p-5 bg-white rounded-sm">
                        <div class="flex flex-col mb-2 lg:items-center lg:flex-row">
                          <div class="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                            <svg class="w-8 h-8" stroke="currentColor" viewBox="0 0 52 52">
                              <polygon
                                stroke-width="3"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg>
                          </div>
                          <h6 class="font-semibold leading-5">This is about justice</h6>
                        </div>
                        <p class="mb-2 text-sm text-gray-900">
                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem
                          aperiam.
                        </p>
                        <a
                          href="/"
                          aria-label=""
                          class="inline-flex items-center text-sm font-semibold transition-colors duration-200 ">
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero6;
