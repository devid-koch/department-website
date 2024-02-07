import logo from "assets/images/logo-dark.png";
import {
  FaRegularCircleUser,
  FaSolidBell,
  FaSolidChevronLeft,
  FaSolidLocationDot,
  FaSolidPowerOff,
} from "solid-icons/fa";
import { BsPersonFill } from "solid-icons/bs";
import { defaultPadding } from "config/styles";
import { user, setScroll, scroll, setUser } from "AppStore";
import { useNavigate } from "@solidjs/router";
import { linkToPage } from "widgets/link-to-page";
import { AiOutlineLogout } from "solid-icons/ai";
import { IoCloseCircleOutline, IoNotificationsOutline, IoNotificationsSharp } from "solid-icons/io";
import colors from "config/colors";
import { createEffect, createSignal } from "solid-js";
import FloatingMenu from "widgets/floating-menu";
import Button from "widgets/button";
import logoWhite from "assets/images/logo-white.png";
import logoDark from "assets/images/logo-dark.png";
import { FiMenu } from "solid-icons/fi";
import heroImg from "assets/images/hero-img.png";
import clickOutside from "widgets/outside-click";
clickOutside;

const Header = ({
  headerVisible = true,
  showLogo = true,
  showBackButton = false,
  controlBackPath = false,
  title = null,
  showNotificationIcon = false,
  webMenuPosition = "right",
  showMenu = true,
  showAvatar = false,
  Logout = false,

  handleSmoothScroll = () => {},
}: any) => {
  const navigate = useNavigate();

  const [transparentHeader, setTransparentHeader] = createSignal(true);
  const [toggleNav, setToggleNav] = createSignal(false);

  createEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY < 50) {
      setTransparentHeader(true);
      setScroll(false);
    } else {
      setTransparentHeader(false);
      setScroll(true);
    }
  };

  return (
    <>
      <header
        class={`w-full h-24 fixed z-50 ${defaultPadding} ${
          !transparentHeader() && "bg-themeWhite shadow-md"
        } transition-colors duration-500`}>
        <div class="w-full h-full flex items-center justify-between">
          <div class="w-fit md:w-96 flex items-center">
            {showBackButton ? (
              <div
                onClick={() => linkToPage(navigate, "back")}
                class="w-12 h-12 flex items-center justify-center mr-2 bg-primaryLight rounded-full lg:cursor-pointer active:scale-95  duration-500">
                <FaSolidChevronLeft class="w-7 h-7 text-white" />
              </div>
            ) : null}
            {showLogo ? (
              <div class="flex items-center h-72 w-72">
                <img class="w-full h-full object-contain" src={transparentHeader() ? logoWhite : logoDark} />
              </div>
            ) : null}
            {title ? <p class="w-0 flex-1 whitespace-nowrap text-lg truncate">{title}</p> : null}
          </div>

          <div class="flex-1">
            <div
              class={`w-full flex ${
                webMenuPosition == "right" ? "justify-end" : "justify-end lg:justify-between "
              }  items-center space-x-8  font-semibold  ${transparentHeader() ? "text-white" : "text-primary"}`}>
              <div
                class={`${
                  toggleNav() ? "w-full lg:w-fit h-screen lg:h-full z-50 lg:z-0" : "-z-10 lg:z-0 delay-500 lg:delay-0"
                } fixed lg:relative top-0 right-0 bg-[#000000aa] lg:bg-[#00000000]`}>
                <div
                  //@ts-ignore
                  use:clickOutside={() => setToggleNav(false)}
                  class={`${
                    toggleNav() ? "right-0" : "-right-full lg:right-0"
                  } fixed lg:relative top-0 w-64 lg:w-fit h-screen lg:h-full flex flex-col lg:flex-row lg:items-center p-5 lg:p-0 space-y-5 lg:space-y-0 lg:space-x-5 bg-themeWhite lg:bg-[#00000000] transition-all duration-500`}>
                  <div class="w-full h-8 flex lg:hidden justify-end mb-7">
                    <div
                      onClick={() => {
                        setToggleNav(false);
                      }}>
                      <IoCloseCircleOutline class="h-8 w-8 text-primary xl:hover:cursor-pointer xl:hover:bg-blue-200 active:bg-blue-200 duration-900 rounded-full" />
                    </div>
                  </div>
                  <a
                    onClick={() => handleSmoothScroll("home", 0)}
                    class={`block text-xl lg:text-base capitalize hover:cursor-pointer transition-all duration-300 ${
                      transparentHeader()
                        ? "text-primary lg:text-white hover:text-primary"
                        : "text-primary hover:text-secondary"
                    }${toggleNav() ? "active:border-l-4 active:border-primary active:pl-4 " : ""}`}>
                    Home
                  </a>
                  <a
                    onClick={() => handleSmoothScroll("about", 1)}
                    class={`block text-xl lg:text-base capitalize hover:cursor-pointer transition-all duration-300 ${
                      transparentHeader()
                        ? "text-primary lg:text-white hover:text-primary"
                        : "text-primary hover:text-secondary"
                    }${toggleNav() ? "active:border-l-4 active:border-primary active:pl-4 " : ""}`}>
                    About
                  </a>
                  <a
                    onClick={() => handleSmoothScroll("services", 2)}
                    class={`block text-xl lg:text-base capitalize hover:cursor-pointer transition-all duration-300 ${
                      transparentHeader()
                        ? "text-primary lg:text-white hover:text-primary"
                        : "text-primary hover:text-secondary"
                    }${toggleNav() ? "active:border-l-4 active:border-primary active:pl-4 " : ""}`}>
                    Services
                  </a>
                  <a
                    onClick={() => handleSmoothScroll("pricing", 3)}
                    class={`block text-xl lg:text-base capitalize hover:cursor-pointer transition-all duration-300 ${
                      transparentHeader()
                        ? "text-primary lg:text-white hover:text-primary"
                        : "text-primary hover:text-secondary"
                    }${toggleNav() ? "active:border-l-4 active:border-primary active:pl-4 " : ""}`}>
                    Pricing
                  </a>

                  <a
                    onClick={() => handleSmoothScroll("article", 4)}
                    class={`block text-xl lg:text-base capitalize hover:cursor-pointer transition-all duration-300 ${
                      transparentHeader()
                        ? "text-primary lg:text-white hover:text-primary"
                        : "text-primary hover:text-secondary"
                    }${toggleNav() ? "active:border-l-4 active:border-primary active:pl-4 " : ""}`}>
                    Articles
                  </a>

                  <a
                    onClick={() => handleSmoothScroll("contact", 5)}
                    class={`block text-xl lg:text-base capitalize hover:cursor-pointer transition-all duration-300 ${
                      transparentHeader()
                        ? "text-primary lg:text-white hover:text-primary"
                        : "text-primary hover:text-secondary"
                    }${toggleNav() ? "active:border-l-4 active:border-primary active:pl-4 " : ""}`}>
                    Contact
                  </a>
                  <div class="flex lg:hidden pt-10">
                    <Button
                      style="outline"
                      borderColor={`border-primary`}
                      title="Book A Meeting"
                      bgColor="bg-themeWhite"
                      textColor={`primary`}
                      fontSize="semibold"
                      textSize="xl"
                      width="w-48"
                      height="h-14"
                      hoverBgColor="hover:bg-none"
                      hoverTextColor="hover:text-none"
                      onClick={() => handleSmoothScroll("", 5)}
                    />
                  </div>
                </div>
              </div>

              <div class="flex items-center space-x-3">
                {showNotificationIcon ? (
                  <div class="w-14 h-14 flex items-center justify-center">
                    <FaSolidBell class="w-9 h-9 fill-white" />
                  </div>
                ) : null}
                {showMenu ? (
                  <div
                    onClick={() => setToggleNav(!toggleNav())}
                    class="w-14 h-14 flex lg:hidden items-center justify-center rounded-md active:bg-[#ffffff77] active:scale-95 transition-transform duration-300">
                    <FiMenu class="w-9 h-9 fill-white" />
                  </div>
                ) : null}

                {showAvatar ? (
                  <div class="w-14 h-14 hidden lg:flex items-center justify-center overflow-hidden border rounded-full">
                    <img src={heroImg} class="w-full h-full object-cover" />
                  </div>
                ) : Logout ? (
                  <div class="w-14 h-14 hidden lg:flex items-center justify-center">
                    <FaSolidPowerOff class="w-9 h-9 fill-white" />
                  </div>
                ) : null}

                <div class="hidden lg:flex">
                  <Button
                    style="outline"
                    borderColor={`${transparentHeader() ? "border-white" : "border-primary"}`}
                    title="Book A Meeting"
                    bgColor="bg-themeWhite"
                    textColor={`${transparentHeader() ? "white" : "primary"}`}
                    fontSize="semibold"
                    textSize="xl"
                    width="w-48"
                    height="h-14"
                    hoverBgColor="hover:bg-none"
                    hoverTextColor="hover:text-none"
                    onClick={() => handleSmoothScroll("", 5)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <FloatingMenu toggle={scroll()} handleSmoothScroll={handleSmoothScroll} />
    </>
  );
};
export default Header;
