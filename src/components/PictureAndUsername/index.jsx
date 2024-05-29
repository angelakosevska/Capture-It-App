import "./style.css";

const PictureAndUsername = ({
  textColor,
  ppDimension,
  profilePic,
  username,
}) => {
  return (
    <>
      <div className="userInfo">
        <div
          className="profilePic"
          style={{ width: ppDimension, height: ppDimension }}
        >
          <img src={profilePic} alt="x" />
        </div>
        <div className="username" style={{ color: textColor }}>
          {username}
        </div>
      </div>
    </>
  );
};
export default PictureAndUsername;
/*
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
      */
