import { Link } from "react-router-dom";
import { Layout } from "../../UI/Layout.jsx";
import Like from "../../components/Like/index.jsx";
import AddComment from "../../components/AddComment/index.jsx";
import "./style.css";
import CommentCount from "../../components/CommentCount/index.jsx";
import LikeCommentSection from "../../components/LikeCommentSection/index.jsx";
import AlbumCoverCardInEvent from "../../components/AlbumCoverCardInEvent/index.jsx";
export function Event() {
  return (
    <>
      <Layout>
        <div className="pageContainer">
          <div className="gridContainer">
            <div className="eventName">event name</div>
            <div className="description">Event decription</div>
            <div className="buttons">like and comment </div>

            <div className="comments"> display comments</div>
            <div className="addAcomment"> add a comment</div>
          </div>
          <div className="albumContainer">
            <div className="albums">
              <AlbumCoverCardInEvent
                imageUrl="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2hpdGUlMjBwaWN0dXJlJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D"
                altText="slika1"
              />
            </div>
            <div className="albums">
              <AlbumCoverCardInEvent
                imageUrl="https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjBwaWN0dXJlJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D"
                altText="slika2"
              />
            </div>
            <div className="albums">
              <AlbumCoverCardInEvent
                imageUrl="https://images.unsplash.com/photo-1494403687614-8ca3e13f154f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2hpdGUlMjBwaWN0dXJlJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D"
                altText="slika3"
              />
            </div>
            <div className="albums">
              <AlbumCoverCardInEvent
                imageUrl="https://images.unsplash.com/photo-1489769002049-ccd828976a6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdoaXRlJTIwcGljdHVyZSUyMGNvdmVyfGVufDB8fDB8fHww"
                altText="slika4"
              />
            </div>
            <div className="albums">
              <AlbumCoverCardInEvent
                imageUrl="https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdoaXRlJTIwcGljdHVyZSUyMGNvdmVyfGVufDB8fDB8fHww"
                altText="slika5"
              />
            </div>
            <div className="albums">
              <AlbumCoverCardInEvent
                imageUrl="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2hpdGUlMjBwaWN0dXJlJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D"
                altText="slika1"
              />
            </div>
            <div className="albums">
              <AlbumCoverCardInEvent
                imageUrl="https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjBwaWN0dXJlJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D"
                altText="slika2"
              />
            </div>
            <div className="albums">
              <AlbumCoverCardInEvent
                imageUrl="https://images.unsplash.com/photo-1494403687614-8ca3e13f154f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2hpdGUlMjBwaWN0dXJlJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D"
                altText="slika3"
              />
            </div>
            <div className="albums">
              <AlbumCoverCardInEvent
                imageUrl="https://images.unsplash.com/photo-1489769002049-ccd828976a6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdoaXRlJTIwcGljdHVyZSUyMGNvdmVyfGVufDB8fDB8fHww"
                altText="slika4"
              />
            </div>
            <div className="albums">
              <AlbumCoverCardInEvent
                imageUrl="https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdoaXRlJTIwcGljdHVyZSUyMGNvdmVyfGVufDB8fDB8fHww"
                altText="slika5"
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
//soodvetna pateka do albumite
export default Event;

//da se bira cover photo so tochno odredeni dimenzii


