import AddComment from "../CommentsSection/AddComment";
import "./style.css";

const CommentsSection = ({pictureId, onPrev, onNext, albumId,fetchCommentCount }) => {
  return (
    <>
      <AddComment pictureId={pictureId} albumId={albumId} fetchCommentCount={fetchCommentCount}/>
    </>
  );
};

export default CommentsSection;
