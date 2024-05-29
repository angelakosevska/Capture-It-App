import { useState } from "react";
import Modal from "react-modal";
import CommentsSection from "../CommentsSection/index";
import PictureContainer from "../PictureContainer/index";
import "./style.css";
import NoBgButton from "../Buttons/NoBGButton";
import CloseIcon from "@mui/icons-material/Close";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";

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

const Modalche = ({ imageUrl, picDescription, commCount, onClose }) => {
  return (
    <>
      <div>
        <Modal
          isOpen={!!imageUrl}
          onRequestClose={onClose}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="modal-content">
            <div className="close-modal-button">
              <NoBgButton onClick={onClose} buttonIcon={<CloseIcon />}>
                close
              </NoBgButton>
            </div>
            <div className="Modalche">
              <div className="picture-modal">
                <PictureContainer imageUrl={imageUrl} />
              </div>
              <div className="comments-modal">
                <div className="picDescription">{picDescription}</div>
                <div className="modal-buttons">
                  <SecondaryButton
                    buttonHeight={"40px"}
                    buttonWidth={"50%"}
                    buttonText={"like"}
                  />
                  <div className="comment-count">{commCount} comments</div>
                </div>
                <CommentsSection />
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Modalche;
