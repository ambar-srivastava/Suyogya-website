import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./Components";
import { Contact, HomePage, ProgramDetails } from "./Pages";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/programs/:programName" element={<ProgramDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
