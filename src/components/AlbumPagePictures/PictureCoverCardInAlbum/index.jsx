//ova e overlay za slikite vo album i ima na hover samo koj ja postira slikata
import { Link } from "react-router-dom";
import PictureAndUsername from "../../PictureAndUsername";
import "./style.css";

const PictureCoverCardInAlbum = ({
  slika,
  imageUrl,
  username,
  altText,
  picWidth,
  picHeight,
  onClick
}) => {
  return (
    <>
      <div
        className="container-pic"
        style={{ width: picWidth, height: picHeight }}
      >
        <img src={slika} alt={altText} className="picture" />
        <div className="overlay-pic" onClick={onClick}>
          <div className="PandU-pic">
            <PictureAndUsername textColor={"black"} ppDimension={"30px"} username={username} imageUrl={imageUrl}/>
          </div>
        </div>
      </div>
    </>
  );
};
export default PictureCoverCardInAlbum;
/* ovde e izgledo na edna cover slika  */
