import { defaultPadding } from "config/styles";
import { VsArrowCircleRight } from 'solid-icons/vs'
import Tables from "./tables";
import HeaderBar from "widgets/header-bar";
const AdmissionProcess = () => {
  return (
    <>
      <div class="bg-white">
        <div class="w-full h-[25rem] flex justify-center items-center overflow-hidden">
          <img src="https://images.unsplash.com/photo-1579444741963-5ae219cfe27c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""
            class="w-full h-full object-cover" />
        </div>
        <HeaderBar title="Admission Process" />
        <div class={`bg-white ${defaultPadding} space-y-4 p-10`}>
          <p class="text-textColor text-base dmFont">Admission to 5 year BA/BBA/B.COM.LL.B(H) Course & LL.B 3 Year Course is done strictly on the basis of merit of +2 results/Graduation marks and on the basis of personal interview of students. Seats allotted on first come first serve basis. </p>
          <p class="text-textColor text-base dmFont">Applicants of 5 year BA/BBA/B.COM.LL.B(H) Course & LL.B 3 Year Course are required to make a payment of Rs.500/-(Five hundred only) for obtaining the Application Form along with the Prospectus.  </p>
          <p class="text-textColor text-base dmFont">Applicants need to bring their original documents at the time of their personal interview for completion of the admission process. The documents required for admission puposes is listed below: </p>
          <div class="space-y-1">
            <p class="dmFont font-bold text-2xl text-blue-700">For 5 years BA/LL.B Course</p>
            <div class="flex text-textColor items-center space-x-1">
              <VsArrowCircleRight class="w-4 h-4" />
              <p class="text-base">10th certificate or admit card (for age proof-xerox and orginal)</p>
            </div>
            <div class="flex text-textColor items-center space-x-1">
              <VsArrowCircleRight class="w-4 h-4" />
              <p class="text-base">Marksheets of class 10,12 and graduation (Xerox and original)</p>
            </div>
            <div class="flex text-textColor items-center space-x-1">
              <VsArrowCircleRight class="w-4 h-4" />
              <p class="text-base">Category certificate (SC/ST/OBC) if applicable</p>
            </div>
            <div class="flex text-textColor space-x-1">
              <VsArrowCircleRight class="w-4 h-4 mt-1" />
              <p class="text-base">If the student has taken prior admission in any college under North-East University then the previous admission needs to be cancelled and admission cancellation certificate along with Old Registration certificate is to be submitted at the time of admission</p>
            </div>
          </div>
          <div class="space-y-1 pb-5">
            <p class="dmFont font-bold text-2xl text-blue-700">For 3 years LL.B Course</p>
            <div class="flex text-textColor items-center space-x-1">
              <VsArrowCircleRight class="w-4 h-4" />
              <p class="text-base">10th certificate or admit card (for age proof-xerox and orginal)</p>
            </div>
            <div class="flex text-textColor items-center space-x-1">
              <VsArrowCircleRight class="w-4 h-4" />
              <p class="text-base">Marksheets of class 10,12 and graduation (Xerox and original)</p>
            </div>
            <div class="flex text-textColor items-center space-x-1">
              <VsArrowCircleRight class="w-4 h-4" />
              <p class="text-base">Category certificate (SC/ST/OBC) if applicable</p>
            </div>
            <div class="flex text-textColor space-x-1">
              <VsArrowCircleRight class="w-4 h-4 mt-1" />
              <p class="text-base">If the student has taken prior admission in any college under North-East University then the previous admission needs to be cancelled and admission cancellation certificate along with Old Registration certificate is to be submitted at the time of admission</p>
            </div>
          </div>
          <Tables />
        </div>
      </div>
    </>
  );
};
export default AdmissionProcess;
