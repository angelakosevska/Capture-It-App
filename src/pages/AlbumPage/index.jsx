import { Layout } from "../../UI/Layout.jsx";
import "./style.css";

import PictureAndUsername from "../../components/PictureAndUsername/index.jsx";
import Breadcrumbs from "../../components/BreadCrumbs/index.jsx";
import  Like  from "../../components/Like/index.jsx";
import AlbumCoverCardInEvent from "../../components/AlbumCoverCardInEvent/index.jsx";
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
