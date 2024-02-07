import { FaSolidCheck, FaSolidPlus } from "solid-icons/fa";
import studentimg from "assets/images/about.png"
import Button from "widgets/button";

const WhyNalbariLawCollege = () => {
  return (
    <div class="flex flex-col py-24">
      <div class="flex space-x-20">
        <div class="flex flex-col">
          <div class="flex flex-col dmfont space-y-4">
            <p class="text-primary font-bold text-4xl">Why Nalbari Law College</p>
            <p class="text-textColor font-normal text-base text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Esse quia veritatis nostrum fugit tempora in necessitatibus explicabo dicta.
              Tempora autem explicabo odit quia consectetur voluptatem harum ducimus? Sit, amet itaque?</p>
          </div>
          <div class="grid gap-2 pt-4">
            <div class="flex gap-2 items-center">
              <FaSolidCheck class="text-blue-500 w-4 h-4" />
              <p class="text-primary text-base">L.L.B</p>
            </div>
            <div class="flex gap-2 items-center">
              <FaSolidCheck class="text-blue-500 w-4 h-4" />
              <p class="text-primary text-base">B.A. L.L.B</p>
            </div>
          </div>
          <div class="flex gap-4 pb-8">
            <div class="flex flex-col pt-5">
              <div class="flex justify-center">
                <p class="text-textColor text-7xl dmFont font-semibold">42</p>
                <FaSolidPlus class="text-tertiary w-10 h-10" />
              </div>
              <p class="dmFont text-textColor">Years Of Experience</p>
            </div>
            <div class="flex flex-col pt-5">
              <div class="flex justify-center">
                <p class="text-textColor text-7xl dmFont font-semibold text-center">10K</p>
                <FaSolidPlus class="text-tertiary w-10 h-10" />
              </div>
              <p class="dmFont text-textColor">Graduated Students</p>
            </div>
          </div>
          <Button
            title="READ MORE"
            bgColor="bg-primary"
            roundedSize="none"
            borderSize="0"
            // hoverBgColor="hover:bg-yellow-500"
            width="w-40"
            height="h-12"
            textColor="white"
          // hoverTextColor="hover:bg-black"
          />
        </div>
        <div class="w-full h-[26rem] mt-8 rounded-md overflow-hidden">
          <img src={studentimg} alt="image"
            class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default WhyNalbariLawCollege;
