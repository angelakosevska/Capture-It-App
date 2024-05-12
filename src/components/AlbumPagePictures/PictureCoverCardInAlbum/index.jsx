//ova e overlay za slikite vo album i ima na hover samo koj ja postira slikata
import PictureAndUsername from "../../PictureAndUsername";
import "./style.css";

const PictureCoverCardInAlbum = ({
  imageUrl,
  altText,
  picWidth,
  picHeight,
  username,
  albumName,
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
              username={username}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default PictureCoverCardInAlbum;
/* ovde e izgledo na edna cover slika  */
