import Programs from "./Programs";

const ProgramsPanel = () => {
  return (
    <div className=" w-full bg-gradient-to-r from-stone-900 to-zinc-700 pb-20 lg:px-20 px-10 flex-col items-center gap-10 flex justify-center">
      <h3 className=" font-medium text-[1.6rem] sm:text-[2rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] text-white lg:leading-[3.5rem] xl:leading-[4rem]">
        Yoga & Meditation Programs
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 xl:gap-20 place-items-center">
        <Programs />
      </div>
    </div>
  );
};

export default ProgramsPanel;
