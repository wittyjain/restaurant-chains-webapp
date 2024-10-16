import React from "react";
import { FiChevronRight } from "react-icons/fi";
import restaurantSection from "../../assets/section-restaurant.jpg";

export const Btn = ({ buttonName, className = "" }) => {
  return (
    <div>
      <button
        className={`flex items-center border-solid border-[1px] border-black  uppercase text-base tracking-wider ${className}`}
      >
        <FiChevronRight />
        {buttonName}
      </button>
    </div>
  );
};

const Restaurant = ({ title }) => {
  return (
    <div className=" py-16 flex flex-col">
      <div className="flex flex-col items-center">
        <h2 className="mb-5 uppercase tracking-[4px] font-normal">
          " {title} "
        </h2>
        <img src={restaurantSection} alt="" />
      </div>
      <div className="flex flex-col items-center my-8">
        <h3 className="text-xs tracking-[4px] font-normal uppercase mb-4">
          RESTAURANT CONCEPT
        </h3>
        <p className="font-bold text-xs tracking-widest mb-8 ">
          A restaurant where our heartbeats gather
        </p>
        <p className="font-normal leading-6 text-xs mx-6 ">
          We go beyond Japan to experience a range of food cultures around the
          world, Our restaurants add the essence of the HUGE philosophy to all
          the elements from the experience: the delicious authentic flavor and
          the atmosphere. We create 100% original restaurants with unique
          concept.
        </p>
        <Btn
          className="px-40 py-4 hover:bg-black hover:text-white duration-300 mt-12 gap-3"
          buttonName={"Restaurant"}
        />
      </div>
    </div>
  );
};

export default Restaurant;
