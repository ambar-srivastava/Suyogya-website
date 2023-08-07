import contactPageImg from "../assets/Supriya.jpeg";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { BsEnvelopeAtFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoLogoYoutube } from "react-icons/io";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className=" h-20 bg-black/50" />
      <div className="max-w-[1240px] m-auto px-2 pt-4 w-full pb-20">
        <p className="text-xl tracking-widest uppercase text-primary">
          Contact
        </p>
        <h2 className="py-3 font-semibold text-gray-600">Get In Touch with us</h2>
        <div className=" grid lg:grid-cols-5 gap-24">
          {/* left */}
          <div className=" col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-slate-300 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div className=" relative w-full hover:scale-105 ease-in-out duration-500">
                <img
                  className="rounded-xl w-full shadow-lg shadow-slate-300 hover:scale-105 ease-in-out duration-500"
                  src={contactPageImg}
                  alt="Image of Contact Page"
                />
                <div className="rounded-xl w-full h-full absolute bg-black/50 top-0" />
              </div>
              <div>
                <h2 className="py-2 pt-5 text-3xl font-semibold tracking-tight text-primary">
                  Suyogya
                </h2>
                <p className=" text-gray-700">Yoga-Centre</p>
                <p className="py-4 text-gray-500">
                  Take a step towards your wellbeing with these yoga programs,
                  designed by Supriya and suitable for beginners.
                </p>
              </div>
              <div>
                <p className=" uppercase pt-8 text-gray-800">Connect with me</p>
                <div className="flex items-center justify-between py-4">
                  <Link
                    to="https://www.linkedin.com/in/suyogya-yoga-center-834882285"
                    target="_blank"
                  >
                    <div className="rounded-full shadow-lg shadow-slate-300 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaLinkedinIn className=" text-primary" size={20} />
                    </div>
                  </Link>
                  <Link
                    target="_blank"
                    to="https://www.facebook.com/trainwithsuyogya"
                  >
                    <div className="rounded-full shadow-lg shadow-slate-300 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaFacebookF className=" text-primary" size={20} />
                    </div>
                  </Link>
                  <Link
                    target="_blank"
                    to="https://www.youtube.com/@Trainwithsuyogya"
                  >
                    <div className="rounded-full shadow-lg shadow-slate-300 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                      <IoLogoYoutube className=" text-primary" size={20} />
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div className="rounded-full shadow-lg shadow-slate-300 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                      <BsEnvelopeAtFill className=" text-primary" size={20} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-slate-300 rounded-xl lg:p-4">
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
      </div>
    </div>
  );
};

export default Contact;
