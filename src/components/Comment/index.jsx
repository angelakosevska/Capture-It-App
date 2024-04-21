import { useState } from "react";
import "./style.css";
 const Comment = ({ onAddComment }) => {
  const [commentCount, setCommentCount] = useState(0);
  const [newComment, setNewComment] = useState("");

  const handleIncrement = () => {
    setCommentCount(commentCount + 1);
    if (onAddComment && newComment.trim()) {
      onAddComment(newComment);
      setNewComment(""); // Reset new comment after adding
    }
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  return (
    <div className="comment-counter">
      <span>{commentCount} Comments</span>
      <input
        type="text"
        placeholder="Add a comment"
        value={newComment}
        onChange={handleCommentChange}
      />
      <button onClick={handleIncrement}>Add Comment</button>
    </div>
  );
}

export default Comment;