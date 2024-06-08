//vo eventot ima povekje albumi site se javni, na hover mozi da izlegva overlay koj go kreira albumot i ime na albumot
import CoverAlbum from "../../CoverAlbum";
import PictureAndUsername from "../../PictureAndUsername";
import "./style.css";
const AlbumCoverCardInEvent = ({
 imageUrl,
  altText,
  picWidth,
  picHeight,
  username,
  albumName,
  profilePic,
  onClick
}) => {
  return (
    <>
      <div className="container" style={{ width: picWidth, height: picHeight }} onClick={onClick}>
       
        <div className="overlay">
          <div className="PandU">
          <div className="album-name">{albumName}</div>
            <PictureAndUsername
              textColor={"var(--secondaryColor)"}
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
export default AlbumCoverCardInEvent;
/* ovde e izgledo na edna cover slika  */
