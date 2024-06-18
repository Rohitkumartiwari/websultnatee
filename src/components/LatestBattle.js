import React from "react";
import img from "../images/cut.png";
import img1 from "../images/fighter/fighter1.png";
import img2 from "../images/fighter/fighter2.png";
import img3 from "../images/fighter/fighter3.png";
import img4 from "../images/fighter/fighter4.png";
import img5 from "../images/fighter/fighter5.png";
import img6 from "../images/fighter/fighter6.png";
import img7 from "../images/fighter/fighter7.png";
import img8 from "../images/fighter/fighter8.png";
import f1 from "../images/f1.png";
import f2 from "../images/f2.png";
import f3 from "../images/f3.png";
import f4 from "../images/f4.png";
import f5 from "../images/f5.png";
import vs from "../images/fighter/vs.png";
const LatestBattle = () => {
  const data = [
    {
      id: 1,
      userImage: f1,
      title: "Crazy Designers",
      type1: "Streetwear",
      type2: "Watches",
      price: "$390",
      category: "Popular",
    },
    {
      id: 2,
      userImage: f2,
      title: "Crazy Designers",
      type1: "Streetwear",
      type2: "Watches",
      price: "$390",
      category: "Hot",
    },
    {
      id: 3,
      userImage: f3,
      title: "Crazy Designers",
      type1: "Streetwear",
      type2: "Watches",
      price: "$390",
    },
    {
      id: 4,
      userImage: f4,
      title: "Crazy Designers",
      type1: "Streetwear",
      type2: "Watches",
      price: "$390",
    },
    {
      id: 5,
      userImage: f5,
      title: "Crazy Designers",
      type1: "Streetwear",
      type2: "Watches",
      price: "$390",
      category: "New",
    },
    {
      id: 6,
      userImage: f1,
      title: "Crazy Designers",
      type1: "Streetwear",
      type2: "Watches",
      price: "$390",
      category: "Hot",
    },
  ];
  return (
    <div>
      <div className="d-flex gap-3">
        <img src={img} alt="img not found" height={20} />
        <h5 className="ms-2 text-white fw-7">Latest Battles</h5>
        <button className="view-all fs-12">View All</button>
      </div>
      <div className="battle-body-wrapper my-2">
        <div className="grid-container-battle my-2 d-flex align-items-cenetr flex-wrap">
          <div className=" col-md-2 left-battle-box d-flex battle-screen-stars">
            <div className="col-md-5">
              <div className="position-relative">
                <img
                  src={img3}
                  alt="img not found"
                  height={35}
                  className="position-relative"
                />
                <img
                  src={img1}
                  alt="img not found"
                  height={35}
                  className="second-card-position "
                />
              </div>
            </div>
            <div className="col-md-2 text-center">
              <img src={vs} alt="img not found" height={15} />
            </div>
            <div className="col-md-5">
              <div className="position-relative">
                <img
                  src={img2}
                  alt="img not found"
                  height={35}
                  className="position-relative"
                />
                <img
                  src={img6}
                  alt="img not found"
                  height={35}
                  className="second-card-position "
                />
              </div>
            </div>
          </div>
          <div className="col-md-8 gap-3 justify-content-center battle-screen-links d-flex">
           <div className="d-flex ">
           <div className="middle-box-wrapper-left d-flex gap-4">
              {data.slice(0, 3)?.map((item) => {
                return (
                  <img
                    src={item?.userImage}
                    alt="img not found"
                    width={60}
                    height={60}
                  />
                );
              })}
            </div>
           </div>
            <div className="middle-box-wrapper-right d-flex gap-4">
              {data.slice(3, 6)?.map((item) => {
                return (
                  <img
                    src={item?.userImage}
                    alt="img not found"
                    width={60}
                    height={60}
                  />
                );
              })}
            </div>
          </div>
          <div className="col-md-2 text-center battle-screen-socials ">
            <p className="text-white paragraph mb-0 fw-7">
              $350<span style={{ color: "#676778" }}> .00</span>
            </p>
            <button className="open_case fs-12 my-1">Open case</button>
          </div>
        </div>
      </div>
      <div className="battle-body-wrapper my-2">
        <div className="grid-container-battle my-2 d-flex align-items-cenetr flex-wrap">
          <div className=" col-md-2 left-battle-box d-flex battle-screen-stars">
            <div className="col-md-5">
              <div className="position-relative">
                <img
                  src={img3}
                  alt="img not found"
                  height={35}
                  className="position-relative"
                />
                <img
                  src={img1}
                  alt="img not found"
                  height={35}
                  className="second-card-position "
                />
              </div>
            </div>
            <div className="col-md-2 text-center">
              <img src={vs} alt="img not found" height={15} />
            </div>
            <div className="col-md-5">
              <div className="position-relative">
                <img
                  src={img2}
                  alt="img not found"
                  height={35}
                  className="position-relative"
                />
                <img
                  src={img6}
                  alt="img not found"
                  height={35}
                  className="second-card-position "
                />
              </div>
            </div>
          </div>
          <div className="col-md-8 gap-3 justify-content-center battle-screen-links d-flex">
           <div className="d-flex ">
           <div className="middle-box-wrapper-left d-flex gap-4">
              {data.slice(0, 3)?.map((item) => {
                return (
                  <img
                    src={item?.userImage}
                    alt="img not found"
                    width={60}
                    height={60}
                  />
                );
              })}
            </div>
           </div>
            <div className="middle-box-wrapper-right d-flex gap-4">
              {data.slice(3, 6)?.map((item) => {
                return (
                  <img
                    src={item?.userImage}
                    alt="img not found"
                    width={60}
                    height={60}
                  />
                );
              })}
            </div>
          </div>
          <div className="col-md-2 text-center battle-screen-socials ">
            <p className="text-white paragraph mb-0 fw-7">
              $350<span style={{ color: "#676778" }}> .00</span>
            </p>
            <button className="open_case fs-12 my-1">Open case</button>
          </div>
        </div>
      </div>
      <div className="battle-body-wrapper my-2">
        <div className="grid-container-battle my-2 d-flex align-items-cenetr flex-wrap">
          <div className=" col-md-2 left-battle-box d-flex battle-screen-stars">
            <div className="col-md-5">
              <div className="position-relative">
                <img
                  src={img3}
                  alt="img not found"
                  height={35}
                  className="position-relative"
                />
                <img
                  src={img1}
                  alt="img not found"
                  height={35}
                  className="second-card-position "
                />
              </div>
            </div>
            <div className="col-md-2 text-center">
              <img src={vs} alt="img not found" height={15} />
            </div>
            <div className="col-md-5">
              <div className="position-relative">
                <img
                  src={img2}
                  alt="img not found"
                  height={35}
                  className="position-relative"
                />
                <img
                  src={img6}
                  alt="img not found"
                  height={35}
                  className="second-card-position "
                />
              </div>
            </div>
          </div>
          <div className="col-md-8 gap-3 justify-content-center battle-screen-links d-flex">
           <div className="d-flex ">
           <div className="middle-box-wrapper-left d-flex gap-4">
              {data.slice(0, 3)?.map((item) => {
                return (
                  <img
                    src={item?.userImage}
                    alt="img not found"
                    width={60}
                    height={60}
                  />
                );
              })}
            </div>
           </div>
            <div className="middle-box-wrapper-right d-flex gap-4">
              {data.slice(3, 6)?.map((item) => {
                return (
                  <img
                    src={item?.userImage}
                    alt="img not found"
                    width={60}
                    height={60}
                  />
                );
              })}
            </div>
          </div>
          <div className="col-md-2 text-center battle-screen-socials ">
            <p className="text-white paragraph mb-0 fw-7">
              $350<span style={{ color: "#676778" }}> .00</span>
            </p>
            <button className="open_case fs-12 my-1">Open case</button>
          </div>
        </div>
      </div>
      <div className="battle-body-wrapper my-2">
        <div className="grid-container-battle my-2 d-flex align-items-cenetr flex-wrap">
          <div className=" col-md-2 left-battle-box d-flex battle-screen-stars">
            <div className="col-md-5">
              <div className="position-relative">
                <img
                  src={img3}
                  alt="img not found"
                  height={35}
                  className="position-relative"
                />
                <img
                  src={img1}
                  alt="img not found"
                  height={35}
                  className="second-card-position "
                />
              </div>
            </div>
            <div className="col-md-2 text-center">
              <img src={vs} alt="img not found" height={15} />
            </div>
            <div className="col-md-5">
              <div className="position-relative">
                <img
                  src={img2}
                  alt="img not found"
                  height={35}
                  className="position-relative"
                />
                <img
                  src={img6}
                  alt="img not found"
                  height={35}
                  className="second-card-position "
                />
              </div>
            </div>
          </div>
          <div className="col-md-8 gap-3 justify-content-center battle-screen-links d-flex">
           <div className="d-flex ">
           <div className="middle-box-wrapper-left d-flex gap-4">
              {data.slice(0, 3)?.map((item) => {
                return (
                  <img
                    src={item?.userImage}
                    alt="img not found"
                    width={60}
                    height={60}
                  />
                );
              })}
            </div>
           </div>
            <div className="middle-box-wrapper-right d-flex gap-4">
              {data.slice(3, 6)?.map((item) => {
                return (
                  <img
                    src={item?.userImage}
                    alt="img not found"
                    width={60}
                    height={60}
                  />
                );
              })}
            </div>
          </div>
          <div className="col-md-2 text-center battle-screen-socials ">
            <p className="text-white paragraph mb-0 fw-7">
              $350<span style={{ color: "#676778" }}> .00</span>
            </p>
            <button className="open_case fs-12 my-1">Open case</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBattle;
