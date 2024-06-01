import { useState } from "react";
import Modal from "react-modal";
import CommentsSection from "../CommentsSection/index";
import PictureContainer from "../PictureContainer/index";
import styles from "./style.module.css";
import NoBgButton from "../Buttons/NoBGButton";
import CloseIcon from "@mui/icons-material/Close";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

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

const Modalche = ({
  imageUrl,
  picDescription,
  commCount,
  onClose,
  onNext,
  onPrev,
}) => {
  return (
    <>
      <div>
        <Modal
          isOpen={!!imageUrl}
          onRequestClose={onClose}
          style={customStyles}
          contentLabel="Picture Modal"
        >
          <div className={styles.closeModalButton}>
            <NoBgButton onClick={onClose} buttonIcon={<CloseIcon />}>
              close
            </NoBgButton>
          </div>
          <div className={styles.arrowsAndMain}>
            <NoBgButton
              buttonIcon={<NavigateBeforeIcon />}
              onClick={onPrev}
            ></NoBgButton>

            <div className={styles.pictureAndComments}>
              <div className={styles.pictureModal}>
                <PictureContainer imageUrl={imageUrl} />
              </div>
              <div className={styles.commentsModal}>
                <div className={styles.picDescription}>{picDescription}</div>
                <div className={styles.modalButtons}>
                  <SecondaryButton
                    buttonHeight={"40px"}
                    buttonWidth={"50%"}
                    buttonText={"like"}
                  />
                  <div className={styles.commentCount}>{commCount} comments</div>
                </div>
                <CommentsSection />
              </div>
            </div>

            <NoBgButton
              buttonIcon={<NavigateNextIcon />}
              onClick={onNext}
            ></NoBgButton>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Modalche;
