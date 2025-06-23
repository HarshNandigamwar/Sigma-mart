import React from "react";
import "./ImgSlid.css";
// Import all images
import Img1 from "../../assets/img1.jpg";
import Img2 from "../../assets/img2.jpg";
import Img3 from "../../assets/img3.jpg";
import Img4 from "../../assets/img4.jpg";
const ImgSlid = () => {
  return (
    <div className="slider">
      <figure>
        <div className="slide">
          <img src={Img1} alt="N/A" loading="lazy" />
        </div>
        <div className="slide">
          <img src={Img2} alt="N/A" loading="lazy" />
        </div>
        <div className="slide">
          <img src={Img3} alt="N/A" loading="lazy" />
        </div>
        <div className="slide">
          <img src={Img4} alt="N/A" loading="lazy" />
        </div>
      </figure>
    </div>
  );
};

export default ImgSlid;
