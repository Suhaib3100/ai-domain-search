import ContentLoader from "react-content-loader";

// Skeleton loading effect when domain list is loading
const Skeleton2 = () => (
  <div>
    <ContentLoader
      speed={1.0}
      height={50}
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
        width="70%"
        height="60%"
      />
    </ContentLoader>
  </div>
);

export default Skeleton2;
