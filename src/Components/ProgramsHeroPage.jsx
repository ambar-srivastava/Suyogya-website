import buddha from "../assets/buddha.jpg";
import buddhaMobile from "../assets/buddhaMobile.jpg";

const ProgramsHeroPage = () => {
  return (
    <div className="md:w-full md:h-[100vh] overflow-hidden relative">
      <div className="absolute flex flex-col justify-center px-10 lg:px-20 bg-black/70 h-full w-full">
        <h2 className="text-[1.6rem] sm:text-[2rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] 2xl:text-[4rem] md:w-[60%] text-white lg:leading-[3.5rem] xl:leading-[4rem]">
          Beginner Programs
        </h2>
        <p className="md:w-[45%] text-white/75 py-10 lg:text-lg">
          Yoga is a way to produce a chemistry of blissfulness. Once you are
          blissful by your own nature, you can deal with outside situations
          effortlessly.
        </p>
        <p className="md:w-[45%] text-white/75 lg:text-lg">
          Take a step towards your wellbeing with these yoga programs, designed
          by Sadhguru and suitable for beginners. With an array of options
          available, you can find a class located near you, attend at an Isha
          center, or even begin right now, wherever you are, with a free online
          program!
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
