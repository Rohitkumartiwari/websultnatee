import React, { useState } from "react";
import { FiBox } from "react-icons/fi";
import f1 from "../images/f1.png";
import f2 from "../images/f2.png";
import f3 from "../images/f3.png";
import f4 from "../images/f4.png";
import f5 from "../images/f5.png";
import img3 from "../images/down.png";
const FeaturedBoxes = () => {
  const [selectBox, setSelectBox] = useState(0);
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
      {
        id: 7,
        userImage: f2,
        title: "Crazy Designers",
        type1: "Streetwear",
        type2: "Watches",
        price: "$390",
        category: "New",
      },
      {
        id: 8,
        userImage: f3,
        title: "Crazy Designers",
        type1: "Streetwear",
        type2: "Watches",
        price: "$390",
        category: "Popular",
      },
      {
        id: 9,
        userImage: f4,
        title: "Crazy Designers",
        type1: "Streetwear",
        type2: "Watches",
        price: "$390",
        category: "New",
      },
      {
        id: 10,
        userImage: f5,
        title: "Crazy Designers",
        type1: "Streetwear",
        type2: "Watches",
        price: "$390",
        category: "Hot",
      },
  ];
  return (
    <>
      <div className="d-flex justify-content-between align-items-center my-2">
        <div>
          <FiBox size={20} style={{ color: "#B2B2FF" }} />
          <span className="ms-2 text-white fw-7">Featured Boxes</span>
        </div>
        <div className="d-flex choose_box_wrapper gap-3 align-items-center">
          <div
            onClick={() => setSelectBox(0)}
            className={selectBox === 0 ? "active fs-13" : "inactive fs-13"}
          >
            Featured
          </div>
          <div
            onClick={() => setSelectBox(1)}
            className={selectBox === 1 ? "active fs-13" : "inactive fs-13"}
          >
            New Boxes
          </div>
          <div
            onClick={() => setSelectBox(2)}
            className={selectBox === 2 ? "active fs-13" : "inactive fs-13"}
          >
            Top Boxes
          </div>
        </div>
        {/* <div className="">
          <select className="form-select" aria-label="Default select example">
            <option selected>Sort by :Price</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <option />
        </div> */}
         <button className="choose_box_wrapper ms-2 d-flex align-items-center gap-2">
        
         <h6 className="text-white fs-13 mb-0">Sort by:Price</h6>
         <img src={img3} alt="img not found"/>
        </button>
      </div>
      <div className="grid-container my-2">
        
        {data?.map((item, index) => (
          <div className="featured_card_wrapper" key={index}>
            {item?.category&&<button className={item?.category==="Popular"?"popular":item?.category==="Hot"?"hot":item?.category==="New"?"new":""}>{item?.category}</button>}
            
            <div className="featured_card">
              <img
                src={item?.userImage}
                alt="img not found"
                width={120}
                height={120}
              />
            </div>
            <p className="text-white paragraph mb-0 fw-7">{item?.title}</p>
            <div className="d-flex gap-2 my-2">
                <div className="type1">
                    {item?.type1}
                </div>
                <div className="type1">
                    {item?.type2}
                </div>
            </div>
            <p className="text-white paragraph mb-0 fw-7">{item?.price}<span style={{color:"#676778"}}> .00</span></p>
            <div className="d-flex my-2">
                <div className="col-9">
                    <button className="open_case fs-12">
                    Open case
                    </button>
                
                </div>
                <div className="col-3">
                <button className="info fs-12">
                    Info
                    </button>
                </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid-container my-2">
        
        
      </div>
    </>
  );
};

export default FeaturedBoxes;
