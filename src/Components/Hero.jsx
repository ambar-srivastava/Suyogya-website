import bgImg1 from "../assets/bgImg_Hero.jpg";
import bgImg2 from "../assets/bgImg_Hero-2.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="md:w-full md:h-[100vh] overflow-hidden relative">
      <div className="absolute flex flex-col justify-center px-10 lg:px-20 bg-black/70 h-full w-full">
        <h2 className="text-[1.6rem] sm:text-[2rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] 2xl:text-[4rem] md:w-[60%] text-white lg:leading-[3.5rem] xl:leading-[4rem]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium,
          excepturi.
        </h2>
        <p className="md:w-[45%] text-white/75 py-10 lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, vel
          voluptatum et, eos cumque repellendus dignissimos earum laboriosam
          molestias magni quas debitis. Magnam, dignissimos cupiditate.
        </p>
        <div className="flex flex-wrap min-h-max gap-10">
          <Link
            to="/"
            className="text-md uppercase bg-primary border-none outline-none px-6 py-4 text-white hover:bg-[#1f8ea4] transition-all ease-in"
          >
            Join Class Now
          </Link>
          <Link
            to="/"
            className="text-md uppercase bg-primary border-none outline-none px-6 py-4 text-white hover:bg-[#1f8ea4] transition-all ease-in"
          >
            Watch a Video
          </Link>
        </div>
      </div>
      <picture className="bg-cover bg-center">
        <source srcSet={bgImg1} media="(min-width: 768px)" className="" />
        <img
          src={bgImg2}
          alt="Hero image for the landing page"
          className=" h-[100vh] w-full "
        />
      </picture>
    </div>
  );
};

export default Hero;
