import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import logo from '../images/logofresh.svg'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#020d18] to-[#04121f] text-white pt-20 pb-10 px-6">
       
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* ================= Brand ================= */}
        <div>
          <div className="flex items-center gap-2 mb-6">
          <img src={logo} alt="" className="bg-white" />
          </div>

          <p className="text-gray-400 leading-relaxed mb-6">
            Phasellus ultricies aliquam volutpat ullamcorper laoreet neque,
            a lacinia curabitur lacinia mollis
          </p>

          <div className="flex gap-3">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 border border-gray-600 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition"
                >
                  <Icon />
                </div>
              )
            )}
          </div>
        </div>

        {/* ================= Quick Links ================= */}
        <div>
          <h3 className="text-xl font-semibold mb-6 relative inline-block">
            Quick Links
            <span className="block w-10 h-[2px] bg-orange-500 mt-2"></span>
          </h3>

          <ul className="space-y-4 text-gray-300">
            {[
              "About Us",
              "Our Gallery",
              "Our Blogs",
              "FAQ'S",
              "Contact Us",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 hover:text-orange-500 cursor-pointer"
              >
                <HiOutlineArrowNarrowRight />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ================= Our Menu ================= */}
        <div>
          <h3 className="text-xl font-semibold mb-6 relative inline-block">
            Our Menu
            <span className="block w-10 h-[2px] bg-orange-500 mt-2"></span>
          </h3>

          <ul className="space-y-4 text-gray-300">
            {[
              "Burger King",
              "Pizza king",
              "Fresh Food",
              "Vegetable",
              "Desserts",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 hover:text-orange-500 cursor-pointer"
              >
                <HiOutlineArrowNarrowRight />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ================= Contact ================= */}
        <div>
          <h3 className="text-xl font-semibold mb-6 relative inline-block">
            Contact Us
            <span className="block w-10 h-[2px] bg-orange-500 mt-2"></span>
          </h3>

          <p className="text-gray-400 mb-3">
            Monday – Friday: <span className="text-orange-500">8am – 4pm</span>
          </p>
          <p className="text-gray-400 mb-6">
            Saturday: <span className="text-orange-500">8am – 12am</span>
          </p>

          <div className="flex items-center bg-white rounded-md overflow-hidden mb-4">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-3 text-black outline-none"
            />
            <button className="bg-orange-500 px-5 py-3 text-white">
              ➜
            </button>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-300">
            <input type="checkbox" />
            <span>
              I agree to the{" "}
              <span className="underline cursor-pointer">
                Privacy Policy.
              </span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
