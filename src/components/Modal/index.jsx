import { useState } from "react";
import Modal from "react-modal";
import CommentsSection from "../CommentsSection/index";
import PictureContainer from "../PictureContainer/index";
import "./style.css";

Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Modalche = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div>
        <button className="button-modal" onClick={openModal}>Open</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
             <button onClick={closeModal}>close</button>
          <div className="Modalche">
            <div className="picture-modal">
              <PictureContainer />
            </div>
            <div className="comments-modal">
              <CommentsSection />
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Modalche;
