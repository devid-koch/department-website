import principal from "assets/images/principal.jpg";
import { defaultPadding } from "config/styles";
const PrincipalDesk = () => {
  return (
    <div class={`w-full flex flex-col lg:flex-row gap-16 py-32 bg-themeWhite ${defaultPadding} bgBlob `}>
      <div class="flex flex-col items-center justify-center bgSection">
        <div class="w-96 h-96 rounded-full overflow-hidden ">
          <img src={principal} class="object-cover w-full h-full" />
        </div>
        <div class="text-xl text-center pt-4 font-bold text-gray-800">

        <p>Dr. Dhiraj Bhusan Sarmah </p>
        <p>LL.M., Ph.D</p>
        </div>
      </div>
      <div class="flex flex-col justify-center">
        <div class="w-full mb-4">
          <p class="text-3xl md:text-4xl font-black ChivoFont tracking-wide text-primary uppercase rounded-full mb-4 whitespace-nowrap">
            Principal's Message
          </p>
          <div class="w-72 flex-1 border-2 border-primary rounded-full"></div>
        </div>
        <div class="flex flex-col gap-4 text-lg text-primary text-justify ">
          <p>
            It gives me immense pleasure to welcome you to Nalbari Law College. This College has a long history of
            having produced some of the best legal brains the state. We believe in overall personality development of
            every students.
          </p>
          <p>We at Nalbari Law College are committed to provide you with quality legal education and training.</p>
          <p>
            I believe that it is not the infrastructure which makes a college popular but the real strength lies in its
            academic environment.
          </p>
          <p>
            I hope you enjoy in our campus and by the end of three years empower yourself enough so as to become
            responsible citizens of this great Indian nation
          </p>
        </div>
      </div>
    </div>
  );
};
export default PrincipalDesk;
