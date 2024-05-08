import PrimaryButton from "../../../Buttons/PrimaryButton";
import "./style.css";
import { useState } from "react";
import CommentInput from "../CommentInput";

const CommentItem = ({ comment }) => {
  const [isReplying, setIsReplying] = useState(false);
  const [comments, setComments] = useState(comment.comments);

  const onComment = (newComment) => {
    if (newComment.body.trim()) {
      setComments((prevReplies) => [newComment, ...prevReplies]);
    } else console.warn("empty");
  };

  return (
    <>
      <div className="comment-show">
        <span>{comment.body}</span>
        {isReplying ? (
          <PrimaryButton
            buttonText="Cancel"
            buttonWidth="100px"
            onClick={() => setIsReplying(false)}
          />
        ) : (
          <PrimaryButton
            buttonText="Reply"
            buttonWidth="100px"
            onClick={() => setIsReplying(true)}
          />
        )}

        {isReplying && (
          <CommentInput placeholderInput="reply" onComment={onComment} />
        )}
        {comments &&
          comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
      </div>
    </>
  );
};

export default CommentItem;
