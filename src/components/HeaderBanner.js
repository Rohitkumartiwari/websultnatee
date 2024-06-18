import React from 'react';
import Img1 from "../images/Frame1.png";
import Img2 from "../images/Frame2.png";

const HeaderBanner = () => {
  return (
    <div className='d-flex my-3 gap-4'>
      <div className="col-md-8 first-image">
        <div className='position-relative overflow-x-scroll first-image'>
          <img src={Img1} alt="img not found" className="img-fluid"  />
        </div>
      </div>
      <div className="col-md-4 second-image">
        <div className='position-relative overflow-x-scroll'>
          <img src={Img2} alt="img not found" className="img-fluid"  />
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;