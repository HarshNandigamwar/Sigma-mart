import React from 'react'
import "./ImgSlid.css"
import Img1 from "../../assets/img1.jpg";
import Img2 from "../../assets/img2.jpg";
import Img3 from "../../assets/img3.jpg";
import Img4 from "../../assets/img4.jpg";
import Img5 from "../../assets/img5.jpg";
const ImgSlid = () => {
  return (
    <div id='body'>
            <div class="body">
        <div class="slider-container">
          <div class="slider-wrapper">
            <img src={Img1} alt="Image 1" />
            <img src={Img4} alt="Image 2" />
            <img src={Img3} alt="Image 3" />
            <img src={Img2} alt="Image 4" />
            <img src={Img5} alt="Image 5" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImgSlid
