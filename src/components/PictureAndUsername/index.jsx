import "./style.css";
const PictureAndUsername = () => {
  return (
    <>
      <div className="userInfo">
        <div className="profilePic">
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg"
            alt="@user added this photo to the album"
            id="profPic"
          />
        </div>
        <div className="username">@angela123</div>
      </div>
    </>
  );
}
export default PictureAndUsername;
