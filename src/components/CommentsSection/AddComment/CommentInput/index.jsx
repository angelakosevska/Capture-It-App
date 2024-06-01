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
  userId,
  pictureId,
}) => {
  const [commentBody, setCommentBody] = useState("");

  const submitComment = async () => {
    if (commentBody.trim()) {
      try {
        const response = await axios.post(
          "https://captureit.azurewebsites.net/api/comment",
          {
            userId: userId,
            pictureId: pictureId,
            comment1: commentBody,
            createdAt: new Date().toISOString(),
          },
          {
            headers: {
              Authorization:
                "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia29zZXZza2FhIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIxMCIsImV4cCI6MTcxNzI0OTk2NX0.V8KAfkJRWbLNrBTX_ufVZYgUriTTskxMgjuFbLfkfPk",
            },
          }
        );
        console.log(response.data);
        onComment(response.data);
        setCommentBody("");
        window.location.reload(); //refresh the page
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
