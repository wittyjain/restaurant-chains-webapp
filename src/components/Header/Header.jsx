import React from "react";
import hugevid from '../../assets/huge-vid.mp4'
import NavBar from "../NavBar/NavBar";

function Header() {
    return(
        <div>
            <NavBar />
            <video autoPlay loop muted><source src={hugevid} /></video>
        </div>
    )
}

export default Header