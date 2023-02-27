import React from "react";
import "./style/Footer.css"

import { library  } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume, faEnvelope, faMessage, faLocationDot } from '@fortawesome/free-solid-svg-icons'
// import { faFacebook } from '@fortawesome/free-solid-svg-icons'



library.add(faPhoneVolume, faEnvelope, faMessage, faLocationDot )


export default function Footer() {


  return (
    <footer>
      <h2>Contact Us</h2>
      <div className="icons">
        <div className="icons1">
          <p><FontAwesomeIcon icon="fa-solid fa-phone-volume" /> <span>+254714811003</span></p>
          <p><FontAwesomeIcon icon="fa-solid fa-message" /> <span>+254714811003</span></p>
          <p><FontAwesomeIcon icon="fa-solid fa-envelope" /> <span>elburgonangels@gmail.com</span></p>
          <p><FontAwesomeIcon icon="fa-solid fa-location-dot" /> <span>Elburgon, Nakuru</span></p>
        </div>
        <div className="v-line"></div>
        <div>
          <p><img src={require("./assests/whatsapp.png")} alt="..."/> WhatsApp</p>
          <p><img src={require("./assests/linkedin.png")}  alt="..."/> LinkedIn</p>
          <p><img src={require("./assests/instagram.png")}  alt="..."/> Instagram</p>
          <p><img src={require("./assests/whatsapp.png")}  alt="..."/> Facebook</p>
          <p></p>
          <p></p>
        </div>
      </div>
      <p style={{textAlign: "center", marginTop: 2+"vh"}}>Copyright &copy; 2023</p>
    </footer>
  )
}



