import PrimaryButton from "../../../Buttons/PrimaryButton";
import "./style.css";

import { useState } from "react";

const CommentInput = ({ onComment, placeholderInput }) => {
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

      <PrimaryButton
        buttonText="Comment"
        buttonWidth="150px"
        onClick={() => {
          onComment({ body: commentBody, comments: [] });
          setCommentBody("");
        }}
      />
    </>
  );
};

export default CommentInput;
