import React, { useState } from "react";
import "./App.css";
import image1 from "./images/image1.png";
import bugdha2 from "./images/bugdha2.png";
import { FaHeart, FaShareAlt, FaEye, FaArrowRight } from "react-icons/fa";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [likes, setLikes] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const shares = 120;
  const views = 27;

  return (
    <div className="container">
      {/* Sidebar (Bottom bar on mobile) */}
      <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <button className="toggle-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? "←" : "→"}
        </button>
        {isSidebarOpen && (
          <div className="content">
            <h4>MAITREYA BUDDHA IN GESTURE OF FEARLESSNESS (ABHAYA MUDRA)</h4>

            {/* Icon Section */}
            <div className="icon-section">
              <div className="icon" onClick={() => setLikes(likes + 1)}>
                <FaHeart />
                <span>{likes}</span>
              </div>
              <div className="icon">
                <FaShareAlt />
                <span>{shares}</span>
              </div>
              <div className="icon">
                <FaEye />
                <span>{views}</span>
              </div>
            </div>

            <p><strong>Dynasty:</strong> Ahichchatra</p>
            <p><strong>Period:</strong> 200 CE</p>
            <p><strong>Material:</strong> Sandstone</p>
            <p><strong>Location:</strong> National Museum</p>

            <h4>Description</h4>
            <p>
              Maitreya, the future Buddha-to-be, resides in the Tushita heaven as a bodhisattva waiting to redeem humanity.
              {showMore && (
                <> In Buddhist traditions, Maitreya is the eighth Buddha, a successor of the seven historical Buddhas (sapta-manushi Buddhas). </>
              )}
            </p>

            {/* Read More / Read Less */}
            <div className="read-more" onClick={() => setShowMore(!showMore)}>
              <FaArrowRight />
              <h5>{showMore ? "READ LESS" : "READ MORE"}</h5>
            </div>

            <button>ADD TO COLLECTION</button>
            <button>SOUVENIR</button>
          </div>
        )}
      </div>

      {/* Main Display */}
      <div className="main">
        <div className="image-container">
          <img src={image1} alt="Background" className="background" />
          <img src={bugdha2} alt="Statue" className="statue" />
        </div>
      </div>
    </div>
  );
};

export default App;
