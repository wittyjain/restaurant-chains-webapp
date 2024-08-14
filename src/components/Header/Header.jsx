import React, { useEffect, useState } from "react";
import hugevid from "../../assets/huge-vid.mp4";
import NavBar from "../NavBar/NavBar";
import restaurantimg1 from "../../assets/restaurant-1.jpg";
import restaurantimg2 from "../../assets/restaurant-2.jpg";
import restaurantimg3 from "../../assets/restaurant-3.jpg";
import { Fade } from "react-slideshow-image";

function Header() {
  const heroImages = [restaurantimg1, restaurantimg2, restaurantimg3];
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setImageIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(slideInterval);
  }, [heroImages.length]);
  console.log(imageIndex);

  return (
    <div className="relative h-screen overflow-hidden ]">
      {/* <NavBar /> */}
      <video
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-full object-cover z-0 hidden md:block"
      >
        <source src={hugevid} />
      </video>
      <Fade arrows={false} easing={"ease"}>
        <img
          src={heroImages[imageIndex]}
          alt=""
          className="w-full h-full object-cover fixed"
        />
      </Fade>
    </div>
  );
}

export default Header;
