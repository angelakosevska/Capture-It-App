import "./style.css";

const PictureAndUsername = ({ textColor, ppDimension, event, album }) => {


  return (
    <>
      <div className="userInfo">
        <div
          className="profilePic"
          style={{ width: ppDimension, height: ppDimension }}
        >
          <img
            //src={event.profilePic}
            alt="blueman"
          />
        </div>
        <div className="username" style={{ color: textColor}}>
     sashdasd
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
