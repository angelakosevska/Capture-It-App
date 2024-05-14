import "./style.css";

const PictureContainer = () => {
  return (
    <>
      <div className="pic-container">
        <img
          className="pic-fit"
          src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FwdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="slika"
        />
      </div>
    </>
  );
};

export default PictureContainer;

// dimanicki kje mi treba visina za responsive
