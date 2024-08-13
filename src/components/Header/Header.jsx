import React from "react";
import hugevid from "../../assets/huge-vid.mp4";
import NavBar from "../NavBar/NavBar";
import { restaurantimg1 } from "../../assets/restaurant-1";
import { restaurantimg2 } from "../../assets/restaurant-2";
import { restaurantimg3 } from "../../assets/restaurant-3";

function Header() {
  return (
    <div>
      <video autoPlay loop muted>
        <source src={hugevid} />
      </video>
    </div>
  );
}

export default Header;
