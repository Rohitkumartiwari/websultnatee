import React from "react";
import logo from "../images/logo.png";
import { BsFillChatSquareDotsFill } from "react-icons/bs";
import { HiMiniHome } from "react-icons/hi2";
import { FiBox } from "react-icons/fi";
import { RiSwordLine } from "react-icons/ri";
import { PiCrownSimpleFill } from "react-icons/pi";
import { MdPeople } from "react-icons/md";
import img1 from "../images/flag.png";
import img2 from "../images/corrency.png";
import img3 from "../images/down.png";
const Header = () => {
  return (
    <div className="d-flex px-3 py-3 justify-content-between main-header-wrapper">
      <div className="d-flex gap-3">
        <div className="d-flex">
          <img src={logo} alt="img not found" />
          <h5 className="text-white ms-2 fw-7 mb-0 dropheat">DROPHEAT</h5>
        </div>
        <div className="d-flex gap-2 d-none d-md-flex ">
          <div className="d-flex align-items-center">
            <HiMiniHome size={18} style={{ color: "#676778" }} />
            <span className="text-white ms-2 fs-12">Home</span>
          </div>
          <div className="d-flex align-items-center">
            <FiBox size={18} style={{ color: "#676778" }} />
            <span className="text-white ms-2 fs-12">Boxes</span>
          </div>
          <div className="d-flex align-items-center">
            <RiSwordLine size={18} style={{ color: "#676778" }} />
            <span className="text-white ms-2 fs-12">Battles</span>
          </div>
          <div className="d-flex align-items-center">
            <PiCrownSimpleFill size={18} style={{ color: "#676778" }} />
            <span className="text-white ms-2 fs-12">VIP Members</span>
          </div>
          <div className="d-flex align-items-center">
            <MdPeople size={18} style={{ color: "#676778" }} />
            <span className="text-white ms-2 fs-12">Affiliates</span>
          </div>
        </div>
      </div>

      <div className="d-flex gap-2">
        <button className="chat-box-right-1-logo ms-2 d-flex align-items-center gap-2">
         <img src={img1} alt="img not found"/>
         <h6 className="text-white fs-13 mb-0">EN</h6>
         <img src={img3} alt="img not found"/>
        </button>
        <button className="chat-box-right-1-logo ms-2 d-flex align-items-center gap-2">
         <img src={img2} alt="img not found"/>
         <h6 className="text-white fs-13 mb-0">USD</h6>
         <img src={img3} alt="img not found"/>
        </button>
        <button className="open_case fs-12 ">Authorization</button>
        <button className="chat-box-right-logo ms-2">
          <BsFillChatSquareDotsFill size={20} color="gray" />
        </button>
      </div>
    </div>
  );
};

export default Header;
