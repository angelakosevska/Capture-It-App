import { useState, useEffect } from "react";
import "./style.css";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import CommentInput from "./CommentInput";
import CommentItem from "./CommentItem";

import { PagesOutlined } from "@mui/icons-material";

const AddComment = ({
  pictureId,
  albumId,
  fetchCommentCount,
  comments,
  commentsCount,
  fetchCommentsOnPicture,
}) => {
  const [commentsGet, setCommentsGet] = useState(comments);
  const [commentsCountGet, setCommentsCountGet] = useState(commentsCount);
  

  const onComment = (newComment) => {
    if (newComment.commentBody && newComment.commentBody.trim()) {
      setCommentsGet((prev) => [...prev, newComment]);
    } else {
      return;
    }
  };


  return (
    <>
      <div className="all-comments">
        {commentsCount > 0 ? (
          comments.map((comment) => (
            <CommentItem
              key={comment.commentId}
              comment={comment.comment1}
              username={comment.user.username}
              profilePic={comment.user.profilePicture}
              createdAt={comment.createdAt}
    
            />
          ))
        ) : (
          <p>No comments yet. Be the first to comment!</p>
        )}
      </div>
      <div class="comment-input">
        <CommentInput
          buttonHeight={"35px"}
          buttonWidth={"40px"}
          buttonIcon={<SendIcon />}
          placeholderInput="Add a comment"
          onComment={onComment}
          pictureId={pictureId}
          fetchCommentCount={fetchCommentCount}
          albumId={albumId}
          commentsCount={commentsCount}
          fetchCommentsOnPicture={fetchCommentsOnPicture}
        />
      </div>
    </>
  );
};

export default AddComment;
