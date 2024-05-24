import "./style.css";

const PictureContainer = ({imageUrl}) => {
  return (
    <>
      <div className="pic-container">
        <img
          className="pic-fit"
          src={imageUrl}
          alt="slika"
        />
      </div>
    </>
  );
};

export default PictureContainer;

// dimanicki kje mi treba visina za responsive
