import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";
import transition from "../../transition";
import Card from "./Card";
import Cake from "../assets/cake1.jpg";
import Candies from "../assets/candy1.jpg";
import Cookies from "../assets/Cookie1.jpg";
import Pastry from "../assets/Pastry1.jpg";

const Menu = () => {
  const data = [
    {
      id: 1,
      name: "CAKES",
      price: 499,
      image: Cake,
    },
    {
      id: 2,
      name: "PASTRIES",
      price: 50,
      image: Pastry,
    },
    {
      id: 3,
      name: "CANDIES",
      price: 30,
      image: Candies,
    },
    {
      id: 4,
      name: "COOKIES",
      price: 150,
      image: Cookies,
    },
  ];
  return (
    <div>
      <Navbar />
      <motion.div
        animate={{ y: 10 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <div>
          <h3 className="text-2xl text-[#F55556] text-center">What we Serve</h3>
          <div className=" mt-4 flex flex-col items-center justify-center">
            <h1 className="text-[60px]  font-bold pl-1 bg-clip-text text-transparent bg-gradient-to-r from-[#ee6052]  to-[#ff910f]">
              FINEST CAKES IN THE CITY
            </h1>
            <h2 className="text-[50px] mt-[-10px] font-bold pl-1 bg-clip-text text-transparent bg-gradient-to-r to-[#ee6052]  from-[#ff910f]">
              DELIVERED TO YOUR HOME
            </h2>
          </div>
        </div>

        <div className="p-10 flex gap-10 items-center justify-center">
          {data.map((cake) => (
            <Card
              key={cake.id}
              name={cake.name}
              price={cake.price}
              image={cake.image}
            />
          ))}
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default transition(Menu);
