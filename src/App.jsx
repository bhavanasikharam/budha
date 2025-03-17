import React, { useState } from "react";
import "./App.css";
import image1 from "./images/image1.png";
import bugdha2 from "./images/bugdha2.png";
import { FaHeart, FaShareAlt, FaEye, FaArrowRight } from "react-icons/fa";
import { useMediaQuery } from 'react-responsive';

const App = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [likes, setLikes] = useState(0);
  const [showMore, setShowMore] = useState(false); // State for Read More functionality
  const shares = 120;
  const views = 27;

  return (
    
<div className="container">
  {isTabletOrMobile ? (
        <p></p>
      ) : (
        <p></p>
      )}
   
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <button className="toggle-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? "←" : "→"}
        </button>
        {isSidebarOpen && (
          <div className="content">
            <p style={{ color: "#333" , fontSize:"20px"}}>MAITREYA    BUDDHA <br />
                IN     GESTURE     OF <br />
                     FEARLESSNESS<br />
                (ABHAYA     MUDRA)</p>

            {/* Icon Section */}
            <div className="icon-section">
              {/* Like Button */}
              <div className="icon" style={{ display: "flex", flexDirection: "column", alignItems: "center" }} onClick={() => setLikes(likes + 1)}>
                <FaHeart />
                <span>{likes}</span>
              </div>

              {/* Share Count */}
              <div className="icon" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <FaShareAlt size={30} />
                <span>{shares}</span>
              </div>

              {/* View Count */}
              <div className="icon" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <FaEye />
                <span>{views}</span>
              </div>
            </div>

            <p>Dynasty : Ahichchatra <br />
            Period : 200 CE <br />
            Material : Sandstone <br />
            Location : National Museum</p>

            <h3 style={{ color: "#333" }}>Description :</h3>
            <p style={{ color: "#444" }}>
              Maitreya, the future Buddha-to-be, resides in the Tushita heaven as a bodhisattva waiting to redeem humanity.
              {showMore && (
                <>
                  {" "}In Buddhist traditions, Maitreya is the eighth Buddha, a successor of the seven historical Buddhas (sapta-manushi Buddhas).
                  The Digha Nikaya mentions that Maitreya Buddha will be born in Ketumati, in present-day Varanasi, Uttar Pradesh.
                  As a bodhisattva, Maitreya wears heavy adornments, including earrings, wristlets, necklaces, and an amulet.
                </>
              )}
            </p>

          {/* Read More / Read Less button */}
            <div style={{ display: "flex", alignItems: "center", color: "peru", cursor: "pointer" }} onClick={() => setShowMore(!showMore)}>
              <FaArrowRight style={{ marginRight: "8px" }} />
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

export default App;