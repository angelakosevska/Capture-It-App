import PictureCoverCardInAlbum from "../PictureCoverCardInAlbum";
import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";

const PicturesInAlbumSection = ({ picEWidth, picEHeight }) => {
  const [pictures, setPictures] = useState([]);
  const [pictureId, setPIctureId]=useState("");
  useEffect(()=>{
    axios
    .get(
      `https://captureit.azurewebsites.net/api/picture?createdAt=2024-05-11&albumId=${pictureId}`,
      {
        headers: {
          Authorization:
            "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia29zZXZza2FhIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIxMCIsImV4cCI6MTcxNjMxMDIzN30.pYvjwK4Ftl4iXthZ2c2pKB4mGp9I-hjE18IsNrWEKrY",
        },
      }
    )
    .then((res) => {
      setPictures(res.data);
    });
  },[]);
  


  return (
    <>
      <PictureCoverCardInAlbum
        imageUrl={pictures.imageUrl}
        picWidth={picEWidth}
        picHeight={picEHeight}
        //albumName={pictureInAlbum.albumName}
      />
    </>
  );
};

export default PicturesInAlbumSection;
/* ovde samo se povikva durgata komponenta za da se prikazat mapiranite sliki */
/*
 const albumCoverPhotos = [
    {
      key: "1",
      src: "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2hpdGUlMjBwaWN0dXJlJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D",
      alt: "slika1",
      username: "@angela1234",
      albumName: "ajshdfkaa",
    },
    {
      key: "2",
      src: "https://images.unsplash.com/photo-1494403687614-8ca3e13f154f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2hpdGUlMjBwaWN0dXJlJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D",
      alt: "slika3",
      username: "@angela134",
      albumName: "ajshdfkaa",
    },
    {
      key: "3",
      src: "https://images.unsplash.com/photo-1489769002049-ccd828976a6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdoaXRlJTIwcGljdHVyZSUyMGNvdmVyfGVufDB8fDB8fHww",
      alt: "slika4",
      username: "@andrea1234",
      albumName: "ajshdfkaa",
    },
    {
      key: "4",
      src: "https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdoaXRlJTIwcGljdHVyZSUyMGNvdmVyfGVufDB8fDB8fHww",
      alt: "slika5",
      username: "@magi13423",
      albumName: "ajshdfkaa",
    },
    {
      key: "5",
      src: "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2hpdGUlMjBwaWN0dXJlJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D",
      alt: "slika1",
      username: "@andrea24325",
      albumName: "ajshdfkaa",
    },
    {
      key: "6",
      src: "https://images.unsplash.com/photo-1494403687614-8ca3e13f154f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2hpdGUlMjBwaWN0dXJlJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D",
      alt: "slika3",
      username: "@magi265643",
      albumName: "ajshdfkaa",
    },

    {
      key: "7",
      src: "https://images.unsplash.com/photo-1494403687614-8ca3e13f154f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2hpdGUlMjBwaWN0dXJlJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D",
      alt: "slika3",
      username: "@angela1234",
      albumName: "ajshdfkaa",
    },
    {
      key: "8",
      src: "https://images.unsplash.com/photo-1489769002049-ccd828976a6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdoaXRlJTIwcGljdHVyZSUyMGNvdmVyfGVufDB8fDB8fHww",
      alt: "slika4",
      username: "@angela1234",
      albumName: "ajshdfkaa",
    },
    {
      key: "4",
      src: "https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdoaXRlJTIwcGljdHVyZSUyMGNvdmVyfGVufDB8fDB8fHww",
      alt: "slika5",
      username: "@angela1234",
      albumName: "ajshdfkaa",
    },
    {
      key: "5",
      src: "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2hpdGUlMjBwaWN0dXJlJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D",
      alt: "slika1",
      username: "@angela1234",
      albumName: "ajshdfkaa",
    },
  ];
  */
