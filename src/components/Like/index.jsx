import { useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import "./style.css";
export function Like({ initialLikes = 0 }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    setLikeCount((prevCount) => (isLiked ? 1 : 0));
    setIsLiked(!isLiked);
  };

  const icon = isLiked ? (
    <FavoriteOutlinedIcon />
  ) : (
    <FavoriteBorderOutlinedIcon />
  );

  return (
    <>
      <button onClick={handleLike} className="buttonLike">
        {icon}
        <span>{likeCount} </span>
        <span>{isLiked ? "Liked" : "Like"}</span>
      </button>
    </>
  );
}
export default Like;
