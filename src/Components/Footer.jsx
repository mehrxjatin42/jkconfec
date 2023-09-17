import React from "react";
import Logo from "../assets/logo.png";
import IG from "../assets/insta.png";
import WAPP from "../assets/wapp.png";
import FB from "../assets/fb.png";
const Footer = () => {
  return (
    <div>
      <hr />
      <div className="flex gap-4 justify-between px-10 py-6">
        <div className="  ">
          <div className="max-w-[800px]">
            <img className="inline" src={Logo} alt="logo" />
            <span className="text-xl font-bold pl-1 bg-clip-text text-transparent bg-gradient-to-r from-[#ee6052]  to-[#ff910f]">
              JK Confectionary™
            </span>
            <p className="px-2 py-2 text-[#5d5c5c] text-md font-medium">
              Fast delivery, which is active all <br /> over the world, serves
              with <br /> many transportation vehicles.
            </p>
            <div className="flex gap-2 pl-2">
              <img src={IG} className="w-[30px] h-[30px]" alt="instagram " />
              <img src={FB} className="w-[30px] h-[30px]" alt="facebook" />
              <img src={WAPP} className="w-[30px] h-[30px]" alt="whatsapp" />
            </div>
          </div>
        </div>

        {/* company div  */}
        <div className="">
          <p className="font-bold pb-2 ">Company</p>
          <ul className="text-[#5d5c5c] text-md font-medium">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">All Products</a>
            </li>
            <li>
              <a href="#">Locations Map</a>
            </li>
          </ul>
        </div>
        {/* services div  */}
        <div className="">
          <p className="font-bold pb-2">Services</p>
          <ul className="text-[#5d5c5c] text-md font-medium">
            <li>
              <a href="#">Order Tracking</a>
            </li>
            <li>
              <a href="#">Wish List</a>
            </li>
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
        </div>
        {/* git in touch div  */}
        <div className="">
          <p className="font-bold pb-2">Get in Touch</p>
          <p className="text-[#5d5c5c] text-md font-medium">
            Subscribe to our weekly <br /> Newsletter and receive <br /> updates{" "}
            via email.
          </p>
        </div>
      </div>
      <div className="flex gap-20 justify-between px-10 py-2 text-[#5d5c5c] font-medium ">
        <p className="">All Rights Reserved @ JK Confectionary 2023</p>
        <div className="flex gap-6">
          <p className="">Terms & Conditions</p>
          <p className="">Privacy & Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
