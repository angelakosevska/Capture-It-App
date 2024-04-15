import { Layout } from "../UI/Layout";
import "./Album.css";
import { AlbumPicture } from "../components/Picture/AlbumPicture";
import { PPandUN } from "../components/PPandUN/PPandUN";

import Breadcrumbs from "../components/BreadCrumbs/BreadCrumb";
export function Album() {
  return (
    <>
      
        <Layout>
        <body>
          <main>
          
              <Breadcrumbs/> 
           

            <div className="album-grid">
              <div>
           <AlbumPicture/>
              </div>
              <div>
             
              </div>
              <div>
         
              </div>
              <div>
              
              </div>
              
              <div>
               
              </div>
            </div>
          </main>
          </body>
        </Layout>
     
    </>
  );
}
export default Album;
//od slikite se ukluchva slikite so komentarite
