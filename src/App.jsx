import React, { useState } from "react";
import "./App.css";
import image1 from "./images/image1.png";
import bugdha2 from "./images/bugdha2.png";
import { FaHeart,FaShareAlt, FaEye } from "react-icons/fa"; 
import { FaArrowRight } from "react-icons/fa"; 

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [likes, setLikes] = useState(0);
  const shares = 120; 
  const views = 27;

  return (
    <div className="container">
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <button className="toggle-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? "←" : "→"}
        </button>
        {isSidebarOpen && (
          <div className="content">
            <h4>MAITREYA BUDDHA IN GESTURE OF FEARLESSNESS (ABHAYA MUDRA)</h4>
     
  {/* Icon Section */}
        <div className="icon-section">
  {/* Like Button */}
  <div className="icon" style={{ display: "flex", flexDirection: "column", alignItems: "center" }} onClick={() => setLikes(likes + 1)}>
  <FaHeart />
  <span>{likes}</span>
  </div>

   {/* Share Count */}
         <div className="icon" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <FaShareAlt size={30} /> {/* Share Icon with custom color */}
    <span>{shares}</span>
  </div>

  {/* View Count */}
  <div className="icon" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
  <FaEye />
  <span>{views}</span>
  </div>

         </div>
            <p><strong>Dynasty:</strong> Ahichchatra</p>
            <p><strong>Period:</strong> 200 CE</p>
            <p><strong>Material:</strong> Sandstone</p>
            <p><strong>Location:</strong> National Museum</p>
           
           <h4>Description</h4>
           <p>Maitreya, the feture Buddha to be, resides in the Tushita heaven as a bodhisattva waiting to redeem humanity.
            in Buddhisattva, Maitreya is the eighth Buddha, a successor of the seven historical Buddhas (sapta-manushi Buddhas). 
            The Digha Nikaya mention, Maitreya Buddha will be born in Ketumati, in present-day Varanasi, Uttar Pradesh. As a bodhisattva. 
            Maitreya Wears a heavily adorened with earrings, Wristlets, necklaces, and an amulet.</p>
       
     <div style={{ display: "flex", alignItems: "center", color: "peru" }}>
  <FaArrowRight style={{ marginRight: "8px", }} /> {/* Arrow mark before the text */}
  <h5>READ MORE</h5>
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

