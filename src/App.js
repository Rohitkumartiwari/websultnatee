import React from "react";
import "./App.css";
import LiveDeops from "./components/LiveDeops";
import UpperSidebar from "./components/UpperSidebar";
import HeaderBanner from "./components/HeaderBanner";
import ChatSection from "./components/ChatSection";
import FeaturedBoxes from "./components/FeaturedBoxes";
import LowerSidebar from "./components/LowerSidebar";
import LatestBattle from "./components/LatestBattle";
import FreshDelivery from "./components/FreshDelivery";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  return (
    <div className="wrapper">
      <Header/>
      <div className="  px-3 py-3 chat-grid">
        <div className="">
          <div className="row">
            <div className="col-md-1 px-2 upper-sidebar">
              <UpperSidebar />
            </div>
            <div className="col-md-11">
              <p className="paragraph d-flex align-items-center text-white drops">
                <span class="blink-text me-1"></span>Live Drops
              </p>
              <LiveDeops />
              <HeaderBanner />
            </div>
          </div>
          <div className="row">
            <div className="col-md-1 px-2 upper-sidebar">
              <LowerSidebar />
            </div>
            <div className="col-md-11">
              <FeaturedBoxes />
            </div>
          </div>
         <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-11">
          <LatestBattle/>
          <FreshDelivery/>
          <Footer />
          </div>
         </div>
          
        </div>

        <div className=" px-2 chat-section">
          <ChatSection />
        </div>
      </div>
    </div>
  );
}

export default App;
