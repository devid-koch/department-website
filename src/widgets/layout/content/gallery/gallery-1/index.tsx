import kumaonihouse from "assets/images/aboutbg.jpg";
import mountain from "assets/images/aboutbg.jpg";
import trekking from "assets/images/aboutbg.jpg";
import villagelife from "assets/images/aboutbg.jpg";
import img3 from "assets/images/aboutbg.jpg";
import img2 from "assets/images/aboutbg.jpg";
import { images } from "data/img";


const Gallery1 = () => {
  return (
    <section class="">
      <div class="flex flex-wrap">
        <div class="flex flex-wrap">
          <div class="flex flex-wrap flex-col-1 md:flex-row md:w-1/2 lg:w-1/2">
            <div class="content w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
              <div class="content-overlay"></div>
              <img
                alt="gallery"
                class="w-full object-cover h-96 md:h-full object-center block"
                src="https://nalbarilawcollege.org/images/1.jpg"
              />
              <div class="content-details fadeIn-bottom">
                <h3 class="font-normal text-2xl text-white">
                  Nalbari Law College
                </h3>
                <p class="ubuntuFont font-normal text-white">
                  Nalbari Law College
                </p>
              </div>
            </div>
            <div class="content w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
              <div class="content-overlay"></div>
              <img
                alt="gallery"
                class="w-full object-cover h-96 md:h-full object-center block"
                src="https://nalbarilawcollege.org/images/2.jpg"
              />
              <div class="content-details fadeIn-bottom">
                <h3 class="font-normal text-2xl text-white">
                  Nalbari Law College
                </h3>
                <p class="ubuntuFont font-normal text-white">
                  Nalbari Law College
                </p>
              </div>
            </div>
            <div class="content w-full">
              <div class="content-overlay"></div>
              <img
                alt="gallery"
                class="w-full h-96 md:h-full object-cover object-center block"
                src="https://nalbarilawcollege.org/images/3.jpg"
              />
              <div class="content-details fadeIn-bottom">
                <h3 class="font-normal text-2xl text-white">
                  Nalbari Law College
                </h3>
                <p class="ubuntuFont font-normal text-white">
                  Nalbari Law College
                </p>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap w-full md:w-1/2 lg:w-1/2">
            <div class="content w-full">
              <div class="content-overlay"></div>
              <img
                alt="gallery"
                class="w-full h-96 md:h-full object-cover object-center block"
                src="https://nalbarilawcollege.org/images/11.jpg"
              />
              <div class="content-details fadeIn-bottom">
                <h3 class="font-normal text-2xl text-white">
                  Nalbari Law College
                </h3>
                <p class="ubuntuFont font-normal text-white">
                  Nalbari Law College
                </p>
              </div>
            </div>
            <div class="content w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
              <div class="content-overlay"></div>
              <img
                alt="gallery"
                class="w-full object-cover h-96 md:h-full object-center block"
                src="https://nalbarilawcollege.org/images/9.jpg"
              />
              <div class="content-details fadeIn-bottom">
                <h3 class="font-normal text-2xl text-white">
                  Nalbari Law College
                </h3>
                <p class="ubuntuFont font-normal text-white">
                  Nalbari Law College
                </p>
              </div>
            </div>
            <div class="content w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
              <div class="content-overlay"></div>
              <img
                alt="gallery"
                class="w-full object-cover h-96 md:h-full object-center block"
                src="https://nalbarilawcollege.org/images/10.jpg"
              />
              <div class="content-details fadeIn-bottom">
                <h3 class="font-normal text-2xl text-white">
                  Nalbari Law College
                </h3>
                <p class="ubuntuFont font-normal text-white">
                  Nalbari Law College
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery1;