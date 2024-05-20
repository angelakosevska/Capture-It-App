//vo eventot ima povekje albumi site se javni, na hover mozi da izlegva overlay koj go kreira albumot i ime na albumot
import PictureAndUsername from "../../PictureAndUsername";
import "./style.css";
const AlbumCoverCardInEvent = ({
  imageUrl,
  altText,
  picWidth,
  picHeight,
  username,
  albumName,
  profilePic
}) => {
  return (
    <>
      <div className="container" style={{ width: picWidth, height: picHeight }}>
        <img src={imageUrl} alt={altText} className="image" />
        <div className="overlay">
          <div className="PandU">
            <PictureAndUsername
              textColor={"rgb(168, 166, 166)"}
              ppDimension={"30px"}
              username={username}
              imageUrl={profilePic}
            />
            <div className="album-name">{albumName}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AlbumCoverCardInEvent;
/* ovde e izgledo na edna cover slika  */
