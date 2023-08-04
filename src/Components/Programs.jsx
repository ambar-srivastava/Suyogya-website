import { Link } from "react-router-dom";
import programImg from "../assets/Supriya.jpeg";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const programs = [
  {
    id: 1,
    programName: "Beginner Program",
    text: "Take a step towards your wellbeing with these yoga programs.",
    image: programImg,
  },
  {
    id: 2,
    programName: "Advanced Program",
    text: "Take a step towards your wellbeing with these yoga programs.",
    image: programImg,
  },
  {
    id: 3,
    programName: "Training Program",
    text: "Take a step towards your wellbeing with these yoga programs.",
    image: programImg,
  },
  {
    id: 4,
    programName: "Meditation Program",
    text: "Take a step towards your wellbeing with these yoga programs.",
    image: programImg,
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
