import { defaultPadding } from "config/styles";
import { FaSolidPeopleGroup, FaSolidUserGraduate, FaSolidUserPlus } from "solid-icons/fa";
import { AiOutlineUserAdd } from "solid-icons/ai";

const Statistics8 = () => {
  return (
    <div class={`py-16 ${defaultPadding} bg-white`}>
      <p class="inline-block px-3 py-px mb-4 text-xl font-semibold tracking-wider text-white uppercase rounded-full bg-secondary">
        Principal's Message
      </p>
      <div class="grid gap-24 row-gap-8 lg:grid-cols-5">
        <div class="grid gap-8 lg:col-span-2">
          <div class="flex flex-col gap-2">
            <p class="text-gray-700 text-xl text-justify">
              It gives me immense pleasure to welcome you to Nalbari Law College. This College has a long history of
              having produced some of the best legal brains the state. We believe in overall personality development of
              every students.
            </p>
            <p class="text-gray-700 text-xl text-justify">
              We at Nalbari Law College are committed to provide you with quality legal education and training.
            </p>
            <p class="text-gray-700 text-xl text-justify">
              I believe that it is not the infrastructure which makes a college popular but the real strength lies in
              its academic environment.
            </p>
            <p class="text-gray-700 text-xl text-justify">
              I hope you enjoy in our campus and by the end of three years empower yourself enough so as to become
              responsible citizens of this great Indian nation
            </p>
          </div>
        </div>
        <div class="grid border divide-y rounded lg:col-span-3 sm:grid-cols-2 sm:divide-y-0 sm:divide-x">
          <div class="flex flex-col justify-between p-10">
            <div class="flex gap-6 items-center">
              <FaSolidUserGraduate class="w-14 h-14 fill-secondary" />
              <div>
                <p class="text-lg font-semibold text-gray-800 ">Students</p>
                <p class="text-2xl font-bold text-secondary ">6k</p>
              </div>
            </div>

            <div class="flex gap-6 items-center">
              <FaSolidUserPlus class="w-14 h-14 fill-secondary" />
              <div>
                <p class="text-lg font-semibold text-gray-800 ">Faculty</p>
                <p class="text-2xl font-bold text-secondary ">50</p>
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-between p-10">
            <div class="flex gap-6 items-center">
              <FaSolidPeopleGroup class="w-14 h-14 fill-secondary" />
              <div>
                <p class="text-lg font-semibold text-gray-800 ">Staff</p>
                <p class="text-2xl font-bold text-secondary ">100</p>
              </div>
            </div>
            {/* <div>
              <p class="text-lg font-semibold text-gray-800 ">Facilities</p>
              <p class="text-2xl font-bold text-secondary sm:text-xl">100+</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics8;
