import { Layout } from "../../UI/Layout.jsx";

import PictureAndUsername from "../../components/PictureAndUsername/index.jsx";

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
        
               
         
            </div>
          </main>
        </body>
      </Layout>
    </>
  );
}
export default Album;
//od slikite se ukluchva slikite so komentarite
