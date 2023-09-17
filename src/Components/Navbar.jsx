import React from "react";
import Logo from "../assets/logo.png";
import Menu from "./Menu";
import Heart from "../assets/heart.svg";
import User from "../assets/user.svg";
import Cart from "../assets/cart.svg";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between px-10 py-8 ">
        <div className="flex items-center ">
          <img src={Logo} alt="logo" className="w-[35px] h-[35px]" />
          <h3 className="text-xl font-bold pl-1 bg-clip-text text-transparent bg-gradient-to-r from-[#ee6052]  to-[#ff910f]">
            JK Confectionary™
          </h3>
        </div>
        <div className="rounded-md shadow-md px-8 py-3 transform hover:scale-105 transition-transform">
          <ul className="flex gap-6 font-bold text-[17px] text-[#4D4D4D]">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/Menu"}>Menu</NavLink>
            </li>
            <li>
              <NavLink to={"/Cakes"}>Cakes</NavLink>
            </li>
            <li>
              <NavLink to={"/Customize"}>Customize</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <div className="h-[30px] ">
            <div className="flex gap-3">
              <img className=" w-[20px] cursor-pointer" src={Heart} alt="" />
              <img className=" w-[20px] cursor-pointer" src={User} alt="" />
              <img className=" w-[20px] cursor-pointer" src={Cart} alt="" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
