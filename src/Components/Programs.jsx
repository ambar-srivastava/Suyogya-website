import { Link } from "react-router-dom";
import ProgramsImg1 from "../assets/ProgramsImg1.jpg";
import ProgramsImg2 from "../assets/ProgramsImg2.jpg";
import ProgramsImg3 from "../assets/ProgramsImg3.jpg";
import ProgramsImg4 from "../assets/ProgramsImg4.jpg";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const programs = [
  {
    id: 1,
    programName: "Beginner Program",
    text: "Take a step towards your wellbeing with these yoga programs.",
    image: ProgramsImg1,
  },
  {
    id: 2,
    programName: "Advance Program",
    text: "Take a step towards your wellbeing with these yoga programs.",
    image: ProgramsImg2,
  },
  {
    id: 3,
    programName: "Training Program",
    text: "Take a step towards your wellbeing with these yoga programs.",
    image: ProgramsImg3,
  },
  {
    id: 4,
    programName: "Meditation Program",
    text: "Take a step towards your wellbeing with these yoga programs.",
    image: ProgramsImg4,
  },
];

const Programs = () => {
  return (
    <>
      {programs.map((program) => (
        <div
          key={program.id}
          className="max-w-md rounded-xl overflow-hidden border-none outline-none bg-gray-200 hover:scale-105 transition-all ease-in-out duration-500"
        >
          <img className="w-full" src={program.image} alt="Program Image" />
          <div className="px-6 py-4">
            <h3 className="font-medium text-2xl lg:text-3xl text-primary mb-2">
              {program.programName}
            </h3>
            <p className="text-gray-700 text-base">{program.text}</p>
            <p className="my-2 text-md md:text-lg underline underline-offset-2 text-primary">
              <Link
                to={`/programs/${program.programName
                  .toLowerCase()
                  .replace(/\s/g, "-")}`}
                className="flex items-center gap-2 uppercase"
              >
                Learn More <BsFillArrowRightCircleFill />
              </Link>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Programs;
