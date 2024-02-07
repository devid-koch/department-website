import calendar from "assets/icons/calendar.svg";
import card1 from "assets/images/hero-img.jpg"
import card2 from "assets/images/hero-placeholder.png";
import graduate from "assets/icons/graduate.svg";
const Card = () => {
  return (
    <>
      <div class="py-24">
        <div class="flex flex-col">
         <div class="text-center">
         <p class="font-black text-5xl">PROGRAMS WE OFFER</p>
         <p class="text-xl font-medium">Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula.
          Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa.</p>
         </div>
          <div class="flex">
          <div class="border ">
            <img src={card1} class="w-96 h-96" />
            <p class=" text-gray-800 font-semibold text-3xl">Faculty of Science</p>
          </div>
          <div class="border border-red-500">
            <img src={card2} class="w-96 h-96" />
            <p class="text-gray-800 font-semibold text-3xl">Faculty of Arts</p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
