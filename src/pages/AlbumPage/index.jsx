import { Layout } from "../../UI/Layout.jsx";
import "./Album.css";
import { AlbumPicture } from "../components/Picture/AlbumPicture";
import PictureAndUsername from "../../components/PictureAndUsername/index.jsx";
import { PrivateEvent } from "../components/Picture/PrivateEvent";
import Breadcrumbs from "../../components/BreadCrumbs/index.jsx";
import  Like  from "../../components/Like/index.jsx";
export function Album() {
  return (
    <>
      <Layout>
        <body>
          <main>
            <div className="BreadC-position">
              <Breadcrumbs />
            </div>
            <div className="album-grid">
              <div>
                <PrivateEvent />
              </div>
              <div>
                <AlbumPicture imageUrl="https://images.pexels.com/photos/6794043/pexels-photo-6794043.jpeg?cs=srgb&dl=pexels-leeloo-the-first-6794043.jpg&fm=jpg" />
              </div>
              <div>
                <AlbumPicture imageUrl="https://images.pexels.com/photos/6794043/pexels-photo-6794043.jpeg?cs=srgb&dl=pexels-leeloo-the-first-6794043.jpg&fm=jpg" />
              </div>
              <div>
                <AlbumPicture imageUrl="https://images.pexels.com/photos/6794043/pexels-photo-6794043.jpeg?cs=srgb&dl=pexels-leeloo-the-first-6794043.jpg&fm=jpg" />
              </div>
              <AlbumPicture imageUrl="https://images.pexels.com/photos/6794043/pexels-photo-6794043.jpeg?cs=srgb&dl=pexels-leeloo-the-first-6794043.jpg&fm=jpg" />
              <div>
                <AlbumPicture imageUrl="https://images.pexels.com/photos/6794043/pexels-photo-6794043.jpeg?cs=srgb&dl=pexels-leeloo-the-first-6794043.jpg&fm=jpg" />
              </div>
              <div>
                <AlbumPicture imageUrl="https://images.pexels.com/photos/6794043/pexels-photo-6794043.jpeg?cs=srgb&dl=pexels-leeloo-the-first-6794043.jpg&fm=jpg" />
              </div>
              <Like />
            </div>
          </main>
        </body>
      </Layout>
    </>
  );
}
export default Album;
//od slikite se ukluchva slikite so komentarite
