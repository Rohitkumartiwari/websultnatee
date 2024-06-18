import React from "react";
import { IoIosGift } from "react-icons/io";
import { HiMiniHome } from "react-icons/hi2";
import { FiBox } from "react-icons/fi";
import { RiSwordLine } from "react-icons/ri";
import { PiCrownSimpleFill } from "react-icons/pi";
import { MdPeople } from "react-icons/md";
const UpperSidebar = () => {
  return (
    <>
    
             <button className="gift-box mb-3 ">
            <IoIosGift size={18} style={{ color: "#B2B2FF" }} />
            </button>
            <button className="gift-box-unactive mb-3 ">
            <HiMiniHome size={18} style={{ color: "#676778" }} />
            </button>
            <button className="gift-box-unactive mb-3 ">
            <FiBox size={18} style={{ color: "#676778" }} />
            </button>
            <button className="gift-box-unactive mb-3 ">
            <RiSwordLine size={18} style={{ color: "#676778" }} />
            </button>
            <button className="gift-box-unactive mb-3 ">
            <PiCrownSimpleFill size={18} style={{ color: "#676778" }} />
            </button>
            <button className="gift-box-unactive mb-3 ">
            <MdPeople size={18} style={{ color: "#676778" }} />
            </button>
    </>
  );
};

export default UpperSidebar;
