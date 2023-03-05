import React from "react";
import {NavLink} from 'react-router-dom'
import './style/Navbar.css'

function NavBar(){
  return(
    <div className="menu">
      {/* <ul> */}
        {/* <li><img src={require("./assests/logo.png")} alt="logo"/></li>
          <li><NavLink to="/" style={{textDecoration:"none"}}>Home</NavLink></li>
          <li><NavLink to="/aboutus" style={{textDecoration:"none"}}>About Us</NavLink></li>
          <li><NavLink to="/gallery" style={{textDecoration:"none"}}>Gallery</NavLink></li>
          <li style={{marginRight: 0+"vw"}}><NavLink to="/donate" style={{textDecoration:"none"}}>Donate</NavLink></li> */}

        <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div class="container px-4 px-lg-5">
                <div class="navbar-brand2"><img src={require("./assests/logo.png")} alt="logo"/></div>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto my-2 my-lg-0">
                    <div class="navbar-brand1" style={{ marginRight: 2+"vw" }}><img src={require("./assests/logo.png")} alt="logo"/></div>
                        <li class="nav-item"><NavLink class="nav-link" to="/">Home</NavLink></li>
                        <li class="nav-item"><NavLink class="nav-link" to="/aboutus">About Us</NavLink></li>
                        <li class="nav-item"><NavLink class="nav-link" to="/gallery">Gallery</NavLink></li>
                        <li class="nav-item"><NavLink class="nav-link" to="/donate">Donate</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
      {/* </ul> */}
    </div>


    



   
  )
}

export default NavBar;