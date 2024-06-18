import React from "react";
import { BsFillChatSquareDotsFill, BsEmojiSmileFill } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";
import { IoIosSend } from "react-icons/io";
import user1 from "../images/user1.png";
import user2 from "../images/user2.png";
import user3 from "../images/user3.png";
import user4 from "../images/user4.png";
import user5 from "../images/user5.png";
import user6 from "../images/user6.png";
import user7 from "../images/user7.png";
const chatData = [
  {
    id: 1,
    userImage: user1,
    username: "coolmate",
    timestamp: "10:43 PM",
    message: "Hello World",
  },
  {
    id: 2,
    userImage: user2,
    username: "coolmate",
    timestamp: "10:43 PM",
    message: "its all time waiting and show now low 😒",
  },
  {
    id: 3,
    userImage: user3,
    username: "coolmate",
    timestamp: "10:43 PM",
    message:
      "Please provide camera access through your browser or device settings. Click 'Allow' when prompted, or adjust settings accordingly.",
  },
  {
    id: 4,
    userImage: user4,
    username: "coolmate",
    timestamp: "10:43 PM",
    message: "Good luck everybody 🍀",
  },
  {
    id: 5,
    userImage: user5,
    username: "coolmate",
    timestamp: "10:43 PM",
    message: "Ooooooffff",
  },
  {
    id: 6,
    userImage: user6,
    username: "Hello all friends",
    timestamp: "10:43 PM",
    message: "errr how did i move to sports",
  },
  {
    id: 7,
    userImage: user7,
    username: "they moved the start times for fd back 30 min",
    timestamp: "10:43 PM",
    message: "errr how did i move to sports",
  },
];

const ChatSection = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center border-btm py-2">
        <div>
          <BsFillChatSquareDotsFill color="gray" size={20} />
          <span className="text-white fw-6 ms-2">Chat</span>
        </div>
        <div className="d-flex align-items-center">
          <div>
            <h6 className="d-flex align-items-center text-white mb-0 fw-6">
              <span className="blink-text me-1"></span>12,490
            </h6>
          </div>
          <button className="chat-box-right-logo ms-2">
            <FiChevronRight size={23} color="white" />
          </button>
        </div>
      </div>

      {chatData.map((chat) => (
        <div key={chat.id} className="px-1 d-flex my-2 ">
          <img
            src={chat.userImage}
            alt="img not found"
            className="user-image"
          />
          <div className="ms-2">
            <p className="mb-0" style={{ color: "#A3A3B7" }}>
              {chat.username} {chat.timestamp}
            </p>
            <div className="chat_wrapper fw-5">{chat.message}</div>
          </div>
        </div>
      ))}
      <div className="border-btm"></div>
      <div className=" text-box d-flex justify-content-between my-2 overflow-hidden">
        <div className="d-flex justify-content-between align-items-center p-2 gap text-section" >
          <p style={{ color: "#676778" }} className="mb-0 fs-11" >Enter Your Message</p>
          <BsEmojiSmileFill style={{ color: "#676778" }}/>
        </div>
        <div className="px-3 purpel d-flex justify-content-center align-items-center">
          <IoIosSend color="white" size={25} />
        </div>
      </div>
      <div className="border-btm"></div>
    </>
  );
};

export default ChatSection;
