import { FaSolidCheck, FaSolidPlus } from "solid-icons/fa";
import studentimg from "assets/images/about.png"
import Button from "widgets/button";

const WhyNalbariLawCollege = () => {
  return (
    <div class="flex flex-col pt-24">
      <div class="flex space-x-20">
        <div class="flex flex-col">
          <div class="flex flex-col dmfont space-y-4">
            <p class="text-primary dark:text-textColor font-bold text-4xl">Why Bachelor of Computer Application(BCA)</p>
            <p class="text-textColor font-normal text-base text-justify">Bachelor of Computer Application (BCA)

              The Bachelor of Computer Application (BCA) is a 3-year (6 semesters) undergraduate degree programme affiliated to Gauhati University. It is valuable for the students wishing to learn about the world of computer languages and information technology. It caters to students with specific interests with the core computer science courses and wide range of skill enhancement and elective courses. The course aims to develop students with intellectual and logical skills and at the same time implementation of mathematical and physics problems using popular programming languages.  </p>
          </div>
          <div class="flex gap-4 pb-8">
            <div class="flex flex-col pt-5">
              <p class="dmFont text-xl text-textColor">Year of Establishment: 2017</p>
            </div>
          </div>
          <Button
            title="READ MORE"
            bgColor="bg-primary"
            roundedSize="none"
            borderSize="0"
            // hoverBgColor="hover:bg-yellow-500"
            width="w-40"
            height="h-12"
            textColor="white"
          // hoverTextColor="hover:bg-black"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyNalbariLawCollege;
