import React from "react";
import "./style/Gallery.css"



function Gallery(){
  return(
    <div>
      <div className="hero-image">
        <div className="hero-title2">
            <div className="h-line" style={{ marginBottom: 2+"vh" }}></div>
            <h2 style={{ marginBottom: 2+"vh" }}>BY FAITH AND HOPE ACADEMY</h2>
            <h4>Where Every Child Matters</h4>
            <div className="h-line" style={{ width: 15+"vw", marginTop: 2+"vh"  }}></div>
          </div>
      </div>

      <div className="gallery-page" >
        <h2>Gallery Collection</h2>
        <div className="gallery-collection">
          <div className="gallery1">
            <img src={require("./assests/junior1.png")} alt="..." />
            <img src={require("./assests/camel.png")} alt="..." />
            <img src={require("./assests/children.png")} alt="..." />
          </div> 
          <div className="gallery1">
            <img src={require("./assests/boysJunior.png")} alt="..." />
            <img src={require("./assests/ceremony.png")} alt="..." />
            <img src={require("./assests/classroom.png")} alt="..." />
          </div>
          <div className="gallery1">
            <img src={require("./assests/pekids.png")} alt="..." />
            <img src={require("./assests/classroom.png")} alt="..." />
            <img src={require("./assests/allJuniors.png")} alt="..." />
          </div> 
          <div className="gallery1">
            <img src={require("./assests/student2.jpeg")} alt="..." />
            <img src={require("./assests/student4.jpeg")} alt="..." />
            <img src={require("./assests/students1.jpeg")} alt="..." />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery;