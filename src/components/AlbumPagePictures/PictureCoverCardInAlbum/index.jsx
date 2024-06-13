//ova e overlay za slikite vo album i ima na hover samo koj ja postira slikata
import { Link } from "react-router-dom";
import PictureAndUsername from "../../PictureAndUsername";
import "./style.css";

const PictureCoverCardInAlbum = ({
  picture,
  profilePic,
  username,
  altText,
  picWidth,
  picHeight,
  onClick,
}) => {
  return (
    <>
      <div
        className="container-pic"
        style={{ width: picWidth, height: picHeight }}
      >
        <img src={picture} alt={altText} className="picture" />
        <div className="overlay-pic" onClick={onClick}>
          <div className="PandU-pic">
            <PictureAndUsername
              textColor={"white"}
              ppDimension={"30px"}
              username={username}
              profilePic={profilePic}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default PictureCoverCardInAlbum;
/* ovde e izgledo na edna cover slika  */
