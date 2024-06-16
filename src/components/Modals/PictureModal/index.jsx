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
import { FavoriteBorderOutlined, HideImageRounded } from "@mui/icons-material";

Modal.setAppElement("#root");
const customStyles = {
  content: {
    width: "90%",
    height: "90%",
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
  fetchCommentsOnPicture,
  fetchCommentCount,
}) => {
  const { authToken, userId, username, login, logout } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [likeId, setLikeId] = useState(0);
  const [likesCount, setLikesCount] = useState(0);
  const [userLiked, setUserLiked] = useState(false);

  const handlePrevPic = () => {
    onPrev();
    fetchLikesOnPicture();
  };
  const handleNextPic = () => {
    onNext();
    fetchLikesOnPicture();
  };
  // get likes od slikata
  const fetchLikesOnPicture = async () => {
    try {
      const response = await axios.get(
        `https://capture-it.azurewebsites.net/api/like?pictureId=${pictureId}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      setLikesCount(response.data.totalRecords);
      const likes = response.data.data;
      const userLiked = likes.some((like) => like.userId === userId);

      setIsLiked(userLiked);

      if (userLiked) {
        const userLike = likes.find((like) => like.userId === userId);
        setLikeId(userLike.likeId);
      }
      setUserLiked(userLiked);
      setIsLiked(userLiked);
      console.log(" users that like this album", response.data.data.userId);
    } catch (error) {
      console.log("error fetching likes", error);
    }
  };

  useEffect(() => {
    fetchLikesOnPicture();
  }, [pictureId]);

  const handleLike = async () => {
    if (userLiked) {
      try {
        deleteLike(likeId);
      } catch (error) {
        console.error("Error deleting like: ", error);
      }
    } else {
      try {
        postLike(pictureId);
      } catch (error) {
        console.error("Error posting like: ", error);
      }
    }
    fetchLikesOnPicture();
  };

  const postLike = async (pictureId) => {
    try {
      const response = await axios.post(
        `https://capture-it.azurewebsites.net/api/like`,
        { pictureId },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      setLikeId(response.likeId);
      setIsLiked(true);
      fetchLikesOnPicture();
      console.log("Like posted ", response.data);
    } catch (error) {
      console.error("error posting like", error);
    }
  };

  const deleteLike = async (likeId) => {
    try {
      await axios.delete(
        //delete album
        `https://capture-it.azurewebsites.net/api/like/${likeId}`,
        {
          headers: {
            Authorization: ` Bearer ${authToken}`,
          },
        }
      );
      setIsLiked(false);
      fetchLikesOnPicture();
    } catch (error) {
      setError(error);
      console.error("Error deleting like: ", error);
    }
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
              onClick={handlePrevPic}
            ></NoBgButton>

            <div className={styles.pictureAndComments}>
              <div className={styles.pictureModal}>
                <PictureContainer imageUrl={imageUrl} />
              </div>
              <div className={styles.commentsModal}>
                <div className={styles.picDescription}>
                  <PictureAndUsername
                    profilePic={profilePicture}
                    username={usernameCreator}
                    ppDimension={"25px"}
                    textColor={"black"}
                  />
                  <p className={styles.description}>{picDescription} </p>
                </div>
                <div className={styles.modalButtons}>
                  <PrimaryButton
                    buttonHeight={"40px"}
                    buttonWidth={"50%"}
                    buttonText={`${likesCount}`}
                    buttonIcon={
                      isLiked ? (
                        <FavoriteIcon />
                      ) : (
                        <FavoriteBorderOutlinedIcon />
                      )
                    }
                    onClick={handleLike}
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
              onClick={handleNextPic}
            ></NoBgButton>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Modalche;
