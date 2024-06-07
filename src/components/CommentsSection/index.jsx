import AddComment from "../CommentsSection/AddComment";
import "./style.css";

const CommentsSection = ({pictureId}) => {
  return (
    <>
      <AddComment pictureId={pictureId}/>
    </>
  );
};

export default CommentsSection;
