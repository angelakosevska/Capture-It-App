import { useState } from "react";
import Modal from "react-modal";
import CommentsSection from "../CommentsSection/index";
import PictureContainer from "../PictureContainer/index";
import "./style.css";
import NoBgButton from "../Buttons/NoBGButton";
import CloseIcon from "@mui/icons-material/Close";

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
        <NoBgButton
          className="button-modal"
          onClick={openModal}
          buttonText={"open"}
          buttonHeight={"30px"}
          buttonWidth={"60px"}
        />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <NoBgButton onClick={closeModal} buttonIcon={<CloseIcon />}>
            close
          </NoBgButton>
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
