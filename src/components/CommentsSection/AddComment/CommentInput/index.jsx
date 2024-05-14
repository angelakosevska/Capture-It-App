import IconButton from "../../../Buttons/IconButton";

import "./style.css";

import { useState } from "react";


const CommentInput = ({ onComment, placeholderInput, buttonText, buttonIcon, buttonWidth, buttonHeight }) => {
  const [commentBody, setCommentBody] = useState("");

  return (
    <>
      <input
        value={commentBody}
        onChange={(event) => setCommentBody(event.target.value)}
        placeholder={placeholderInput}
        className="input-comment"
        type="text"
      />

      <IconButton
        buttonText={buttonText}
        buttonIcon={buttonIcon}
        buttonWidth={buttonWidth}
        buttonHeight={buttonHeight}
        onClick={() => {
          onComment({ body: commentBody, comments: [] });
          setCommentBody("")

        }}
      />
    </>
  );
};

export default CommentInput;
/* ova e glavniot inpuut*/