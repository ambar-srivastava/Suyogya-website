import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsEnvelopeAtFill } from "react-icons/bs";
import logo from "../assets/Logo.svg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { IoLogoYoutube } from "react-icons/io";
import { BiLogoFacebookSquare, BiLogoLinkedinSquare } from "react-icons/bi";
const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Function to handle smooth scroll on home page
  const handleScrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to navigate to home page and scroll to desired section
  const handleGoToHomePage = () => {
    navigate("/", {
      state: {
        scrollTarget: `${"home" || "about" || "program" || "testimonials"}`,
      },
    });
  };

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="h-20 w-full fixed bg-black/60 backdrop-blur-xl shadow-md z-10">
      <div className="flex justify-between items-center w-full h-full px-5 lg:px-16">
        <NavLink to="/">
          <img src={logo} width="150" alt="Logo" />
        </NavLink>
        <div>
          <ul className=" hidden md:flex lg:gap-20 md:gap-10 items-center">
            <a
              onClick={
                location.pathname === "/"
                  ? () => handleScrollToId("testimonials")
                  : handleGoToHomePage
              }
              href={location.pathname === "/" ? "#home" : ""}
            >
              <li className="text-md uppercase text-white hover:text-gray-400">
                Home
              </li>
            </a>
            <a
              onClick={
                location.pathname === "/"
                  ? () => handleScrollToId("about")
                  : handleGoToHomePage
              }
              href={location.pathname === "/" ? "#about" : ""}
            >
              <li className="text-md uppercase text-white hover:text-gray-400">
                About
              </li>
            </a>
            <a
              onClick={
                location.pathname === "/"
                  ? () => handleScrollToId("testimonials")
                  : handleGoToHomePage
              }
              href={location.pathname === "/" ? "#program" : ""}
            >
              <li className="text-md uppercase text-white hover:text-gray-400">
                Programs
              </li>
            </a>
            <a
              onClick={
                location.pathname === "/"
                  ? () => handleScrollToId("testimonials")
                  : handleGoToHomePage
              }
              href={location.pathname === "/" ? "#testimonials" : ""}
            >
              <li className="text-md uppercase text-white hover:text-gray-400">
                Testimonial
              </li>
            </a>
            <NavLink to="/contact">
              <li className="text-md uppercase bg-primary border-none outline-none px-6 py-3 text-white hover:bg-[#1f8ea4] transition-all ease-in">
                Contact Us
              </li>
            </NavLink>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} className="text-primary" />
          </div>
        </div>
      </div>

      <div
        className={
          nav
            ? "md:hidden fixed top-0 right-0 w-full h-screen bg-black/70 ease-in-out duration-500"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed right-0 top-0 w-[75%] sm:w[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-5 ease-in-out duration-500"
              : "fixed right-[-200%] top-0 p-5 ease-in-out duration-500 h-screen w-[75%] sm:w[60%] md:w-[45%]"
          }
        >
          <div>
            <div className="flex w-full h-auto items-center justify-between">
              <a
                onClick={
                  location.pathname === "/"
                    ? () => handleScrollToId("testimonials")
                    : handleGoToHomePage
                }
                href={location.pathname === "/" ? "#home" : ""}
              >
                <img
                  onClick={() => setNav(false)}
                  src={logo}
                  width="110"
                  alt="/"
                />
              </a>
              <div
                onClick={handleNav}
                className="rounded-full shadow-md shadow-slate-300 p-3 cursor-pointer"
              >
                <AiOutlineClose className=" text-primary" size={20} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Taking Yoga Beyond The Limit Reach Your New Potential
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col justify-between min-h-[70vh]">
            <ul className=" uppercase">
              <a
                onClick={
                  location.pathname === "/"
                    ? () => handleScrollToId("testimonials")
                    : handleGoToHomePage
                }
                href={location.pathname === "/" ? "#home" : ""}
              >
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-primary"
                >
                  Home
                </li>
              </a>
              <a
                onClick={
                  location.pathname === "/"
                    ? () => handleScrollToId("testimonials")
                    : handleGoToHomePage
                }
                href={location.pathname === "/" ? "#about" : ""}
              >
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-primary"
                >
                  About
                </li>
              </a>
              <a
                onClick={
                  location.pathname === "/"
                    ? () => handleScrollToId("testimonials")
                    : handleGoToHomePage
                }
                href={location.pathname === "/" ? "#program" : ""}
              >
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-primary"
                >
                  Programs
                </li>
              </a>
              <a
                onClick={
                  location.pathname === "/"
                    ? () => handleScrollToId("testimonials")
                    : handleGoToHomePage
                }
                href={location.pathname === "/" ? "#testimonials" : ""}
              >
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-primary"
                >
                  Testimonials
                </li>
              </a>
              <NavLink to="/contact">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-primary"
                >
                  Contact Us
                </li>
              </NavLink>
            </ul>
            <div className="pb-2">
              <p className=" uppercase tracking-widest text-primary">
                Let&rsquo;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <NavLink
                  onClick={() => setNav(false)}
                  to="https://www.facebook.com/trainwithsuyogya"
                  target="_blank"
                >
                  <div className="rounded-full shadow-lg shadow-slate-300 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BiLogoFacebookSquare className="text-primary" size={20} />
                  </div>
                </NavLink>
                <NavLink
                  onClick={() => setNav(false)}
                  to="https://www.linkedin.com/in/suyogya-yoga-center-834882285"
                  target="_blank"
                >
                  <div className="rounded-full shadow-lg shadow-slate-300 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BiLogoLinkedinSquare className="text-primary" size={20} />
                  </div>
                </NavLink>
                <NavLink
                  onClick={() => setNav(false)}
                  to="https://www.youtube.com/@Trainwithsuyogya"
                  target="_blank"
                >
                  <div className="rounded-full shadow-lg shadow-slate-300 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <IoLogoYoutube className="text-primary" size={20} />
                  </div>
                </NavLink>
                <NavLink onClick={() => setNav(false)} to="/contact">
                  <div className="rounded-full shadow-lg shadow-slate-300 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsEnvelopeAtFill className="text-primary" size={20} />
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
