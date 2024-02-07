import LecturersCards from "./cards";

const Lecturers = () => {
  return (
    <section class="flex flex-col justify-center bg-white py-24">
      <div class="text-center text-primary">
        <p class="text-base text-blue-800 uppercase">Lecturers</p>
        <p class="text-4xl dmFont font-bold">Nalbari Law College Lecturers</p>
      </div>
      <LecturersCards />
    </section>
  );
};

export default Lecturers;
