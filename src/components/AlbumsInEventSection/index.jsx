import AlbumCoverCardInEvent from "../AlbumCoverCardInEvent";
import PhotoAlbum from "react-photo-album";
import "./style.css";

const AlbumsInEventSection = () => {
  const albumCoverPhotos = [
    {
      key: "1",
      src: "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2hpdGUlMjBwaWN0dXJlJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D",
      alt: "slika1",
    },
    {
      key: "2",
      src: "https://images.unsplash.com/photo-1494403687614-8ca3e13f154f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2hpdGUlMjBwaWN0dXJlJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D",
      alt: "slika3",
    },
    {
      key: "3",
      src: "https://images.unsplash.com/photo-1489769002049-ccd828976a6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdoaXRlJTIwcGljdHVyZSUyMGNvdmVyfGVufDB8fDB8fHww",
      alt: "slika4",
    },
    {
      key: "4",
      src: "https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdoaXRlJTIwcGljdHVyZSUyMGNvdmVyfGVufDB8fDB8fHww",
      alt: "slika5",
    },
    {
      key: "5",
      src: "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2hpdGUlMjBwaWN0dXJlJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D",
      alt: "slika1",
    },
    {
      key: "6",
      src: "https://images.unsplash.com/photo-1494403687614-8ca3e13f154f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2hpdGUlMjBwaWN0dXJlJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D",
      alt: "slika3",
    },
    {
      key: "1",
      src: "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2hpdGUlMjBwaWN0dXJlJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D",
      alt: "slika1",
    },
    {
      key: "2",
      src: "https://images.unsplash.com/photo-1494403687614-8ca3e13f154f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2hpdGUlMjBwaWN0dXJlJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D",
      alt: "slika3",
    },
    {
      key: "3",
      src: "https://images.unsplash.com/photo-1489769002049-ccd828976a6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdoaXRlJTIwcGljdHVyZSUyMGNvdmVyfGVufDB8fDB8fHww",
      alt: "slika4",
    },
    {
      key: "4",
      src: "https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdoaXRlJTIwcGljdHVyZSUyMGNvdmVyfGVufDB8fDB8fHww",
      alt: "slika5",
    },
    {
      key: "5",
      src: "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2hpdGUlMjBwaWN0dXJlJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D",
      alt: "slika1",
    },
  ];

  return (
    <>
      {albumCoverPhotos.map((albumCoverPhotos) => (
        <AlbumCoverCardInEvent
          imageUrl={albumCoverPhotos.src}
          altText={albumCoverPhotos.alt}
        />
      ))}
    </>
  );
};

export default AlbumsInEventSection;
/* ovde samo se povikva durgata komponenta za da se prikazat mapiranite sliki */
/*

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
    <AlbumCoverCardInEvent
            imageUrl="https://images.unsplash.com/photo-1494403687614-8ca3e13f154f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2hpdGUlMjBwaWN0dXJlJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D"
            altText="slika3"
          />
          */
