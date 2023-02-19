
import React from "react";
import './style/Landing.css'

function LandingPage(){
  return(
    <div>
      <div className="hero">
        {/* <div className="color"></div> */}
        <div className="hero-image">
          <div className="hero-title">
            <div className="h-line" style={{ marginBottom: 2+"vh" }}></div>
            <h2 style={{ marginBottom: 2+"vh" }}>BY FAITH AND HOPE ACADEMY</h2>
            <h4>Where Every Child Matters</h4>
            <div className="h-line" style={{ width: 15+"vw", marginTop: 2+"vh"  }}></div>
          </div>
        </div>
      </div>

      <div className="about-us">
        <div>
          <img src={require("./assests/about.png")} alt="about-us" />
        </div>
        <div className="about">
          <h2>About Us</h2>
        </div>
        <div className="content">
          <h2>About <span>Us</span></h2>
          <p>We are a Non-profit Organization. <br/>
            We envision a world where no child is deprived of the basic necessities required for a stable happy, productive and rewarding life...</p>
            <button>Read More</button>
        </div>
      </div>

      <div className="what-we-do">
        <h2><span>What</span> We DO</h2>
        <p>We are committed to provide for the needs of all children</p>
        <div className="cards card-flex">
          <div className="card text-center mb-3" style={{width: 18+"rem"}}>
            <div className="card-body dets">
              <img src={require("./assests/ambulance.png")} alt="..."  className="card-title" />
              <p className="card-text">Medical services</p>
            </div>
          </div>
          <div className="card text-center mb-3" style={{width: 18+"rem"}}>
            <div className="card-body dets">
              <img src={require("./assests/book.png")} alt="..." className="card-title" />
              <p className="card-text">Education</p>
            </div>
          </div>
          <div className="card text-center mb-3" style={{width: 18+"rem"}}>
            <div className="card-body dets">
              <img src={require("./assests/court.png")} alt="..." className="card-title" />
              <p className="card-text">Child rights</p>
            </div>
          </div>
        </div>
      </div>

      <div className="our-story">
        <h2>Our <span color="red">Story</span></h2>
        <p>From this to that, it is our goal to transform this part of Kenya. <br/>
          Just like a bird, twig by twig the nest is completed</p>
        <div>
          <div>
            <img style={{ marginRight: 4+"vw" }} src={require("./assests/before.png")} alt="before" />
            <p>Before</p>
          </div>
          <div>
            <img style={{ width: 33.6+"vw" }} src={require("./assests/after.png")} alt="before" />
            <p>After</p>
          </div>
        </div>
      </div>

      <div className="gallery">
        <h2><span>Our</span> Gallery</h2>
        <div>
          <img src={require("./assests/house.png")} alt="..." />
          <img src={require("./assests/girls.png")} alt="..." />
          <img src={require("./assests/children.png")} alt="..." />
          <img src={require("./assests/toddler.png")} alt="..." />
        </div>
      </div>
    </div>
  )
}

export default LandingPage;