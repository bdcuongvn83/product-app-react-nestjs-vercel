import React, { useState } from "react";

function BasicPopup() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <button onClick={togglePopup}>Open Popup</button>
      {showPopup && (
        <div style={popupStyles}>
          <div style={popupContentStyles}>
            <h3>Popup Title</h3>
            <p>This is a simple popup!</p>
            <button onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

const popupStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const popupContentStyles = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  textAlign: "center",
};

export default BasicPopup;
