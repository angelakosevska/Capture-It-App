import "./style.css";
import { useState } from "react";
import CommentInput from "../CommentInput";
import SendIcon from "@mui/icons-material/Send";
import NoBgButton from "../../../Buttons/NoBGButton";
import PictureAndUsername from "../../../PictureAndUsername";

const CommentItem = ({ comment, username, profilePic, createdAt }) => {
  return (
    <>
      <div className="comment-show">
        <div className="who-what-when">
          <PictureAndUsername ppDimension="30px" username={username} profilePic={profilePic}/>
          &nbsp;{createdAt}{" "}
        </div>
        <span>{comment}</span>
      </div>
    </>
  );
};

export default CommentItem;
/* ova se komentariteeee sho se prikazvat*/
