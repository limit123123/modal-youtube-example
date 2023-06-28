import "./styles.css";
import Modal from "./Modal";
import React, { useState } from "react";

export default function App() {
  //先设置为false
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      <h1>Hello click on the button to open the modal.</h1>
      <button
        className="openModalBtn"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Open
      </button>
      {openModal && <Modal setOpenModal={setOpenModal} />}
    </div>
  );
}
