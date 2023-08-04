import {
  Hero,
  ProgramsPanel,
  ShowcaseVideo,
  Testimonials,
} from "../Components";

const HomePage = () => {
  return (
    <div className="min-h-full w-full">
      <Hero />
      <ShowcaseVideo />
      <ProgramsPanel />
      <Testimonials />
    </div>
  );
};

export default HomePage;
