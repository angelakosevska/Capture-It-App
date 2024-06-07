import axios from "axios";
import IconButton from "../../../Buttons/IconButton";

import "./style.css";
import NoBGButton from "../../../Buttons/NoBGButton";
import { useEffect, useState } from "react";

const CommentInput = ({
  onComment,
  placeholderInput,
  buttonText,
  buttonIcon,
  buttonWidth,
  buttonHeight,
  pictureId,
  onCommentAdded
}) => {
  const [commentBody, setCommentBody] = useState("");

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
              Authorization:
                "Bearer  eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia29zZXZza2FhIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIxMSIsImV4cCI6MTcxNzc5ODM1OH0.zSyPcsIZcL9NFBinzhvC1sZNMtN24FAMYpQGTXdFR1k",
            },
          }
        );

        onComment(response.data);
        console.log(response.data);
        setCommentBody("");
        onCommentAdded();
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
