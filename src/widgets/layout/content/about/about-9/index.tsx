import aboutImg from "assets/images/about.png";
import { defaultPadding } from "config/styles";
import { BiRegularChevronDown, BiSolidBook, BiSolidBookAlt, BiSolidBookOpen } from "solid-icons/bi";
import { BsFileEarmarkText } from "solid-icons/bs";
import { FaRegularCalendarDays, FaSolidGraduationCap } from "solid-icons/fa";
import { RiBusinessCalendarCheckFill } from 'solid-icons/ri'
import { ImDownload3 } from 'solid-icons/im'
import Button from "widgets/button";

const About9 = () => {
  return (
    <div class={`flex flex-col md:flex-row w-full h-full bg-white ${defaultPadding}`}>
      <div class="w-full md:w-2/3 lg:w-1/2 bg-primary flex flex-col items-center p-6">
        <p class="font-black uppercase ChivoFont text-3xl text-white py-8">About the College</p>
        <div class="flex flex-col space-y-2 text-lg text-white text-justify pb-6">
        <p>
          Nalbari Law College is one of the premier institution for legal education in Assam. It was established on
          1st November 1981 at Nalbari, the then sub-divisional headquarter of the Nalbari sub-division of Kamrup
          district.</p>
          <p>Nalbari Law College is the only centre for advanced legal studies covering the entire Nalbari and
          Baksa districts, located in the south to the Nalbari town. It has been imparting quality education since its
          inception. A good number of alumni have been rendering their services to the nation at their different
          capacities.
        </p>
        </div>
        <Button title="Read me" fontSize="bold" bgColor="bg-secondary" width="w-32" textColor="primary"/>
        {/* <button class="bg-secondary w-32 mt-6 py-2 px-4 font-bold rounded-xl text-base text-white">Read me</button> */}
      </div>
      <div class="grid grid-cols-2 lg:grid-cols-1 bg-gray-200 md:w-2/3 lg:w-4/6 px-6 py-8 text-gray-800">
        <div class="grid lg:grid-cols-3 px-10 lg:space-y-0 lg:space-x-6">
          <div class="flex items-center gap-2 m-2 group cursor-pointer">
            <div class="bg-primary p-2 inline-block group-hover:bg-secondary rounded-xl">
              <BiSolidBookOpen class="text-white w-8 h-8" />
            </div>
            <p class="text-base font-bold">Prospectus</p>
          </div>

          <div class="flex items-center gap-2 m-2 group cursor-pointer">
            <div class="bg-primary p-2 inline-block group-hover:bg-secondary rounded-xl">
              <BsFileEarmarkText class="text-white w-8 h-8" />
            </div>
            <p class="text-base font-bold">Admission Fees</p>
          </div>

          <div class="flex items-center gap-2 m-2 group cursor-pointer">
            <div class="bg-primary p-2 inline-block group-hover:bg-secondary rounded-xl">
              <FaSolidGraduationCap class="text-white w-8 h-8" />
            </div>
            <p class="text-base font-bold">Result</p>
          </div>


        </div>
        <div class="grid lg:grid-cols-3 px-10 lg:space-y-0 lg:space-x-6">
          <div class="flex items-center gap-2 m-2 group cursor-pointer">
            <div class="bg-primary p-2 inline-block group-hover:bg-secondary rounded-xl">
              <FaRegularCalendarDays class="text-white w-8 h-8" />
            </div>
            <p class="text-base font-bold">Exam Schedule</p>
          </div>

          <div class="flex items-center gap-2 m-2 group cursor-pointer">
            <div class="bg-primary p-2 inline-block group-hover:bg-secondary rounded-xl">
              <RiBusinessCalendarCheckFill class="text-white w-8 h-8" />
            </div>
            <p class="text-base font-bold">Academics Calender</p>
          </div>

          <div class="flex items-center gap-2 m-2 group cursor-pointer">
            <div class="bg-primary p-2 inline-block group-hover:bg-secondary rounded-xl">
              <ImDownload3 class="text-white w-8 h-8" />
            </div>
            <p class="text-base font-bold">Downloads</p>
          </div>
        </div>
        <div class="grid lg:grid-cols-3 px-10 lg:space-y-0 lg:space-x-6">
          <div class="flex items-center gap-2 m-2 group cursor-pointer">
            <div class="bg-primary p-2 inline-block group-hover:bg-secondary rounded-xl">
              <FaRegularCalendarDays class="text-white w-8 h-8" />
            </div>
            <p class="text-base font-bold">Exam Schedule</p>
          </div>

          <div class="flex items-center gap-2 m-2 group cursor-pointer">
            <div class="bg-primary p-2 inline-block group-hover:bg-secondary rounded-xl">
              <RiBusinessCalendarCheckFill class="text-white w-8 h-8" />
            </div>
            <p class="text-base font-bold">Academics Calender</p>
          </div>

          <div class="flex items-center gap-2 m-2 group cursor-pointer">
            <div class="bg-primary p-2 inline-block group-hover:bg-secondary rounded-xl">
              <ImDownload3 class="text-white w-8 h-8" />
            </div>
            <p class="text-base font-bold">Downloads</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About9;
