import "./style.css";

const PictureAndUsername = ({ textColor, ppDimension, imageUrl, username}) => {


  return (
    <>
      <div className="userInfo">
        <div
          className="profilePic"
          style={{ width: ppDimension, height: ppDimension }}
        >
          <img
            src={imageUrl}
            alt="blueman"
          />
        </div>
        <div className="username" style={{ color: textColor}}>
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
