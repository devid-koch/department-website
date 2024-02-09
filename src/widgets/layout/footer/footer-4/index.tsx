import { _CURRENT_YEAR } from "config/defaults";
import { defaultPadding } from "config/styles";

const Footer4 = () => {
  return (
    <div class="w-full footerImgBg md:bg-white bg-primary py-10 mt-20 md:mt-0">
      <div class={ `flex flex-col gap-10 md:pt-52 md:pb-4 ${defaultPadding}` }>
        {/* <div class="grid gap-16 row-gap-10 mb-8 md:grid-cols-4 lg:grid-cols-6"> */ }
        <div class="flex flex-col gap-4 md:flex-row items-start justify-between">
          <div class="lg:col-span-2 md:mt-4">
            <a href="/" aria-label="Go home" title="Company" class="inline-flex items-center">
              <span class="text-xl font-bold tracking-wide text-gray-100 uppercase">Department of Computer Science</span>
            </a>
            <div class="flex flex-col gap-2 mt-2 normalText">
              <p class="text-md text-white">Empowering Minds</p>
              <p class="text-md text-white">Shaping Futures</p>
            </div>
          </div>
          <div class="lg:col-span-2 md:mt-4">
            <a href="/" aria-label="Go home" title="Company" class="inline-flex items-center">
              <span class="text-xl font-semibold tracking-wide text-gray-100 uppercase">Useful links</span>
            </a>
            <div class="flex flex-col md:flex-row md:gap-8 lg:gap-16 mt-2">
              <div class="flex flex-col gap-2 normalText">
                <p class="text-md text-white">College Website</p>
                <p class="text-md text-white">About Us</p>
                <p class="text-md text-white">Contact</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-between pt-5 pb-10 border-t border-purple-200 sm:flex-row">
          <p class="text-xs text-gray-100">© Copyright { _CURRENT_YEAR } Department of Computer Science, Biswanth College. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer4;
