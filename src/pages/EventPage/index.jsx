import { Link } from "react-router-dom";
import { Layout } from "../../UI/Layout.jsx";
import  Like from "../../components/Like/index.jsx";
import Comment from "../../components/Comment/index.jsx";
import "./event.css";
import { AlbumPicture } from "../components/Picture/AlbumPicture";
export function Event() {
  return (
    <>
      <Layout>
        <div className="containerE">
          <div className="picture">
            <AlbumPicture />
          </div>
          <div className="picture">
            <AlbumPicture />
          </div>
          <div className="picture">
            <AlbumPicture />
          </div>
          <div className="picture">
            <AlbumPicture />
          </div>
          <div className="picture">
            <AlbumPicture />
          </div>
          <div className="picture">
            <AlbumPicture />
          </div>
          <div className="picture">
            <AlbumPicture />
          </div>
        </div>

        <aside></aside>
      </Layout>
    </>
  );
}
//soodvetna pateka do albumite
export default Event;
