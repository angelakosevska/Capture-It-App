import "./style.css";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import PictureAndUsername from "../../../PictureAndUsername";
import moment from "moment";

TimeAgo.addLocale(en);

const CommentItem = ({ comment, usernameCreator, profilePic, createdAt }) => {
  //const date= parseISO(createdAt);

  const date = new Date(createdAt);

  return (
    <>
      <div className="comment-show">
        <div className="who-what-when">
          <PictureAndUsername
            ppDimension="30px"
            username={usernameCreator}
            profilePic={profilePic}
            textColor={"black"}
          />
          &nbsp;
          {/*<ReactTimeAgo date={date} locale="en-US" />*/}
        </div>
        <span>{comment}</span>
      </div>
    </>
  );
};

export default CommentItem;

/* ova se komentariteeee sho se prikazvat*/
