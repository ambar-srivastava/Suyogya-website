import { useState } from "react";
import { AiFillMail, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="h-20 w-full fixed bg-black/60 backdrop-blur-xl shadow-md z-10">
      <div className="flex justify-between items-center w-full h-full px-5 lg:px-16">
        <Link to="/">
          <img src={logo} width="150" alt="Logo" />
        </Link>
        <div>
          <ul className=" hidden md:flex lg:gap-20 md:gap-10 items-center">
            <Link to="/">
              <li className="text-md uppercase text-white hover:text-gray-400">
                Home
              </li>
            </Link>
            <Link to="/#about">
              <li className="text-md uppercase text-white hover:text-gray-400">
                About
              </li>
            </Link>
            <Link to="/#skills">
              <li className="text-md uppercase text-white hover:text-gray-400">
                Programs
              </li>
            </Link>
            <Link to="/#projects">
              <li className="text-md uppercase text-white hover:text-gray-400">
                Testimonial
              </li>
            </Link>
            <Link to="/#contact">
              <li className="text-md uppercase bg-primary border-none outline-none px-6 py-3 text-white hover:bg-[#1f8ea4] transition-all ease-in">
                Contact Us
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} className="text-primary" />
          </div>
        </div>
      </div>

      <div
        className={
          nav
            ? "md:hidden fixed top-0 left-0 w-full h-screen bg-black/30 ease-in-out duration-500"
            : ""
        }
      >
        <div
          className={
            nav
              ? " fixed right-0 top-0 w-[75%] sm:w[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-5 ease-in-out duration-500"
              : "fixed right-[-200%] top-0 p-5 ease-in-out duration-500"
          }
        >
          <div>
            <div className="flex w-full h-auto items-center justify-between">
              <Link to="/">
                <img src={logo} width="110" alt="/" />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-md shadow-gray-300 p-3 cursor-pointer"
              >
                <AiOutlineClose className=" text-primary" size={20} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&rsquo;s build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col justify-between min-h-[70vh]">
            <ul className=" uppercase">
              <Link to="/">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-primary"
                >
                  Home
                </li>
              </Link>
              <Link to="/#about">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-primary"
                >
                  About
                </li>
              </Link>
              <Link to="/#skills">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-primary"
                >
                  Services
                </li>
              </Link>
              <Link to="/#projects">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-primary"
                >
                  Testimonial
                </li>
              </Link>
              <Link to="/#contact">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-primary"
                >
                  Contact Us
                </li>
              </Link>
            </ul>
            <div className="pb-2">
              <p className=" uppercase tracking-widest text-[#5651e5]">
                Let&rsquo;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/in/ambar-srivastava-09b1431bb/"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn className="text-[#5651e5]" />
                  </div>
                </Link>
                <Link target="_blank" to="https://github.com/ambar-srivastava">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub className="text-[#5651e5]" />
                  </div>
                </Link>
                <Link target="_blank" to="mailto:ambar0027coc@gmail.com">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiFillMail className="text-[#5651e5]" />
                  </div>
                </Link>
                <Link to="tel:7268003088">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsFillPersonLinesFill className="text-[#5651e5]" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
