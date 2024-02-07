import { defaultPadding } from "config/styles";

const Pricing7 = () => {
  return (
    <div class={`grid items-center bg-white justify-center py-32 sm:max-w-xl md:max-w-full ${defaultPadding} text-gray-800`}>
      <div class=" mb-10 text-center md:mb-12">
        <h2 class="mb-6 ChivoFont text-3xl font-black uppercase leading-none tracking-tight text-gray-900 sm:text-4xl">
          Courses
        </h2>
        <p class="text-base text-gray-700 md:text-lg">
          We provide a wide range of educational programs studies, tailored to meet the learning needs of students at their academic journey.</p>
      </div>
      <div class="grid items-center gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-2 xl:max-w-screen-lg">
        <div class="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
          <div class="relative w-full h-64">
            <img
              src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              class="object-cover w-full h-full rounded-t"
              alt="Plan"
            />
          </div>
          <div class="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
            <div>
              <div class="text-xl font-semibold pb-4">B.A LL.B</div>
              <p class="text-lg text-primary pb-2">
                B.A + LLB is a 3-year full-time course.
              </p>
            </div>
            <a
              href="/"
              class="w-full font-medium tracking-wide text-black transition duration-200"
            >
              Learn more
              <div class="border-2 w-24 border-black"></div>
            </a>
          </div>
        </div>
        <div class="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
          <div class="relative w-full h-64">
            <img
              src="https://images.unsplash.com/photo-1495995424756-6a5a3f9e7543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80"
              class="object-cover w-full h-full rounded-t"
              alt="Plan"
            />
          </div>
          <div class="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
            <div>
              <div class="text-xl font-semibold pb-4">LL.B</div>
              <p class="text-lg text-primary pb-2">
                LLb is a 3-year full-time course.
              </p>
            </div>
            <a
              href="/"
              class="w-full font-medium tracking-wide text-black transition duration-200">
              Learn more
            </a>
            <div class="border-2 w-24 border-black"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Pricing7;
