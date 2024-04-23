//vo eventot ima povekje albumi site se javni, na hover mozi da izlegva overlay koj go kreira albumot i ime na albumot
import PictureAndUsername from "../PictureAndUsername";
import "./style.css";
const AlbumCoverCardInEvent = ({ imageUrl, altText }) => {
  return (
    <>
      <div className="container">
        <img src={imageUrl} alt={altText} />
        <div className="imageShadow">
          <img
            src="https://images.unsplash.com/photo-1711699487054-aca10a6b85ad?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="fixnagoleminaslika"
            className="image"
          />
          <div className="overlay">
            <div className="PandU"><PictureAndUsername/></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AlbumCoverCardInEvent;
