import { Layout } from "../UI/Layout";
import "./Album.css";
import { AlbumPicture } from "../components/Picture/AlbumPicture";
import { PPandUN } from "../components/PPandUN/PPandUN";
export function Album() {
  return (
    <>
      
        <Layout>
        <body>
          <main>
            <div className="AlbumName">
              <h1>Event Name / Album name by </h1>
              <PPandUN />
            </div>

            <div className="album-grid">
              <div>
                <AlbumPicture />
              </div>
              <div>
                <AlbumPicture />
              </div>
              <div>
                <AlbumPicture />
              </div>
              <div>
                <AlbumPicture />
              </div>
              <div>
                <AlbumPicture />
              </div>
              <div>
                <AlbumPicture />
              </div>
              <div>
                <AlbumPicture />
              </div>
              <div>
                <AlbumPicture />
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
