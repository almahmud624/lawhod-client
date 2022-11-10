import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import useDynamicTitle from "../../Hook/useDynamicTitle";

const Footer = () => {
  // title show dynamically
  useDynamicTitle("Footer");
  return (
    <div>
      <footer class="relative bg-gray-900 px-4 pt-14 border-t-2 border-[#8A5949]">
        <div class="absolute -top-10 left-1/2 h-16 w-16 -translate-x-1/2 rounded-xl border-4 border-[#8A5949] bg-white p-2">
          <img class="h-full object-contain" src={logo} alt="" />
        </div>
        <div>
          <p className="font-light text-center text-lg text-white">
            400 University Ave., Suite 2001 Toronto, ON M5G 1S5 <br /> T:
            000-010-0001 <br />
            Fax: 000-010-001 <br /> Email: demo@lawhod.la
          </p>
        </div>
        <div className="">
          <h4 className="capitalize text-center text-white text-3xl pb-3">
            Book for a consultation
          </h4>
          <hr className="max-w-sm mx-auto border-gray-500" />
          <div className="text-center mt-8">
            <Link className="bg-white text-gray-700 px-4 py-2 font-semibold text-lg inline-block ">
              Contact Us Now
            </Link>
          </div>
        </div>
        <p class="py-10 text-center text-gray-300">
          © 2022 lawhod | All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
