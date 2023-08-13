import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./Components";
import { Contact, HomePage, PrivacyPolicies, ProgramDetails } from "./Pages";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacypolicies" element={<PrivacyPolicies />} />
        <Route path="/programs/:programType" element={<ProgramDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
