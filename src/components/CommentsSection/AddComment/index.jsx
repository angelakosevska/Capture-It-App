import { useState, useEffect } from "react";
import "./style.css";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import CommentInput from "./CommentInput";
import CommentItem from "./CommentItem";
import { PagesOutlined } from "@mui/icons-material";

const AddComment = ({ pictureId, albumId, fetchCommentCount }) => {
  const [error, setError] = useState([]);
  const [comments, setComments] = useState({
    totalRecords: 0,
    pageNumber: 0,
    pageSize: 100,
    data: [],
  });

  const fetchCommentsOnPicture = async () => {
    try {
      const result = await axios.get(
        //getcomments
        `https://capture-it.azurewebsites.net/api/comment?createdAt=2024-05-11&pictureId=${pictureId}&pageNumber=1&pageSize=100`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia29zZXZza2FhIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIxMSIsImV4cCI6MTcxNzg5NDcwM30.BQo93mli5Trtt0AJg1oBcx075kYYR4E4ZWRK1rAXnuo ",
          },
        }
      );

      setComments(result?.data);
      //console?.log("comments dataget", result?.data?.data);
    } catch (error) {
      setError(error);
      console.error("error fetching comment get data ", error);
    }
  };

  const onComment = (newComment) => {
    if (newComment.commentBody && newComment.commentBody.trim()) {
      setComments((prev) => [...prev, newComment]);
    } else {
      return;
    }
  };
  useEffect(() => {
    fetchCommentsOnPicture();
  }, [pictureId]);

  return (
    <>
      <div className="all-comments">
        {comments.totalRecords > 0 ? (
          comments.data.map((comment) => (
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
          fetchCommentsOnPicture={fetchCommentsOnPicture}
          fetchCommentCount={fetchCommentCount}
          albumId={albumId}
        />
      </div>
    </>
  );
};

export default AddComment;
