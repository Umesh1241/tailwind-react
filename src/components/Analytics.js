import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Laptop} alt="/" className="w-[500px] mx-auto my-4"/>
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:3xl text-2xl font-bold py-2">Manage Data Analytics Centarally</h1>
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
            sequi quos repudiandae repellendus harum asperiores voluptatibus
            excepturi delectus sit dicta. Ut, alias. In dicta ullam dolores
            harum repudiandae? Quae, dolorum.
          </p>
          <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 md:mx-0 text-[#00df9a]'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
