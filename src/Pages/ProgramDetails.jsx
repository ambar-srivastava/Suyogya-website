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

const ProgramDetails = () => {
  const beginnerYoga = [
    {
      id: 1,
      yogaName: "Sukhasana",
      text: "A simple and effective posture from Sadhguru to improve the oxygen levels in your blood without external apparatus.",
      image: Sukhasana,
    },
    {
      id: 2,
      yogaName: "Bhadrasana",
      text: "A simple and effective posture from Sadhguru to improve the oxygen levels in your blood without external apparatus.",
      image: Bhadrasana,
    },
    {
      id: 3,
      yogaName: "Vajrasana",
      text: "A simple and effective posture from Sadhguru to improve the oxygen levels in your blood without external apparatus.",
      image: Vajrasana,
    },
    {
      id: 4,
      yogaName: "Vrikshasana",
      text: "A simple and effective posture from Sadhguru to improve the oxygen levels in your blood without external apparatus.",
      image: Vrikshasana,
    },
  ];

  const advanceYoga = [
    {
      id: 1,
      yogaName: "Parvatasana",
      text: "A simple and effective posture from Sadhguru to improve the oxygen levels in your blood without external apparatus.",
      image: Parvatasana,
    },
    {
      id: 2,
      yogaName: "Vyaghrasana",
      text: "A simple and effective posture from Sadhguru to improve the oxygen levels in your blood without external apparatus.",
      image: Vyaghrasana,
    },
    {
      id: 3,
      yogaName: "Purvottanasana",
      text: "A simple and effective posture from Sadhguru to improve the oxygen levels in your blood without external apparatus.",
      image: Purvottanasana,
    },
    {
      id: 4,
      yogaName: "Ustrasana",
      text: "A simple and effective posture from Sadhguru to improve the oxygen levels in your blood without external apparatus.",
      image: Ustrasana,
    },
    {
      id: 5,
      yogaName: "Virabhadrasana",
      text: "A simple and effective posture from Sadhguru to improve the oxygen levels in your blood without external apparatus.",
      image: Virabhadrasana,
    },
  ];

  return (
    <>
      <ProgramsHeroPage />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 xl:gap-20 place-items-center md:p-20 p-10 bg-gradient-to-r from-stone-900 to-zinc-700">
        <YogaKriya beginnerYoga={beginnerYoga} advanceYoga={advanceYoga} />
      </div>
    </>
  );
};

export default ProgramDetails;
