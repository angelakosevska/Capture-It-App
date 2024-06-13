import PictureCoverCardInAlbum from "../PictureCoverCardInAlbum";
import "./style.css";


const PicturesInAlbumSection = ({
  picEWidth,
  picEHeight,
  picture,
  profilePic,
  username,
  onClick
}) => {
  return (
    <>
      <PictureCoverCardInAlbum
        picture={picture}
        picWidth={picEWidth}
        picHeight={picEHeight}
        profilePic={profilePic}
        username={username}
        onClick={onClick}
      />
    </>
  );
};

export default PicturesInAlbumSection;
/* ovde samo se povikva durgata komponenta za da se prikazat mapiranite sliki */

