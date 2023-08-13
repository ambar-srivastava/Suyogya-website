import { ProgramsHeroPage, YogaKriya } from "../Components";
import Sukhasana from "../assets/Sukhasana.jpg";
import Bhadrasana from "../assets/Bhadrasana.jpg";
import Vajrasana from "../assets/Vajrasana.png";
import Vrikshasana from "../assets/Vrikshasana.jpg";
import Parvatasana from "../assets/Parvatasana.jpg";
import Vyaghrasana from "../assets/Vyaghrasana.jpg";
import Purvottanasana from "../assets/Purvottanasana.jpg";
import Ustrasana from "../assets/Ustrasana.jpg";
import Virabhadrasana from "../assets/Virabhadrasana.jpg";
import { useParams } from "react-router-dom";

const ProgramDetails = () => {
  const { programType } = useParams();

  const yogaDetails = [
    {
      id: 1,
      yogaName: "Sukhasana",
      text: "A simple and effective posture from Sadhguru to improve the oxygen levels in your blood without external apparatus.",
      image: Sukhasana,
      programType: "beginner-program",
    },
    {
      id: 2,
      yogaName: "Bhadrasana",
      text: "A simple and effective posture from Sadhguru to improve the oxygen levels in your blood without external apparatus.",
      image: Bhadrasana,
      programType: "beginner-program",
    },
    {
      id: 3,
      yogaName: "Vajrasana",
      text: "A simple and effective posture from Sadhguru to improve the oxygen levels in your blood without external apparatus.",
      image: Vajrasana,
      programType: "beginner-program",
    },
    {
      id: 4,
      yogaName: "Vrikshasana",
      text: "A simple and effective posture from Sadhguru to improve the oxygen levels in your blood without external apparatus.",
      image: Vrikshasana,
      programType: "beginner-program",
    },
    {
      id: 5,
      yogaName: "Parvatasana",
      text: "A simple and effective posture from Sadhguru to improve the oxygen levels in your blood without external apparatus.",
      image: Parvatasana,
      programType: "advance-program",
    },
    {
      id: 6,
      yogaName: "Vyaghrasana",
      text: "A simple and effective posture from Sadhguru to improve the oxygen levels in your blood without external apparatus.",
      image: Vyaghrasana,
      programType: "advance-program",
    },
    {
      id: 7,
      yogaName: "Purvottanasana",
      text: "A simple and effective posture from Sadhguru to improve the oxygen levels in your blood without external apparatus.",
      image: Purvottanasana,
      programType: "advance-program",
    },
    {
      id: 8,
      yogaName: "Ustrasana",
      text: "A simple and effective posture from Sadhguru to improve the oxygen levels in your blood without external apparatus.",
      image: Ustrasana,
      programType: "advance-program",
    },
    {
      id: 9,
      yogaName: "Virabhadrasana",
      text: "A simple and effective posture from Sadhguru to improve the oxygen levels in your blood without external apparatus.",
      image: Virabhadrasana,
      programType: "advance-program",
    },
  ];

  const filteredYogaDetails = yogaDetails.filter(
    (yoga) => yoga.programType === programType
  );

  return (
    <>
      <ProgramsHeroPage yogaDetails={filteredYogaDetails} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 xl:gap-20 place-items-center md:p-20 p-10 bg-gradient-to-r from-stone-900 to-zinc-700">
        <YogaKriya yogaDetails={filteredYogaDetails} />
      </div>
    </>
  );
};

export default ProgramDetails;
