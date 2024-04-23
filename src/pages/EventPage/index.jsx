import { Link } from "react-router-dom";
import { Layout } from "../../UI/Layout.jsx";
import Like from "../../components/Like/index.jsx";
import AddComment from "../../components/AddComment/index.jsx";
import "./style.css";
import CommentCount from "../../components/CommentCount/index.jsx";
import LikeCommentSection from "../../components/LikeCommentSection/index.jsx";

export function Event() {
  return (
    <>
      <Layout>
        <div className="gridContainer">
          <div className="eventName">event name</div>
          <div className="description">Event decription</div>
          <div className="buttons">like and comment </div>
       
          <div className="comments"> display comments</div>
          <div className="addAcomment"> add a comment</div>
        </div>
        <div className="albumContainer"><div className="albums">albums in event</div>
          <div className="albums">albums in event</div>
          <div className="albums">albums in event</div>
          <div className="albums">albums in event</div> <div className="albums">albums in event</div> <div className="albums">albums in event</div>
          <div className="albums">albums in event</div>
          <div className="albums">albums in event</div>
          </div>
      </Layout>
    </>
  );
}
//soodvetna pateka do albumite
export default Event;
