import React from "react";
import "./style/Gallery.css"



function Gallery(){
  return(
    <div>
      <div className="hero-image">
        <div className="hero-title">
            <div className="h-line" style={{ marginBottom: 2+"vh" }}></div>
            <h2 style={{ marginBottom: 2+"vh" }}>BY FAITH AND HOPE ACADEMY</h2>
            <h4>Where Every Child Matters</h4>
            <div className="h-line" style={{ width: 15+"vw", marginTop: 2+"vh"  }}></div>
          </div>
      </div>

      <div className="gallery-page" >
        <h2>Gallery Collection</h2>
        <div className="gallery-collection">
          {/* <div>
            <img src={require("")} alt="..." />
            <img src={require("")} alt="..." />
            <img src={require("")} alt="..." />
          </div>
          <div>
            <img src={require("")} alt="..." />
            <img src={require("")} alt="..." />
            <img src={require("")} alt="..." />
          </div>
          <div>
            <img src={require("")} alt="..." />
            <img src={require("")} alt="..." />
            <img src={require("")} alt="..." />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Gallery;