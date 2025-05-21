import React, { useState } from "react";
import Modal from "react-modal";

// Set the app element for accessibility
Modal.setAppElement("#root");

function ReactPopup2() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)} // Close modal when pressing Esc
        shouldCloseOnOverlayClick={false} // Disable closing on overlay click
        style={{
          overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
          content: {
            color: "black",
            margin: "auto",
            width: "400px",
            height: "200px",
            textAlign: "center",
          },
        }}
      >
        {/* Add an "X" button for closing the modal */}
        <button
          onClick={() => setModalIsOpen(false)}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "transparent",
            border: "none",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          &times;
        </button>

        <h2>Modal Title</h2>
        <p>This is a modal that only closes with the "X" button.</p>
      </Modal>
    </div>
  );
}

export default ReactPopup2;
