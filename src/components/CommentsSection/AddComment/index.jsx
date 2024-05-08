import { useState } from "react";
import "./style.css";

import CommentInput from "./CommentInput";
import CommentItem from "./CommentItem";

const dummyComments = [];

const AddComment = (onAddComment) => {
  const [comments, setComments] = useState(dummyComments);

  const onComment = (newComment) => {
    if (newComment.body.trim()) {
      setComments((prev) => [newComment, ...prev]);
    } else console.warn("Add a comment ");
  };

  return (
    <>
      <div class="comment-input">
        <CommentInput onComment={onComment} />
      </div>
      <div className="all-comments">
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
    </>
  );
};

export default AddComment;
