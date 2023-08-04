import { Link } from "react-router-dom";
import { BiLogoFacebookSquare, BiLogoLinkedinSquare } from "react-icons/bi";
import { IoLogoYoutube } from "react-icons/io";
import { BsEnvelopeAtFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-stone-900 to-zinc-700">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase">
              Company
            </h2>
            <ul className="text-gray-400 font-medium">
              <li className="mb-4">
                <Link to="/" className=" hover:underline">
                  Home
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/" className="hover:underline">
                  About
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/" className="hover:underline">
                  Programs
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/" className="hover:underline">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase">
              Help center
            </h2>
            <ul className="text-gray-400 font-medium">
              <li className="mb-4">
                <Link to="/" className="hover:underline">
                  YouTube
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/" className="hover:underline">
                  LinkedIn
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/" className="hover:underline">
                  Facebook
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase">
              Legal
            </h2>
            <ul className="text-gray-400 font-medium">
              <li className="mb-4">
                <Link to="/" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/" className="hover:underline">
                  Licensing
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/" className="hover:underline">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-6 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            &copy; 2023 <Link to="/">Suyogya</Link>. All Rights Reserved.
          </span>
          <div className="flex mt-4 gap-x-5 md:mt-0">
            <Link to="/" className="text-gray-400 hover:text-white">
              <BiLogoFacebookSquare size={25} />
            </Link>
            <Link to="/" className="text-gray-400 hover:text-white">
              <BiLogoLinkedinSquare size={25} />
            </Link>
            <Link to="/" className="text-gray-400 hover:text-white">
              <IoLogoYoutube size={25} />
            </Link>
            <Link to="/" className="text-gray-400 hover:text-white">
              <BsEnvelopeAtFill size={25} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
