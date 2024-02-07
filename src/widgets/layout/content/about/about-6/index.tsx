import { defaultMarginB, defaultPadding } from "config/styles";
const About6 = () => {
  return (
    <div class={` ${defaultPadding}`}>
      <div class="w-full flex flex-col md:flex-row items-center gap-6">
        <div class="w-full flex flex-col items-center gap-4">
          <div class="max-w-xl overflow-hidden" data-aos="zoom-in-right">
            <div class="w-full flex flex-col items-center md:items-start">
              <p class={`text-2xl font-medium text-primary capitalize lg:text-3xl`}>About</p>
              <div class="mb-4">
                <span class="inline-block w-40 h-1 bg-secondary rounded-full"></span>
                <span class="inline-block w-3 h-1 mx-1 bg-secondary rounded-full"></span>
                <span class="inline-block w-1 h-1 bg-secondary rounded-full"></span>
              </div>
            </div>

            <p class="text-md text-primary md:text-lg text-justify">
              <b>Dr. Goutam Barman </b>
              is a
              <b>
                <i> Law Consultant and Founder of Judisica Law Chamber (Estd. 2012)</i>
              </b>
              , with over 10 years of experience in providing strategic legal advice and guidance to clients in a range
              of practice areas. His utmost priority is to guarantee the complete satisfaction of clients with the
              outcomes of their cases. It is his genuine passion to lend a helping hand to individuals who encounter
              difficulties in navigating the complexities of the legal system. The online services are exclusively
              focused on providing professional opinions pertaining to specific legal issues. Convenient phone
              consultations can be meticulously scheduled to accommodate the unique requirements of each client.
            </p>
            <br />
            <div class="space-y-1 text-primary">
              <h6 class="font-semibold leading-5">Dr. Goutam Barman,</h6>
              <h6 class="font-semibold leading-5">B.Sc., LL.M., Ph.D.(Law)</h6>
              <h6 class="font-semibold leading-5">Founder, Judisica Law Chamber (Estd. 2012)</h6>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" class="w-full flex items-center justify-center overflow-hidden rounded-md">
          <img
            class="object-contain w-full h-full rounded-sm shadow-lg"
            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
          />
        </div>
      </div>
    </div>
  );
};
export default About6;
