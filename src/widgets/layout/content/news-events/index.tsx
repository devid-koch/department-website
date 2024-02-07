import { defaultPadding } from "config/styles";
import Carousal1 from "widgets/carousal";
import Features9 from "../features/features-9";

const News1 = () => {
  return (
    <>
      <div class={`w-full ${defaultPadding}`}>
        <p class="inline-block px-8 py-2 mb-6 text-xl font-semibold tracking-wider text-white uppercase rounded-full bg-red-600 hover:cursor-pointer">
          News, Awards, and Recognition
        </p>
        <div class={`w-full flex gap-16 `}>
          <Features9 />

          <div class="grid grid-cols-3 gap-5">
            <img
              class="object-cover w-full h-56 rounded shadow-lg"
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <img
              class="object-cover w-full h-56 rounded shadow-lg"
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <img
              class="object-cover w-full h-56 rounded shadow-lg"
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
export default News1;
