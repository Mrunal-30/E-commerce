import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        <div className="relative top-[-20px]">
          <img src={assets.logo} alt="Logo" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            beatae ratione incidunt similique enim adipisci. Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Qui pariatur maxime labore
            eligendi, cumque nihil?
          </p>  
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 832-536-4860</li>
            <li>abc321@gmail.com</li>
          </ul>
        </div>

      </div>
      <div > 
<hr />
<p className="py-5 text-sm text-center">Copyright 2025@ Mrunal Chalakh -All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
