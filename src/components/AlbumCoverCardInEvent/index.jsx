//vo eventot ima povekje albumi site se javni, na hover mozi da izlegva overlay koj go kreira albumot i ime na albumot
import PictureAndUsername from "../PictureAndUsername";
import "./style.css";
const AlbumCoverCardInEvent = ({
  imageUrl,
  altText,
  picWidth,
  picHeight,
  username,
  albumName,
}) => {
  return (
    <>
      <div className="container" style={{ width: picWidth, height: picHeight }}>
        <img src={imageUrl} alt={altText} className="image" />
        <div className="overlay">
          <div className="PandU">
            <div className="position">
              <PictureAndUsername
                textColor={"white"}
                ppDimension={"25px"}
                username={username}
              />
              <p className="album-name">{albumName}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AlbumCoverCardInEvent;
/* ovde e izgledo na edna cover slika  */
