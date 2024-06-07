import { useState } from "react";
import Modal from "react-modal";
import CommentsSection from "../../CommentsSection/index";
import PictureContainer from "../../PictureContainer/index";
import styles from "./style.module.css";
import NoBgButton from "../../Buttons/NoBGButton";
import CloseIcon from "@mui/icons-material/Close";
import PrimaryButton from "../../Buttons/PrimaryButton";
import SecondaryButton from "../../Buttons/SecondaryButton";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { Widgets } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import PictureAndUsername from "../../PictureAndUsername";

Modal.setAppElement("#root");
const customStyles = {
  content: {
    width: "90%",
    height: "85%",
    top: "52%",
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
  pictureId,
  fetchPicture,
  profilePicture,
  username,
}) => {
  const [error, setError] = useState("");
  const [commentCount, setCommentCount] = useState(0);
  const updateCommentCount = () => {
    setCommentCount(commentCount + 1);
  };

  const deletePicture = async () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this picture?"
    );
    if (!isConfirmed) return;

    try {
      await axios.delete(
        //delete picture
        `https://capture-it.azurewebsites.net/api/picture/${pictureId}`,
        {
          headers: {
            Authorization:
              " Bearer  eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia29zZXZza2FhIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIxMSIsImV4cCI6MTcxNzc5ODM1OH0.zSyPcsIZcL9NFBinzhvC1sZNMtN24FAMYpQGTXdFR1k",
          },
        }
      );
      fetchPicture([pictureId]);
    } catch (error) {
      setError(error);
      console.error("Error deleting album: ", error);
    }
    onClose();
    window.location.reload();
  };

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
            <NoBgButton
              buttonIcon={<DeleteIcon />}
              buttonHeight={"40px"}
              onClick={deletePicture}
              className={styles.deleteIcon}
            />

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
                <div className={styles.picDescription}>
                  <PictureAndUsername
                    profilePic={profilePicture}
                    username={username}
                    ppDimension={"25px"}
                  />
                  <p className={styles.description}>{picDescription} </p>
                </div>
                <div className={styles.modalButtons}>
                  <PrimaryButton
                    buttonHeight={"40px"}
                    buttonWidth={"50%"}
                    buttonText={`{} likes`}
                  />
                  <PrimaryButton
                    buttonHeight={"40px"}
                    buttonWidth={"50%"}
                    buttonText={`${commCount} comments `}
                    className={styles.primaryButtonComment}
                  />
                </div>
                <CommentsSection
                  pictureId={pictureId}
                  onCommentAdded={updateCommentCount}
                />
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
