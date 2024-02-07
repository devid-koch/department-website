import { defaultPadding } from "config/styles";
import Button from "widgets/button";
import heroVdo1 from "assets/videos/hero-video1.mp4";
import heroPoster from "assets/images/hero-placeholder.png";
import { createEffect, createSignal } from "solid-js";
import heroImg from "assets/images/hero-img.png";
import FloatingMenu from "widgets/floating-menu";
import { scroll, setScroll } from "AppStore";
import Header from "widgets/layout/header/header-6";
import { BiRegularChevronDown } from "solid-icons/bi";
import heroImage from "assets/images/hero-img.png"
import { RiArrowsArrowDownSLine } from "solid-icons/ri";

const HeroWithHeader = ({ handleSmoothScroll }: any) => {
  return (
    <div class="w-full h-screen flex justify-center overflow-hidden">
      <div class="w-full h-screen flex flex-col justify-center overflow-hidden">
        <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="hero image" />
        <div class="overlay absolute w-full h-full"></div>
        <div class="flex flex-col absolute w-full items-center fontText uppercase">
          <p class="text-xl sm:text-2xl md:text-2xl xl:text-4xl text-white pb-1 md:pb-4">Welcome to</p>
          <p class="text-xl sm:text-2xl md:text-4xl xl:text-6xl text-white pb-1 md:pb-4">Department of</p>
          <p class="text-xl sm:text-2xl md:text-4xl xl:text-6xl text-white pb-1 md:pb-4">Computer Science</p>
          <div class="w-full h-full flex flex-col justify-center capitalize">
            <p class="text-white text-base md:text-xl font-medium text-center">Elevating Tomorrow's Tech Leaders: Journey into the World of Possibilities</p>
            <p class="text-white text-base md:text-xl font-medium text-center">with the Department of Computer Science</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroWithHeader;
