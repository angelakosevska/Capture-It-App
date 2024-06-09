import AddComment from "../CommentsSection/AddComment";
import "./style.css";


const CommentsSection = ({
  pictureId,
  onPrev,
  onNext,
  albumId,
  fetchCommentCount,
  fetchPictureComments,
  commentsCount,
  comments,
  fetchCommentsOnPicture
}) => {
  return (
    <>
      <AddComment
        pictureId={pictureId}
        albumId={albumId}
        fetchCommentCount={fetchCommentCount}
        fetchPictureComments={fetchPictureComments}
        comments={comments}
        commentsCount={commentsCount}
        fetchCommentsOnPicture={fetchCommentsOnPicture}
      />

    </>
  );
};

export default CommentsSection;
