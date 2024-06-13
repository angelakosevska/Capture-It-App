import "./style.css";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import PictureAndUsername from "../../../PictureAndUsername";
import { parseISO, format } from "date-fns";
TimeAgo.addLocale(en);

const CommentItem = ({ comment, username, profilePic, createdAt }) => {
  //const date= parseISO(createdAt);
  const date = new Date(createdAt);
  const localDate = date.toLocaleString();
  return (
    <>
      <div className="comment-show">
        <div className="who-what-when">
          <PictureAndUsername
            ppDimension="30px"
            username={username}
            profilePic={profilePic}
            textColor={"black"}
          />
          &nbsp;
          <ReactTimeAgo date={localDate} locale="en-US" />
        </div>
        <span>{comment}</span>
      </div>
    </>
  );
};

export default CommentItem;

/* ova se komentariteeee sho se prikazvat*/
