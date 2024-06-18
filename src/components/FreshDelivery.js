import React from "react";
import img from "../images/book.png";
import img1 from "../images/fighter/fighter1.png";
import img2 from "../images/fighter/fighter2.png";
import img3 from "../images/fighter/fighter3.png";
import img4 from "../images/fighter/fighter4.png";
import fresh1 from "../images/fresh/fresh1.png";
import fresh2 from "../images/fresh/fresh2.png";
import fresh3 from "../images/fresh/fresh3.png";
import { IoIosStar } from "react-icons/io";
const FreshDelivery = () => {
  const data = [
    {
      id: 1,
      userImage: img1,
      title: "Best serivce I ever used",
      description:
        "It finally arrived. TY @HypeDrop Lemme know which case I should open to honor this moment",
      userId: "@users9384",
      time: "3 hours ago",
      name: "Andr Grown",
    },
    {
      id: 2,
      userImage: img2,
      title: "Best serivce I ever used",
      description:
        "It finally arrived. TY @HypeDrop Lemme know which case I should open to honor this moment",
      userId: "@users9384",
      time: "3 hours ago",
      name: "Andr Grown",
    },
    {
      id: 3,
      userImage: img3,
      title: "Best serivce I ever used",
      description:
        "It finally arrived. TY @HypeDrop Lemme know which case I should open to honor this moment",
      userId: "@users9384",
      time: "3 hours ago",
      name: "Andr Grown",
    },
    {
      id: 4,
      userImage: img4,
      title: "Best serivce I ever used",
      description:
        "It finally arrived. TY @HypeDrop Lemme know which case I should open to honor this moment",
      userId: "@users9384",
      time: "3 hours ago",
      name: "Andr Grown",
    },
    
    // {
    //   id: 5,
    //   userImage: img5,
    //   title: "Best serivce I ever used",
    //   description:
    //     "It finally arrived. TY @HypeDrop Lemme know which case I should open to honor this moment",
    //   userId: "@users9384",
    //   time: "3 hours ago",
    //   name: "Andr Grown",
    // },
  ];
  const stars = Array.from({ length: 5 });
  return (
    <div>
      <h5 className="text-white fw-7">
        <span>
          {" "}
          <img src={img} alt="img not found" height={20} className="me-3" />
        </span>
        Fresh Deliveries
      </h5>
      <div className="d-flex overflow-x-auto ">
        {data?.map((item) => {
          return (
            <div style={{width:"306"}}>
              <div className="delivery-card_wrapper my-2">
                <div className="d-flex justify-content-between">
                  <div className="d-flex gap-1">
                    <img
                      src={item.userImage}
                      alt="img not found"
                      className="user-image"
                    />
                    <div>
                      <p className="mb-0 text-white fs-13">{item?.name}</p>
                      <p className="mb-0 fs-12" style={{ color: "#A3A3B7" }}>
                        {item.userId}
                      </p>
                    </div>
                  </div>
                  <div>
                    {
                      <p className="mb-0 fs-12" style={{ color: "#A3A3B7" }}>
                        {item.time}
                      </p>
                    }
                  </div>
                </div>
                <p className="text-white mb-0 fs-13">{item?.title}</p>
                <p className="mb-0 fs-12 my-1" style={{ color: "#A3A3B7" }}>
                  {item.description}
                </p>
                <div className="d-flex gap-2 my-1">
                  <img
                    src={fresh1}
                    alt="img not found"
                    height={61}
                    width={61}
                  />
                  <img
                    src={fresh2}
                    alt="img not found"
                    height={61}
                    width={61}
                  />
                  <img
                    src={fresh3}
                    alt="img not found"
                    height={61}
                    width={61}
                  />
                </div>
                <div className="text-center">
                  {stars.map((_, index) => (
                    <IoIosStar
                      key={index}
                      style={{ color: "#39FF88" }}
                      className="ms-1"
                      size={22}
                    />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FreshDelivery;
