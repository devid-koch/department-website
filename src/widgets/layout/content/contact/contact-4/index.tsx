import { _ADDRESS, _PHONE_NO } from "config/defaults";
import { defaultPadding } from "config/styles";

const Contact4 = () => {
  return (
    <section class={ `bg-white ${defaultPadding}` }>
      <div class="px-6 py-12">
        <div class="flex flex-col justify-center items-center">
          <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl ">Get in touch</h1>
          <p class="mt-3 text-gray-500 ">Our friendly team would love to hear from you.</p>
        </div>

        <div class="grid gap-12 mt-10 font-bold">
          <div class="flex justify-around gap-12">
            <div>
              <span class="inline-block p-3 text-secondary rounded-full bg-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>

              <h2 class="mt-4 text-base font-medium text-gray-800 ">Email</h2>
              <p class="mt-2 text-sm text-gray-500 ">Our friendly team is here to help.</p>
              <p class="mt-2 text-sm text-primary ">hello@merakiui.com</p>
            </div>

            <div>
              <span class="inline-block p-3 text-secondary rounded-full bg-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </span>

              <h2 class="mt-4 text-base font-medium text-gray-800 ">College Address</h2>
              <p class="mt-2 text-sm text-gray-500 ">Come and join us</p>
              <p class="mt-2 text-sm text-primary ">{ _ADDRESS }</p>
            </div>

            <div>
              <span class="inline-block p-3 text-secondary rounded-full bg-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </span>

              <h2 class="mt-4 text-base font-medium text-gray-800 ">Phone</h2>
              <p class="mt-2 text-sm text-gray-500 ">Mon-Fri from 8am to 4pm.</p>
              <p class="mt-2 text-sm text-primary ">{ _PHONE_NO }</p>
            </div>
          </div>

          <div class="overflow-hidden rounded-lg w-full h-[40rem]">
            <iframe
              width="100%"
              height="100%"
              // frameBorder="0"
              title="map"
              // marginHeight="0"
              // marginWidth="0"
              // scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14253.24892757494!2d93.1436897!3d26.7344106!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37445e4920f808cb%3A0xd5b749b84e8ae3d5!2sBiswanath%20College!5e0!3m2!1sen!2sin!4v1707497508859!5m2!1sen!2sin"
            ></iframe>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Contact4;
