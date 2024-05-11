import { useState } from "react";
import "./style.css";
import SendIcon from '@mui/icons-material/Send';

import CommentInput from "./CommentInput";
import CommentItem from "./CommentItem";


const dummyComments = [];

const AddComment = (onAddComment) => {
  const [comments, setComments] = useState(dummyComments);
  let commentCount = 0;
  const onComment = (newComment) => {
    if (newComment.body.trim()) {
      setComments((prev) => [ ...prev,newComment]);
      commentCount++;
    } else{return};
  };

  return (
    <>
      <div className="all-comments">
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
      <div class="comment-input">
        <CommentInput 
        buttonHeight={"35px"}
        buttonWidth={"40px"}
        buttonIcon={<SendIcon/>}
        placeholderInput="Add a comment"
        onComment={onComment} />
      </div>
    </>
  );
};

export default AddComment;
