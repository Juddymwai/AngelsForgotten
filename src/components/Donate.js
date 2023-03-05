import React from "react";
import "./style/Donate.css"

function Donate(){
  return(
    <div className="d-page">
      <div className="hero-image1">
        <div className="hero-title1">
          <h2>We Can Make A difference,<br/> Lets Start Now!</h2>
          <h2 style={{marginRight: "10vh"}}>Your donations will ensure<br/>our Angels get to <br/>learn comfortably</h2>
        </div>
      </div>
    
      <div className="donate">
        <h2>Donation Platform</h2>
        <div className="donate1">
          <div className="donate-text">
            <p className="don-image"><img src={require("./assests/pp.png")} alt=".." /><span><b>PayPal Email:</b> emunjugah@yahoo.com</span></p>
            <p className="don-image"><img src={require("./assests/pesa.png")} alt=".." /><span><b>M-pesa send money:</b> 0714811003</span> </p>
            <p><b>Name:</b> David Thairu</p>
            <p>For Enquires Reach us through</p>
           <p><img src={require("./assests/whatsapp.png")} alt=".."/> <span>WhatsApp -0714811003</span></p> 
          </div>

        </div>

      </div>
    </div>
  )
}

export default Donate;