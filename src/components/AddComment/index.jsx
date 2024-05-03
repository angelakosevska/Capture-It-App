import { useState } from "react";
import "./style.css";
import PrimaryButton from "../Buttons/PrimaryButton";

const dummyComments = [
  {
    id: "1",
    body: "This is comment 1",
  },
  {
    id: "2",
    body: "This is comment 2",
  },
  {
    id: "3",
    body: "This is comment 3",
  },
];

const AddComment = ({ onAddComment }) => {
  const [comments, setComments] = useState(dummyComments);
  const [commentBody, setCommentBody] = useState("");

  const onComment = () => {
    const newComment = {
      id: (comments.length +1).toString(),
      body: commentBody
    };

    setComments((prev) => [newComment, ...prev]);
    setCommentBody("");
  };
  return (
    <>
      <div class="comment-input">
        <input
          value={commentBody}
          onChange={(event) => setCommentBody(event.target.value)}
          placeholder="Add a comment"
          className="input-comment"
          type="text"
        />
        <PrimaryButton buttonText="Comment" onClick={onComment} />
      </div>
      <div className="all-comments">
        {comments.map((comments) => (
          <div className="comment-show">{comments.body}</div>
        ))}
      </div>
    </>
  );
};

export default AddComment;

