import AlbumCoverCardInEvent from "../AlbumCoverCardInEvent";

import "./style.css";

const AlbumsInEventSection = ({picEWidth, picEHeight}) => {
  const albumCoverPhotos = [
    {
      key: "1",
      src: "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2hpdGUlMjBwaWN0dXJlJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D",
      alt: "slika1",
      username: "@angela1234",
      albumName:"ajshdfkaa"
    },
    {
      key: "2",
      src: "https://images.unsplash.com/photo-1494403687614-8ca3e13f154f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2hpdGUlMjBwaWN0dXJlJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D",
      alt: "slika3",
      username: "@angela134",
      albumName:"ajshdfkaa"
    },
    {
      key: "3",
      src: "https://images.unsplash.com/photo-1489769002049-ccd828976a6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdoaXRlJTIwcGljdHVyZSUyMGNvdmVyfGVufDB8fDB8fHww",
      alt: "slika4",
      username: "@andrea1234",
      albumName:"ajshdfkaa"
    },
    {
      key: "4",
      src: "https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdoaXRlJTIwcGljdHVyZSUyMGNvdmVyfGVufDB8fDB8fHww",
      alt: "slika5",
      username: "@magi13423",
      albumName:"ajshdfkaa"
    },
    {
      key: "5",
      src: "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2hpdGUlMjBwaWN0dXJlJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D",
      alt: "slika1",
      username: "@andrea24325",
      albumName:"ajshdfkaa"
    },
    {
      key: "6",
      src: "https://images.unsplash.com/photo-1494403687614-8ca3e13f154f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2hpdGUlMjBwaWN0dXJlJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D",
      alt: "slika3",
      username: "@magi265643",
      albumName:"ajshdfkaa"
    },
    {
      key: "6",
      src: "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2hpdGUlMjBwaWN0dXJlJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D",
      alt: "slika1",
      username: "@angela1234",
      albumName:"ajshdfkaa"
    },
    {
      key: "7",
      src: "https://images.unsplash.com/photo-1494403687614-8ca3e13f154f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2hpdGUlMjBwaWN0dXJlJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D",
      alt: "slika3",
      username: "@angela1234",
      albumName:"ajshdfkaa"
    },
    {
      key: "8",
      src: "https://images.unsplash.com/photo-1489769002049-ccd828976a6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdoaXRlJTIwcGljdHVyZSUyMGNvdmVyfGVufDB8fDB8fHww",
      alt: "slika4",
      username: "@angela1234",
      albumName:"ajshdfkaa"
    },
    {
      key: "4",
      src: "https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdoaXRlJTIwcGljdHVyZSUyMGNvdmVyfGVufDB8fDB8fHww",
      alt: "slika5",
      username: "@angela1234",
      albumName:"ajshdfkaa"
    },
    {
      key: "5",
      src: "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2hpdGUlMjBwaWN0dXJlJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D",
      alt: "slika1",
      username: "@angela1234",
      albumName:"ajshdfkaa"
    },
  ];

  return (
    <>
      {albumCoverPhotos.map((albumCoverPhotos) => (
        <AlbumCoverCardInEvent
          imageUrl={albumCoverPhotos.src}
          altText={albumCoverPhotos.alt}
          picWidth={picEWidth}
          picHeight={picEHeight}
          username={albumCoverPhotos.username}
          albumName={albumCoverPhotos.albumName}
          
        />
      ))}
    </>
  );
};

export default AlbumsInEventSection;
/* ovde samo se povikva durgata komponenta za da se prikazat mapiranite sliki */
