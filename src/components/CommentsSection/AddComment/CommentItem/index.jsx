
import "./style.css";
import { useState } from "react";
import CommentInput from "../CommentInput";
import SendIcon from "@mui/icons-material/Send";
import NoBgButton from "../../../Buttons/NoBGButton";
import PictureAndUsername from "../../../PictureAndUsername";

const CommentItem = ({ comment }) => {
  const [isReplying, setIsReplying] = useState(false);
  const [comments, setComments] = useState(comment.comments);

  const onComment = (newComment) => {
    if (newComment.body.trim()) {
      setComments((prevReplies) => [...prevReplies, newComment])
      setIsReplying(false);
    } else {
      return;
    }
  };

  return (
    <>
      <div className="comment-show">
        <div className="who-what-when"><PictureAndUsername ppDimension="30px"
        username={"@angela124"}/>&nbsp;12:45PM </div>
        <span>{comment.body}</span>
      
      {isReplying ? (
        <NoBgButton
          buttonText="Cancel"
          buttonWidth="70px"
          buttonHeight="auto"
          onClick={() => setIsReplying(false)}
        />
      ) : (
        <NoBgButton
          buttonText="Reply"
          buttonWidth="70px"
          onClick={() => setIsReplying(true)}
        />
      )}

      {isReplying && (
        <CommentInput
          buttonHeight={"35px"}
          buttonWidth={"40px"}
          placeholderInput="Reply"
          buttonIcon={<SendIcon />}
          onComment={onComment}
        />
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
/* ova se komentariteeee*/
