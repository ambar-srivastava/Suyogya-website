import { ProgramsHeroPage, YogaKriya } from "../Components";

const ProgramDetails = () => {
  return (
    <>
      <ProgramsHeroPage />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 xl:gap-20 place-items-center md:p-20 p-10 bg-gradient-to-r from-stone-900 to-zinc-700">
        <YogaKriya />
      </div>
    </>
  );
};

export default ProgramDetails;
