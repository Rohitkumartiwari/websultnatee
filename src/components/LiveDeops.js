import React from "react";
import "react-multi-carousel/lib/styles.css";
import img1 from "../images/image 57.png";
import laugh from "../images/laugh.png";
import cell from "../images/cell.png";
import pot from "../images/pot.png";
import gogels from "../images/gogels.png";
import shoes from "../images/shoes.png"
const LiveDeops = () => {
  return (
    <div className="d-flex overflow-x-auto" >
      <button className="btn-1 green d-flex w-100 align-items-center justify-content-center justify-content-between mr-10">
          <div>
            <img src={img1} alt="img not found" width={50} height={50} />
          </div>
          <div className="d-flex flex-column">
            <strong className="fs-13 text-white text-start">$10.00</strong>
            <div className="d-flex align-items-center">
              <img src={laugh} alt="img not found" width={15} height={15} />
              <p className="laugh_text ms-1 mb-0">MsGreedy</p>
            </div>
          </div>
        </button>
        <button className="btn-1 pink d-flex w-100 align-items-center justify-content-center justify-content-between mr-10">
          <div>
            <img src={cell} alt="img not found" width={50} height={50} />
          </div>
          <div className="d-flex flex-column">
            <strong className="fs-13 text-white text-start">$10.00</strong>
            <div className="d-flex align-items-center">
              <img src={laugh} alt="img not found" width={15} height={15} />
              <p className="laugh_text ms-1 mb-0">MsGreedy</p>
            </div>
          </div>
        </button>
        <button className="btn-1 light-blue d-flex w-100 align-items-center justify-content-center justify-content-between mr-10">
          <div>
            <img src={pot} alt="img not found" width={50} height={50} />
          </div>
          <div className="d-flex flex-column">
            <strong className="fs-13 text-white text-start">$10.00</strong>
            <div className="d-flex align-items-center">
              <img src={laugh} alt="img not found" width={15} height={15} />
              <p className="laugh_text ms-1 mb-0">MsGreedy</p>
            </div>
          </div>
        </button>
        <button className="btn-1 black d-flex w-100 align-items-center justify-content-center justify-content-between mr-10">
          <div>
            <img src={gogels} alt="img not found" width={50} height={50} />
          </div>
          <div className="d-flex flex-column">
            <strong className="fs-13 text-white text-start">$10.00</strong>
            <div className="d-flex align-items-center">
              <img src={laugh} alt="img not found" width={15} height={15} />
              <p className="laugh_text ms-1 mb-0">MsGreedy</p>
            </div>
          </div>
        </button>
        <button className="btn-1 pink d-flex w-100 align-items-center justify-content-center justify-content-between mr-10">
          <div>
            <img src={shoes} alt="img not found" width={50} height={50} />
          </div>
          <div className="d-flex flex-column">
            <strong className="fs-13 text-white text-start">$10.00</strong>
            <div className="d-flex align-items-center">
              <img src={laugh} alt="img not found" width={15} height={15} />
              <p className="laugh_text ms-1 mb-0">MsGreedy</p>
            </div>
          </div>
        </button>
        <button className="btn-1 light-blue d-flex w-100 align-items-center justify-content-center justify-content-between mr-10">
          <div>
            <img src={gogels} alt="img not found" width={50} height={50} />
          </div>
          <div className="d-flex flex-column">
            <strong className="fs-13 text-white text-start">$10.00</strong>
            <div className="d-flex align-items-center">
              <img src={laugh} alt="img not found" width={15} height={15} />
              <p className="laugh_text ms-1 mb-0">MsGreedy</p>
            </div>
          </div>
        </button>
        <button className="btn-1 black d-flex w-100 align-items-center justify-content-center justify-content-between mr-10">
          <div>
            <img src={pot} alt="img not found" width={50} height={50} />
          </div>
          <div className="d-flex flex-column">
            <strong className="fs-13 text-white text-start">$10.00</strong>
            <div className="d-flex align-items-center">
              <img src={laugh} alt="img not found" width={15} height={15} />
              <p className="laugh_text ms-1 mb-0">MsGreedy</p>
            </div>
          </div>
        </button>
        <button className="btn-1 black d-flex w-100 align-items-center justify-content-center justify-content-between mr-10">
          <div>
            <img src={pot} alt="img not found" width={50} height={50} />
          </div>
          <div className="d-flex flex-column">
            <strong className="fs-13 text-white text-start">$10.00</strong>
            <div className="d-flex align-items-center">
              <img src={laugh} alt="img not found" width={15} height={15} />
              <p className="laugh_text ms-1 mb-0">MsGreedy</p>
            </div>
          </div>
        </button>
    </div>
  );
};

export default LiveDeops;
