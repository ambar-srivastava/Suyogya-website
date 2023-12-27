import { useParams } from "react-router-dom";
import buddha from "../assets/buddha.jpg";
import buddhaMobile from "../assets/buddhaMobile.jpg";

const ProgramsHeroPage = () => {
  const { programType } = useParams();
  return (
    <div className="md:w-full md:h-[100vh] overflow-hidden relative">
      <div className="absolute flex flex-col justify-center px-10 lg:px-20 bg-black/70 h-full w-full">
        {/* here in this h2 I want to add dynamic program name according to the page we are on using param from useParam */}
        <h2 className="text-[1.6rem] sm:text-[2rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] 2xl:text-[4rem] md:w-[60%] text-white lg:leading-[3.5rem] xl:leading-[4rem]">
          {programType === "beginner-program"
            ? "Beginner Program"
            : programType === "advance-program"
            ? "Advance Program"
            : "Program Details"}
        </h2>
        <p className="md:w-[45%] text-white/75 py-10 lg:text-lg">
          {programType === "beginner-program"
            ? "SuYogya has designed its yoga program so that you can learn it from scratch, We team SuYogya is here to help you to conquer yourself to conquer the world. The beginner Program gonna help you to start with no experience and still, you can attain your best. You can find a class located near you, attend at a SuYogya center or even begin right now, wherever you are, with an online session!"
            : programType === "advance-program"
            ? "SuYogya has designed its Advanced Programs for individuals who experience their life beyond the best way, to push their limits mentally, physically, and spiritually. This program includes all the asanas and sadhanas to help you experience your life beyond limitations."
            : "Program Details"}
        </p>
      </div>
      <picture className="bg-cover bg-center">
        <source srcSet={buddha} media="(min-width: 768px)" />
        <img
          src={buddhaMobile}
          alt="Programs Hero Page image for the landing page"
          className=" h-[100vh] w-full "
        />
      </picture>
    </div>
  );
};

export default ProgramsHeroPage;
