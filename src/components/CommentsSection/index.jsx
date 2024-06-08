import AddComment from "../CommentsSection/AddComment";
import "./style.css";

const CommentsSection = ({pictureId, onComment}) => {
  return (
    <>
      <AddComment pictureId={pictureId} onComment={onComment}/>
    </>
  );
};

export default CommentsSection;
