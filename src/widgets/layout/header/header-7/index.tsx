import logo from "assets/images/logo-dark.png";
import {
  FaBrandsFacebook,
  FaRegularCircleUser,
  FaSolidBell,
  FaSolidChevronLeft,
  FaSolidLocationDot,
  FaSolidPhoneFlip,
  FaSolidPowerOff,
} from "solid-icons/fa";
import { BsPersonFill } from "solid-icons/bs";
import { defaultPadding } from "config/styles";
import { user, setScroll, scroll, setUser } from "AppStore";
import { useNavigate } from "@solidjs/router";

import { AiFillPhone, AiOutlineLogout, AiOutlineMail } from "solid-icons/ai";
import { IoCheckmarkDoneCircleOutline, IoCloseCircleOutline, IoMailOutline, IoNotificationsOutline, IoNotificationsSharp } from "solid-icons/io";
import colors from "config/colors";
import { createEffect, createSignal } from "solid-js";
import logoDark from "assets/images/logo-dark.png";
import logoWhite from "assets/images/logo-white.png";
import { FiMail, FiMenu } from "solid-icons/fi";
import heroImg from "assets/images/hero-img.jpg";
import clickOutside from "widgets/outside-click";
import Button from "widgets/button";
import FloatingMenu from "widgets/floating-menu";
import { linkToPage } from "widgets/link-to-page";
import { TbMailFilled } from "solid-icons/tb";
import logo1 from "assets/images/nlc-logo.png"
import { OcCheckcircle2 } from 'solid-icons/oc'
import { _ADDRESS, _PHONE_NO } from "config/defaults";


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
  button = false,

  handleSmoothScroll = () => { },
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
        class={ `w-full h-14 fixed z-50 ${defaultPadding} ${!transparentHeader() ? "lg:flex shadow-md hidden bg-[#17082D] h-20" : "backdrop-filter lg:backdrop-blur-xl bg-opacity-30 mt-20"
          } transition-colors duration-500 normalText` }>
        <div class="w-full h-full flex items-center justify-between">
          <div class="w-full flex">
            <div
              class={ `w-full flex ${webMenuPosition == "right" ? "justify-start lg:justify-center" : "justify-end lg:justify-between "
                }  items-center space-x-8 font-semibold  ${transparentHeader() ? "text-white" : "text-white"}` }>
              <div
                class={ `${toggleNav() ? "w-full lg:w-fit h-screen lg:h-full z-50 lg:z-0" : "-z-10 lg:z-0 delay-500 lg:delay-0"
                  } fixed lg:relative top-0 right-0 bg-[#000000aa] lg:bg-[#00000000]` }>
                <div
                  //@ts-ignore
                  use:clickOutside={ () => setToggleNav(false) }
                  class={ `${toggleNav() ? "right-0" : "right-full lg:right-0"
                    } fixed lg:relative top-0 w-64 lg:w-fit h-screen lg:h-full flex flex-col lg:flex-row lg:items-center p-5 lg:p-0 space-y-5 lg:space-y-0 lg:space-x-5 bg-gray-900 backdrop-blur-0 opacity-80 lg:bg-[#00000000] transition-all duration-500` }>
                  <div class="w-full h-8 flex lg:hidden justify-end mb-7">
                    <div
                      onClick={ () => {
                        setToggleNav(false);
                      } }>
                      <IoCloseCircleOutline class="h-8 w-8 text-primary xl:hover:cursor-pointer xl:hover:bg-blue-200 active:bg-blue-200 duration-900 rounded-full" />
                    </div>
                  </div>
                  <a
                    onClick={ () => { handleSmoothScroll("home", 0), linkToPage(navigate, "/") } }
                    class={ `block text-xl lg:text-base capitalize hover:cursor-pointer transition-all duration-300 ${transparentHeader()
                      ? "text-primary lg:text-white hover:text-secondary"
                      : "text-primary hover:text-secondary"
                      }${toggleNav() ? "active:border-l-4 active:border-primary active:pl-4 " : ""}` }>
                    Home
                  </a>
                  <div
                    onClick={ () => { handleSmoothScroll("about", 1), linkToPage(navigate, "/about-us") } }
                    class={ `block text-xl lg:text-base capitalize hover:cursor-pointer transition-all duration-300 whitespace-nowrap ${transparentHeader()
                      ? "text-primary lg:text-white hover:text-secondary"
                      : "text-primary hover:text-secondary"
                      }${toggleNav() ? "active:border-l-4 active:border-primary active:pl-4 " : ""}` }>
                    About Us
                  </div>
                  <a
                    onClick={ () => { handleSmoothScroll("pricing", 3), linkToPage(navigate, "/notices") } }
                    class={ `block text-xl lg:text-base capitalize hover:cursor-pointer transition-all duration-300 ${transparentHeader()
                      ? "text-primary lg:text-white hover:text-secondary"
                      : "text-primary hover:text-secondary"
                      }${toggleNav() ? "active:border-l-4 active:border-primary active:pl-4 " : ""}` }>
                    Notices
                  </a>

                  <a
                    onClick={ () => { handleSmoothScroll("article", 4), linkToPage(navigate, "/contact-us") } }
                    class={ `block text-xl lg:text-base capitalize hover:cursor-pointer transition-all duration-300 ${transparentHeader()
                      ? "text-primary lg:text-white hover:text-secondary"
                      : "text-primary hover:text-secondary"
                      }${toggleNav() ? "active:border-l-4 active:border-primary active:pl-4 " : ""}` }>
                    Contact
                  </a>
                  <div class="w-full flex justify-end">
                    <a
                      onClick={ () => handleSmoothScroll("contact", 5) }
                      class={ `block text-xl lg:text-base capitalize hover:cursor-pointer transition-all duration-300 ${transparentHeader()
                        ? "text-primary lg:text-white hover:text-secondary"
                        : "text-primary hover:text-secondary"
                        }${toggleNav() ? "active:border-l-4 active:border-primary active:pl-4 " : ""}` }
                      href="https://school-management-system-virid.vercel.app/">
                      Login
                    </a>
                  </div>
                  {/* <a
                    onClick={() => handleSmoothScroll("contact", 5)}
                    class={`block text-xl lg:text-base capitalize hover:cursor-pointer transition-all duration-300 ${transparentHeader()
                      ? "text-primary lg:text-white hover:text-secondary"
                      : "text-primary hover:text-secondary"
                      }${toggleNav() ? "active:border-l-4 active:border-primary active:pl-4 " : ""}`}>
                    Library
                  </a>
                  <a
                    onClick={() => { handleSmoothScroll("contact", 5), linkToPage(navigate, "/photo-gallery") }}
                    class={`block text-xl lg:text-base capitalize hover:cursor-pointer transition-all duration-300 whitespace-nowrap ${transparentHeader()
                      ? "text-primary lg:text-white hover:text-secondary"
                      : "text-primary hover:text-secondary"
                      }${toggleNav() ? "active:border-l-4 active:border-primary active:pl-4 " : ""}`}>
                    Photo Gallery
                  </a>
                  <a
                    onClick={() => { handleSmoothScroll("contact", 5), linkToPage(navigate, "/contact-us") }}
                    class={`block text-xl lg:text-base capitalize hover:cursor-pointer transition-all duration-300 whitespace-nowrap ${transparentHeader()
                      ? "text-primary lg:text-white hover:text-secondary"
                      : "text-primary hover:text-secondary"
                      }${toggleNav() ? "active:border-l-4 active:border-primary active:pl-4 " : ""}`}>
                    Contact Us
                  </a> */}
                </div>
              </div>

              <div class="flex items-center space-x-3">
                { showNotificationIcon ? (
                  <div class="w-14 h-14 flex items-center justify-center">
                    <FaSolidBell class="w-9 h-9 fill-white" />
                  </div>
                ) : null }
                { showMenu ? (
                  <div
                    onClick={ () => setToggleNav(!toggleNav()) }
                    class="w-14 h-14 flex lg:hidden items-center justify-center rounded-md active:bg-[#ffffff77] active:scale-95 transition-transform duration-300">
                    <FiMenu class="w-9 h-9 fill-white" />
                  </div>
                ) : null }

                { showAvatar ? (
                  <div class="w-14 h-14 hidden lg:flex items-center justify-center overflow-hidden border rounded-full">
                    <img src={ heroImg } class="w-full h-full object-cover" />
                  </div>
                ) : Logout ? (
                  <div class="w-14 h-14 hidden lg:flex items-center justify-center">
                    <FaSolidPowerOff class="w-9 h-9 fill-white" />
                  </div>
                ) : null }
              </div>
            </div>
          </div>
        </div>
      </header >
      {/* <div class="w-full lg:flex fixed z-50 hidden">
        <div class="relative flex w-full">

          <div class="w-full flex bg-white absolute items-center">

            <div class="w-20 h-20 ml-32">
              <img src={logo1} alt="" class="w-full h-full" />
            </div>
            <p class="ChivoFont font-bold text-3xl text-gray-800">Nalbari Law College</p>
          </div>
          <div class="w-full border-b-[5rem] border-l-[4rem] border-solid border-l-transparent border-b-primary absolute left-96 ml-80">
            <div class="hidden xl:flex absolute gap-8 my-4 lg:ml-14">

              <div class="flex gap-2">
                <OcCheckcircle2 class="text-secondary w-4 h-6" />
                <div>
                  <p class="text-secondary font-bold">Address</p>
                  <p class="text-xs text-white">{_ADDRESS}</p>
                </div>
              </div>
              <div class="flex gap-2">
                <OcCheckcircle2 class="text-secondary w-4 h-6" />
                <div>
                  <p class="text-secondary font-bold">Email</p>
                  <p class="text-xs text-white">nalbarilawcollege@gmail.com</p>
                </div>
              </div>
              <div class="flex gap-2">
                <OcCheckcircle2 class="text-secondary w-4 h-6" />
                <div>
                  <p class="text-secondary font-bold">Call us</p>
                  <p class="text-xs text-white">{_PHONE_NO}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <FloatingMenu toggle={scroll()} handleSmoothScroll={handleSmoothScroll} /> */ }
    </>
  );
};
export default Header;
