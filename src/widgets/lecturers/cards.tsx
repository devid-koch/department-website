import { facultydata } from "data/facultydata";

const LecturersCards = () => {
  return (
    <div class="grid grid-cols-4 bg-white py-10 gap-8">
      {facultydata.map((item: any) => (
        <div class="w-60 h-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 space-y-1">
          <div class="w-full h-56 flex items-center justify-center overflow-hidden">
            <img class="w-full h-full object-cover" src={item.image} alt="avatar" />
          </div>
          <div class="text-center py-2">
            <p class="block text-xl font-bold text-gray-800 dark:text-white">{item.name}</p>
            <p class="text-sm text-gray-700 dark:text-gray-200">Designation: {item.designation}</p>
            <p class="text-sm text-gray-700 dark:text-gray-200">Educational Qualification: {item.qualification}</p>
            <p class="text-sm text-gray-700 dark:text-gray-200">Specialisation: {item.specialisation}</p>
            <p class="text-sm text-gray-700 dark:text-gray-200">Work Exprience: {item.workexprience}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LecturersCards;
