import { HiSpeakerphone } from "react-icons/hi";
import React from "react";
import { IoIosMusicalNote,IoMdMail} from "react-icons/io";
import { FaTwitter ,FaInstagram,FaYoutube} from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
const LowerSidebar = () => {
  return (
    <>
             <button className="gift-box-unactive my-3 ">
            <HiSpeakerphone  size={18} style={{ color: "#676778" }} />
            </button>
            <button className="gift-box-unactive mb-3 ">
            <IoMdMail size={18} style={{ color: "#676778" }} />
            </button>
            <button className="gift-box-unactive mb-3 ">
            <BsChatDotsFill size={18} style={{ color: "#676778" }} />
            </button>
            <button className="gift-box-unactive mb-3 ">
            <CgNotes  size={18} style={{ color: "#676778" }} />
            </button>
            <button className="gift-box-unactive mb-3 d-flex flex-column gap-2">
            <FaTwitter size={18} style={{ color: "#676778" }} />
            <FaInstagram size={18} style={{ color: "#676778" }} />
            <FaYoutube size={18} style={{ color: "#676778" }} />
            <IoIosMusicalNote size={18} style={{ color: "#676778" }} />
            </button>
    </>
  );
};

export default LowerSidebar;


