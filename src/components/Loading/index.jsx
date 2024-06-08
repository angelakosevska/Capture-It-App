import "./style.css";

const Loading = () => {
  return (
    <>
      <div className="wrapper">
        <svg>
          <text x="50%" y="50%" dy=".35em" text-anchor="middle">
            Loading
          </text>
        </svg>
      </div>
    </>
  );
};

export default Loading;
