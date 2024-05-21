//ova e overlay za slikite vo album i ima na hover samo koj ja postira slikata
import { Link } from "react-router-dom";
import PictureAndUsername from "../../PictureAndUsername";
import "./style.css";

const PictureCoverCardInAlbum = ({
  imageUrl,
  altText,
  picWidth,
  picHeight,

}) => {



  
  return (
    <>
      <div
        className="container-pic"
        style={{ width: picWidth, height: picHeight }}
      >
        <img src={imageUrl} alt={altText} className="picture" />
        <div className="overlay-pic">
          <div className="PandU-pic">
            <PictureAndUsername
              textColor={"black"}
              ppDimension={"30px"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default PictureCoverCardInAlbum;
/* ovde e izgledo na edna cover slika  */
