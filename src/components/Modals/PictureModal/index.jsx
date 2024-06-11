import { useState, useEffect, useContext } from "react";
import Modal from "react-modal";
import CommentsSection from "../../CommentsSection/index";
import PictureContainer from "../../PictureContainer/index";
import styles from "./style.module.css";
import NoBgButton from "../../Buttons/NoBGButton";
import CloseIcon from "@mui/icons-material/Close";
import PrimaryButton from "../../Buttons/PrimaryButton";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import PictureAndUsername from "../../PictureAndUsername";
import FavoriteIcon from "@mui/icons-material/Favorite"; //liked
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"; //like
import { AuthContext } from "../../../context";

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
  onClose,
  onNext,
  onPrev,
  pictureId,
  fetchPicture,
  profilePicture,
  usernameCreator,
  albumId,
  fetchPictureComments,
  comments,
  commentsCount,
  likesCount,
  fetchCommentsOnPicture,
  fetchCommentCount,
  postLike,
  deleteLike,
  hasLiked,
}) => {
  const { authToken, userId, username, login, logout } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  // const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(hasLiked);
  //polnokjen obid
  const [likeCount, setLikeCount] = useState(0);

  const fetchGetLike = async () => {
    try {
      const response = await axios.get(
        `https://capture-it.azurewebsites.net/api/like?pictureId=${pictureId}`,
        {
          headers: {
            Authorization: " Bearer  ${authToken} ",
          },
        }
      );
      setLikeCount(response.data.totalRecords);
      console.log("like count 12: ".response.data.totalRecords);
    } catch (error) {
      setError(error);
      console.error(" error fetching like count data ", error);
    }
  };

  useEffect(() => {
    fetchGetLike();
  }, [pictureId]);
  // get like od slikata

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
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      fetchPicture([pictureId]);
    } catch (error) {
      setError(error);
      console.error("Error deleting album: ", error);
    }
    onClose();
    fetchPicture();
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
                    buttonText={`${likeCount}`}
                    buttonIcon={<FavoriteIcon />}
                    //  onClick={}
                  />

                  <PrimaryButton
                    buttonHeight={"40px"}
                    buttonWidth={"50%"}
                    buttonText={`${commentsCount} comments `}
                    className={styles.primaryButtonComment}
                  />
                </div>
                <CommentsSection
                  pictureId={pictureId}
                  onPrev={onPrev}
                  onNext={onNext}
                  albumId={albumId}
                  fetchCommentCount={fetchCommentCount}
                  fetchPictureComments={fetchPictureComments}
                  comments={comments}
                  commentsCount={commentsCount}
                  likesCount={likesCount}
                  fetchCommentsOnPicture={fetchCommentsOnPicture}
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
