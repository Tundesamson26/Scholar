import React, { useState } from "react";
import Popup from "./Popup";

const Confirmation = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleonClose = ()=>{
    setShowPopup(false)
  }
  return (
    <div>
      <div>
        <h1>Confirmation</h1>
        <div>
          <button onClick={()=> setShowPopup(true)} className="inline-block px-6 py-2.5 bg-[#395241] text-[#F3EEE2] font-bold text-xl leading-tight rounded shadow-md">
            Confirm
          </button>
        </div>
      </div>

      <Popup onClose={handleonClose} visible={showPopup} />
    </div>
  );
};

export default Confirmation;
