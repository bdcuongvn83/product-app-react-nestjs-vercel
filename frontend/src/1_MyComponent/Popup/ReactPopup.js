import React, { useState } from "react";
import Modal from "react-modal";

// Make sure to set the root element for accessibility purposes
Modal.setAppElement("#root");

function ReactPopup() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Open Popup</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            color: "black",
            margin: "auto",
            width: "400px",
            height: "200px",
            textAlign: "center",
          },
        }}
      >
        <h2>Popup Title</h2>
        <p>This is a popup using react-modal!SSS</p>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}

export default ReactPopup;
