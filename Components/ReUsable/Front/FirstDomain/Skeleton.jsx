import ContentLoader from "react-content-loader";

// Skeleton loading effect when domain list is loading
const Skeleton = () => (
  <div>
    <ContentLoader
      speed={1.0}
      height={30}
      style={{ width: "100%" }}
      backgroundColor="#8388a3"
      foregroundColor="#ecebeb"
    >
      <rect
        className="rounded-xl"
        x="10%"
        y="20%"
        rx="5"
        ry="5"
        width="50%"
        height="20%"
      />
      {/* <rect x="68%" y="20%" rx="5" ry="5" width="20%" height="60%" /> */}
    </ContentLoader>
  </div>
);

export default Skeleton;
