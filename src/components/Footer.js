import React from "react";
import { IoMdStar, IoIosMusicalNote } from "react-icons/io";
import { FiChevronRight } from "react-icons/fi";
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const stars = Array.from({ length: 5 });

  return (
    <div className="footer d-flex  flex-md-row justify-content-between mt-3 flex-wrap">
     
      <div className="mb-3 mb-md-0 mobile-screen-stars">
        {stars.map((index) => (
          <button className="star-box ms-2" key={index}>
            <IoMdStar size={23} color="white" />
          </button>
        ))}
      </div>

     
     
     
     
      <div className="mt-3 mt-md-0 mobile-screen-links">
        <ul className="d-flex text-white fs-12 gap-4 mb-0 p-0">
          <li><p>AML Policy</p></li>
          <li><p>Cookie Policy</p></li>
          <li><p>Contact</p></li>
          <li><p>Terms Of Service</p></li>
          <li><p>Blog</p></li>
          <li><p>FAQ</p></li>
        </ul>
      </div>
      <div className="d-flex mt-3 mt-md-0 mobile-screen-socials "> 
        <button className="chat-box-right-logo ms-2">
          <FaTwitter size={23} color="white" />
        </button>
        <button className="chat-box-right-logo ms-2">
          <FaInstagram size={23} color="white" />
        </button>
        <button className="chat-box-right-logo ms-2">
          <IoIosMusicalNote size={23} color="white" />
        </button>
        <button className="chat-box-right-logo ms-2">
          <FaYoutube size={23} color="white" />
        </button>
      </div>
    </div>
  );
};

export default Footer;
