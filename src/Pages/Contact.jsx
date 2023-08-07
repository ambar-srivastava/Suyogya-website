// import contactImg from "../public/assets/contact.jpg";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { HiChevronDoubleUp } from "react-icons/hi";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4 font-semibold">Get In Touch</h2>
        <div className=" grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className=" col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl w-full shadow-lg shadow-gray-400 hover:scale-105 ease-in duration-300"
                  src="/"
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2 pt-10 font-semibold tracking-tight text-[#5651e5]">
                  Ambar Srivastava
                </h2>
                <p className=" text-gray-700">Front-End Developer</p>
                <p className="py-4 text-gray-500">
                  I am available for freelance or full-time positions. Contact
                  me and let&rsquo;s talk.
                </p>
              </div>
              <div>
                <p className=" uppercase pt-8 text-gray-800">Connect with me</p>
                <div className="flex items-center justify-between py-4">
                  <Link
                    to="https://www.linkedin.com/in/ambar-srivastava-09b1431bb/"
                    target="_blank"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaLinkedinIn className="text-[#5651e5]" size={18} />
                    </div>
                  </Link>
                  <Link
                    target="_blank"
                    to="https://github.com/ambar-srivastava"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaGithub className="text-[#5651e5]" size={18} />
                    </div>
                  </Link>
                  <Link target="_blank" to="mailto:ambar0027coc@gmail.com">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                      <AiFillMail className="text-[#5651e5]" size={18} />
                    </div>
                  </Link>
                  <Link to="tel:7268003088">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                      <BsFillPersonLinesFill
                        className="text-[#5651e5]"
                        size={18}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className=" p-4">
              {/* <form method="POST" action="https://formspree.io/f/moqzvjeq"> */}
              <form method="POST" action="https://usebasin.com/f/fb5fa0b7ed13">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm text-gray-500 py-2">
                      Full Name
                    </label>
                    <input
                      name="Full Name"
                      className=" border-2 outline-0 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm text-gray-500 py-2">
                      Phone Number
                    </label>
                    <input
                      name="Phone Number"
                      className=" border-2 outline-0 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm text-gray-500 py-2">
                    Email address
                  </label>
                  <input
                    name="Email ID"
                    className=" border-2 outline-0 rounded-lg p-3 flex border-gray-300"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm text-gray-500 py-2">
                    Subject
                  </label>
                  <input
                    name="Subject"
                    className=" border-2 outline-0 rounded-lg p-3 flex border-gray-300"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm text-gray-500 py-2">
                    Message
                  </label>
                  <textarea
                    name="Message"
                    className=" border-2 outline-0 rounded-lg p-3 border-gray-300"
                    rows="10"
                  ></textarea>
                </div>
                <button className="w-full mt-2 p-4 text-white rounded-lg tracking-widest font-semibold">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-16">
          <Link to="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiChevronDoubleUp className="text-[#5651e5]" size={20} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
