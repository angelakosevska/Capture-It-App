import AlbumCoverCardInEvent from "../AlbumCoverCardInEvent";
import "./style.css";
const AlbumsInEventSection = () => {
  return (
    <>
      <div className="albumsContainer">
      
          <AlbumCoverCardInEvent
            imageUrl="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2hpdGUlMjBwaWN0dXJlJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D"
            altText="slika1"
          />
     
        
          <AlbumCoverCardInEvent
            imageUrl="https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjBwaWN0dXJlJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D"
            altText="slika2"
          />
      

          <AlbumCoverCardInEvent
            imageUrl="https://images.unsplash.com/photo-1494403687614-8ca3e13f154f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2hpdGUlMjBwaWN0dXJlJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D"
            altText="slika3"
          />
    

          <AlbumCoverCardInEvent
            imageUrl="https://images.unsplash.com/photo-1489769002049-ccd828976a6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdoaXRlJTIwcGljdHVyZSUyMGNvdmVyfGVufDB8fDB8fHww"
            altText="slika4"
          />


          <AlbumCoverCardInEvent
            imageUrl="https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdoaXRlJTIwcGljdHVyZSUyMGNvdmVyfGVufDB8fDB8fHww"
            altText="slika5"
          />
    
      </div>
    </>
  );
};

export default AlbumsInEventSection;
