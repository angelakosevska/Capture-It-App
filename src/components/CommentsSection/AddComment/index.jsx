import { useState } from "react";
import "./style.css";
import SendIcon from '@mui/icons-material/Send';

import CommentInput from "./CommentInput";
import CommentItem from "./CommentItem";


const AddComment = (onAddComment, {maxHeight, userId, pictureId}) => {
  const [comments, setComments] = useState("");

  const onComment = (newComment) => {
    if (newComment.comment1.trim()) {
      setComments((prev) => [ ...prev,newComment]);
    } else{return};
  };



  return (
    <>
      <div className="all-comments" >
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
        onComment={onComment}
        userId={userId}
        pictureId={pictureId} />
      </div>
    </>
  );
};

export default AddComment;
