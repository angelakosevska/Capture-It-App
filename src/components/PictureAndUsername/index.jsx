import "./style.css";
const PictureAndUsername = ({userName, profilePicUrl, altText}) => {
  return (
    <>
      <div className="userInfo">
        <div className="profilePic">
          <img
            src={profilePicUrl}
            alt={altText}
            id="profPic"
          />
        </div>
        <div className="username">@{userName}</div>
      </div>
    </>
  );
}
export default PictureAndUsername;
