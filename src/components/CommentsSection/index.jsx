import AddComment from "../CommentsSection/AddComment";
import "./style.css";

const CommentsSection = ({pictureId, onCommentAdded, }) => {
  return (
    <>
      <AddComment pictureId={pictureId} onCommentAdded={onCommentAdded}/>
    </>
  );
};

export default CommentsSection;
