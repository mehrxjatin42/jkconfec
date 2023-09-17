import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import MainBg from "../assets/mainbg.png";
import Footer from "./Footer";
import transition from "../../transition";
const Home = () => {
  return (
    <>
      <div className="  w-[100%] h-[100vh]">
        <Navbar />
        <motion.div
          animate={{ y: 50 }}
          transition={{ ease: "easeOut", duration: 2.5 }}
        >
          <div className="mb-[-15] flex px-10 mt-[-100px] items-center justify-between  ">
            {/* titles div  */}
            <div>
              <span className="text-md rounded-2xl text-[#F55556]  font-medium bg-[#f8b5b5] p-2">
                More than Jusk a Cake!
              </span>
              <h1 className="pt-6 text-8xl font-semibold">
                Supreme <br /> <span className="text-[#FF0D64]">Cakes</span> in
                the <br />
                town!{" "}
              </h1>
              <p className="pt-6 text-[#545454] text-base font-semibold">
                Indulge in freshly baked cakes delivered to your doorstep every
                morning for your family without leaving your home.
              </p>
            </div>
            {/* bg img div  */}
            {/* <div>
              <img className="pl-20" src={MainBg} alt="mainimg" />
            </div> */}
            <motion.div
              className="pl-20"
              initial={{ y: -20 }} // Initial position (above)
              animate={{ y: 20, transition: { yoyo: Infinity, duration: 2 } }} // Animation properties
            >
              <img src={MainBg} alt="mainimg" />
            </motion.div>
          </div>
          {/* buttons div  */}
          <div className="pl-10 absolute top-[525px] flex gap-2">
            <button class="btn-23 mr-6 py-4 px-8 ">
              <span class="text">Order Now </span>
              <span aria-hidden="" class="marquee">
                Order Now
              </span>
            </button>
            <button class="btn-23 mr-6 py-4 px-8 ">
              <span class="text">Takeaway! </span>
              <span aria-hidden="" class="marquee">
                Takeaway!
              </span>
            </button>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default transition(Home);
