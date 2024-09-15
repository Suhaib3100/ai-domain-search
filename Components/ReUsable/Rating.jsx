import { Rating, StickerStar } from "@smastrom/react-rating";

const includedShapesStyles = [StickerStar].map((itemShapes) => ({
  itemShapes,
  activeFillColor: "#f59e0b",
  inactiveFillColor: "#ffedd5",
}));

export default function Ratings({ rating }) {
  return (
    <div>
      {includedShapesStyles.map((itemStyles, index) => (
        <Rating
          style={{ maxWidth: 180 }}
          key={`shape_${index}`}
          value={rating}
          itemStyles={itemStyles}
          readOnly
        />
      ))}
    </div>
  );
}
