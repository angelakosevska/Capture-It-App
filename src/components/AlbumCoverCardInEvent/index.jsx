//vo eventot ima povekje albumi site se javni, na hover mozi da izlegva overlay koj go kreira albumot i ime na albumot
import PictureAndUsername from "../PictureAndUsername";
import "./style.css";
const AlbumCoverCardInEvent = ({ imageUrl, altText }) => {
  return (
    <>
      <div className="container">
        <img src={imageUrl} alt={altText} className="image"/>
        
          <div className="overlay">
            <div className="PandU"><PictureAndUsername/></div>
         
        </div>
      </div>
    </>
  );
};
export default AlbumCoverCardInEvent;
