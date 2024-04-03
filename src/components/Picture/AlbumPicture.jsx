import { PPandUN } from "../PPandUN/PPandUN";
import "./AlbumPicture.css";

export function AlbumPicture() {
  return (
    <>
      <div className="overlay-container">
        <img
          src="https://images.pexels.com/photos/6794043/pexels-photo-6794043.jpeg?cs=srgb&dl=pexels-leeloo-the-first-6794043.jpg&fm=jpg"
          alt="SLika"
        />
        <div id="overlay">
          <PPandUN />
        </div>
      </div>
    </>
  );
}
export default AlbumPicture;
