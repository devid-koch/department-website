import { heroImg } from "assets/images";
import { BiSolidSchool } from "solid-icons/bi";
import { BsBuilding } from "solid-icons/bs";
import { TbSchool, TbSocial, TbSportBillard } from "solid-icons/tb";

const HeroWithHeader5 = () => {
  return (
    // <section class="bg-white ">
    //   <nav class="container p-6 mx-auto lg:flex lg:justify-between lg:items-center">
    //     <div class="flex items-center justify-between">
    //       <a href="#">
    //         <img class="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="" />
    //       </a>
    //       {/* <!-- Mobile menu button --> */}
    //       <div class="flex lg:hidden">
    //         <button
    //           type="button"
    //           class="text-gray-500  hover:text-gray-600  focus:outline-none focus:text-gray-600 "
    //           aria-label="toggle menu"
    //         >
    //           <svg
    //             x-show="!isOpen"
    //             xmlns="http://www.w3.org/2000/svg"
    //             class="w-6 h-6"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //             stroke-width="2"
    //           >
    //             <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
    //           </svg>

    //           <svg
    //             x-show="isOpen"
    //             xmlns="http://www.w3.org/2000/svg"
    //             class="w-6 h-6"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //             stroke-width="2"
    //           >
    //             <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    //           </svg>
    //         </button>
    //       </div>
    //     </div>

    //     {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
    //     <div class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg: lg:shadow-none  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
    //       <div class="flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:space-y-0">
    //         <a class="text-gray-700 lg:mx-6   hover:text-blue-500" href="#">
    //           Home
    //         </a>
    //         <a class="text-gray-700 lg:mx-6   hover:text-blue-500" href="#">
    //           Components
    //         </a>
    //         <a class="text-gray-700 lg:mx-6   hover:text-blue-500" href="#">
    //           Pricing
    //         </a>
    //         <a class="text-gray-700 lg:mx-6   hover:text-blue-500" href="#">
    //           Contact
    //         </a>
    //         <a class="text-gray-700 lg:mx-6   hover:text-blue-500" href="#">
    //           FAQ
    //         </a>
    //       </div>

    //       <a
    //         class="block h-10 px-5 py-2 mt-4 text-sm text-center text-gray-700 capitalize transition-colors duration-300 transform border rounded-md   lg:mt-0 hover:bg-gray-100 lg:w-auto"
    //         href="#"
    //       >
    //         Contact Us
    //       </a>
    //     </div>
    //   </nav>

    //   <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
    //     <div class="w-full lg:w-1/2">
    //       <div class="lg:max-w-lg">
    //         <h1 class="text-3xl font-semibold tracking-wide text-gray-800  lg:text-4xl">
    //           Easiest way to create your website
    //         </h1>

    //         <div class="mt-8 space-y-5">
    //           <p class="flex items-center -mx-2 text-gray-700 ">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               class="w-6 h-6 mx-2 text-blue-500"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //             >
    //               <path
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    //               />
    //             </svg>

    //             <span class="mx-2">Clean and Simple Layout</span>
    //           </p>

    //           <p class="flex items-center -mx-2 text-gray-700 ">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               class="w-6 h-6 mx-2 text-blue-500"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //             >
    //               <path
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    //               />
    //             </svg>

    //             <span class="mx-2">Just Copy Paste Codeing</span>
    //           </p>

    //           <p class="flex items-center -mx-2 text-gray-700 ">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               class="w-6 h-6 mx-2 text-blue-500"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //             >
    //               <path
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    //               />
    //             </svg>

    //             <span class="mx-2">Easy to Use</span>
    //           </p>
    //         </div>
    //       </div>

    //       <div class="w-full mt-8 bg-transparent border rounded-md lg:max-w-sm  focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300  focus-within:ring-opacity-40">
    //         <form class="flex flex-col lg:flex-row">
    //           <input
    //             type="email"
    //             placeholder="Enter your email address"
    //             class="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none  focus:outline-none focus:placeholder-transparent focus:ring-0"
    //           />

    //           <button
    //             type="button"
    //             class="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
    //           >
    //             Join Us
    //           </button>
    //         </form>
    //       </div>
    //     </div>

    //     <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
    //       <img
    //         class="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
    //         src="https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    //         alt="glasses photo"
    //       />
    //     </div>
    //   </div>
    // </section>
    <div class="md:mx-32">
      <div class="w-full bg-white border shadow-2xl flex flex-col md:flex-row py-10 pl-24">
        <div class="w-full h-full flex">
          <div>
          <BsBuilding class="w-16 h-20"/>
          </div>
          <div class="pt-3 pl-3 font-bold">
            <p class="text-xl pb-1">University Life</p>
            <p class="opacity-50">Overall in here</p>
          </div>
        </div>
        <div class="w-full h-full flex">
          <div>
          <TbSchool class="w-20 h-20"/>
          </div>
          <div class="pt-3 pl-3 font-bold">
            <p class="text-xl pb-1">Graduation</p>
            <p class="opacity-50">Getting Diploma</p>
          </div>
        </div>
        <div class="w-full h-full flex">
          <div>
          <TbSportBillard class="w-20 h-20"/>
          </div>
          <div class="pt-3 pl-3 font-bold">
            <p class="text-xl pb-1">Athletics</p>
            <p class="opacity-50">Sport Clubs</p>
          </div>
        </div>
        <div class="w-full h-full flex">
          <div>
          <TbSocial class="w-16 h-20"/>
          </div>
          <div class="pt-3 pl-3 font-bold">
            <p class="text-xl pb-1">Social</p>
            <p class="opacity-50">Overall in here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroWithHeader5;
