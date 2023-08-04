import { Link } from "react-router-dom";
import yogaImage from "../assets/cardImg.jpg";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const yogaKriya = [
  {
    id: 1,
    yogaName: "Sashtanga",
    text: "A simple and effective posture from Sadhguru to improve the oxygen levels in your blood without external apparatus.",
    image: yogaImage,
  },
  {
    id: 2,
    yogaName: "Simha Kriya",
    text: "A simple and effective posture from Sadhguru to improve the oxygen levels in your blood without external apparatus.",
    image: yogaImage,
  },
  {
    id: 3,
    yogaName: "Hatha Yoga",
    text: "A simple and effective posture from Sadhguru to improve the oxygen levels in your blood without external apparatus.",
    image: yogaImage,
  },
  {
    id: 4,
    yogaName: "Aumkar Meditation",
    text: "A simple and effective posture from Sadhguru to improve the oxygen levels in your blood without external apparatus.",
    image: yogaImage,
  },
  {
    id: 5,
    yogaName: "Uyirnokkam",
    text: "A simple and effective posture from Sadhguru to improve the oxygen levels in your blood without external apparatus.",
    image: yogaImage,
  },
  {
    id: 6,
    yogaName: "5 Minute Yoga Tools",
    text: "A simple and effective posture from Sadhguru to improve the oxygen levels in your blood without external apparatus.",
    image: yogaImage,
  },
];

const YogaKriya = () => {
  return (
    <>
      {yogaKriya.map((yoga) => (
        <div
          key={yoga.id}
          className="max-w-md rounded-xl overflow-hidden border-none outline-none bg-gray-200 hover:scale-105 transition-all ease-in-out duration-500"
        >
          <img className="w-full" src={yoga.image} alt="yoga Image" />
          <div className="px-6 py-4">
            <h3 className="font-medium text-2xl lg:text-3xl text-primary mb-2">
              {yoga.yogaName}
            </h3>
            <p className="text-gray-700 text-base">{yoga.text}</p>
            <p className="my-2 text-md md:text-lg underline underline-offset-2 text-primary">
              <Link
                to={`/programs/${yoga.yogaName
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

export default YogaKriya;
