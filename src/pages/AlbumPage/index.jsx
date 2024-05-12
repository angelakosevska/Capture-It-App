import "./style.css";
import Breadcrumbs from "../../components/BreadCrumbs/index.jsx";
import PicturesInAlbumSection from "../../components/AlbumPagePictures/PicturesInAlbumSection/index.jsx";

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
