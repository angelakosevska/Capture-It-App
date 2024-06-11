import axios from "axios";

import "./style.css";
import NoBGButton from "../../../Buttons/NoBGButton";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../../context";

const CommentInput = ({
  onComment,
  placeholderInput,
  buttonText,
  buttonIcon,
  buttonWidth,
  buttonHeight,
  pictureId,

  fetchCommentsOnPicture,
  fetchCommentCount,
  albumId,
  commentsCount,
}) => {
  const [commentBody, setCommentBody] = useState("");
  const { authToken, userId, username, login, logout } =
    useContext(AuthContext);

  const submitComment = async () => {
    if (commentBody.trim()) {
      try {
        const response = await axios.post(
          "https://capture-it.azurewebsites.net/api/comment",
          {
            pictureId,
            comment1: commentBody,
          },

          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        onComment(commentBody);
        console.log("comentdata", response.data);
        setCommentBody("");
        fetchCommentsOnPicture();
        // fetchCommentCount();
      } catch (error) {
        console.error("Error posting comment: ", error);
      }
    }
  };

  return (
    <>
      <input
        value={commentBody}
        onChange={(event) => setCommentBody(event.target.value)}
        placeholder={placeholderInput}
        className="input-comment"
        type="text"
      />
      <NoBGButton
        buttonText={buttonText}
        buttonIcon={buttonIcon}
        buttonWidth={buttonWidth}
        buttonHeight={buttonHeight}
        onClick={submitComment}
      />
    </>
  );
};

export default CommentInput;
/* ova e glavniot inpuut*/
