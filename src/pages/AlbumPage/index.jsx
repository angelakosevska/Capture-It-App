import "./style.css";
import Breadcrumbs from "../../components/BreadCrumbs/index.jsx";
import PicturesInAlbumSection from "../../components/AlbumPagePictures/PicturesInAlbumSection/index.jsx";
import PrimaryButton from "../../components/Buttons/PrimaryButton/index.jsx";

export function Album() {
  return (
    <>
      <div className="breadCrumbs-counters">
        <div className="BreadC-position">
          <Breadcrumbs />
        </div>
        <div className="counters">
          <div className="like-counter counter"> 22 likes</div>
          <div className="comment-counter counter">15 comments</div>
        </div>
        <div>
        <PrimaryButton
          buttonWidth={"150px"}
          buttonHeight={"40px"}
          buttonText={"Invite People"}
        />
      </div>
      </div>
 
      <div className="all-in-albums">
        <div className="containerForPictures">
          <PicturesInAlbumSection picEHeight={"300px"} picEWidth={"225px"} />
        </div>
      </div>
    </>
  );
}
export default Album;
//od slikite se ukluchva slika so komentarite
