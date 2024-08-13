import React from "react";
import hugevid from "../../assets/huge-vid.mp4";
// import NavBar from "../NavBar/NavBar";
// import { restaurantimg1 } from "../../assets/restaurant-1.jpg";
// import { restaurantimg2 } from "../../assets/restaurant-2.jpg";
// import { restaurantimg3 } from "../../assets/restaurant-3.jpg";

function Header() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* <NavBar /> */}
      <video
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={hugevid} />
      </video>
    </div>
  );
}

export default Header;
