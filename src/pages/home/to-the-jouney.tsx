import Header from "widgets/layout/header/header-7";
import HeroWithHeader from "./hero-with-header";

const ToTheJourney = () => {
  return (
    <>
      <div class="bg-white h-screen items-center flex">
        <div class="flex flex-col justify-center items-center space-y-8">
          <p class="uppercase text-lg">TO THE JOURNEY AHEAD</p>
          <p class="uppercase text-gray-800 text-5xl text-center leading-tight">EXPERIENCE IN SCHOOL <br /> LEADERSHIP AND TEACHING</p>
          <div class="w-1/2 text-center text-gray-800 text-lg fontText">We are creating an extraordinary and unique school.
            Kingster College is the first
            truly global and modern institution serving children from ages 3 to 18.
            We not only want to improve our students’ lives,
            but we also hope to contribute to the cause of education on every continent.</div>
          <button class="border-b border-gray-500 text-gray-500">
            Learn More
          </button>
        </div>

      </div>
    </>
  );
};
export default ToTheJourney;
