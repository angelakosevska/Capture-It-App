import { useState, useEffect } from "react";
import "./style.css";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import CommentInput from "./CommentInput";
import CommentItem from "./CommentItem";

const AddComment = ({ onAddComment, maxHeight, userId, pictureId }) => {
  const [comments, setComments] = useState(
    /*{
    totalRecords: 0,
    pageNumber: 0,
    pageSize: 0,
    data: [],
  }*/ []
  );
  const [error, setError] = useState([]);
  const onComment = (newComment) => {
    if (newComment.comment1.trim()) {
      setComments((prev) => [...prev, newComment]);
    } else {
      return;
    }
  };

  const fetchCommentsOnPicture = async () => {
    try {
      const result = await axios.get(
        //get comments
        `https://capture-it.azurewebsites.net/api/comment?createdAt=2024-05-11&pictureId=${pictureId}&pageNumber=1&pageSize=100`,
        {
          headers: {
            Authorization:
              " Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia29zZXZza2FhIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIxMSIsImV4cCI6MTcxNzc5NDcyOH0.TfhBgWoAPtWWN8h49ml-N_9Vt1VEMV5FMofHM7FOvNo",
          },
        }
      );

      setComments(result?.data.data);
      console?.log("comments data", result.data?.data);
    } catch (error) {
      setError(error);
      console.error("error fetching comment data: ", error);
    }
  };
  useEffect(() => {
    fetchCommentsOnPicture();
  }, [pictureId]);

  return (
    <>
      <div className="all-comments">
        {comments.length > 0 ? (
          comments?.map((comment) => (
            <CommentItem
              key={comment.id}
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
          userId={userId}
          pictureId={pictureId}
        />
      </div>
    </>
  );
};

export default AddComment;
