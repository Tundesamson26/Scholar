import React, { useState } from "react";
import Popup from "./Popup";

const Confirmation = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleonClose = ()=>{
    setShowPopup(false)
  }
  return (
    <div>

        <div className='text-gray-900'>
            <h1 text-lg font-bold>Confirmation</h1>
            <div className='flex p-5 bg-gray-400'>
              <div>
                <h2>From address</h2>
                <h2>Script hash</h2>
                <h2>ADA sent</h2>
                <h2>Token recieved</h2>
                <h2>Total fees</h2>
                <h2>Deadline:</h2>
              </div>
              <div>
                <h2>addr93d9wek0wewjewas34asd3er4refsdf..</h2>
                <h2>drewrfe4323423432432434sdasdds</h2>
                <h2>500</h2>
                <h2>asset4303asd</h2>
                <h2>0.1634</h2>
                <h2>11/23/24</h2>
              </div>
            </div>
            <div className="m-auto text-center w-64">
            <button className="m-5 inline-block px-6 py-2.5 bg-[#395241] hover:bg-red-500 text-[#F3EEE2] font-bold text-xl leading-tight rounded shadow-md">
              Confirm
            </button>
          </div>

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
