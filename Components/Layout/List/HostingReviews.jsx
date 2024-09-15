import { useRouter } from "next/router";
import HostingReviewsHero from "../../Admin/Components/HostingReviews/Hero";
import HostingReviewsFeatureList from "../../Admin/Components/HostingReviews/FeatureList";
import HostingReviewsPricing from "../../Admin/Components/HostingReviews/Pricing";
import UserReviews from "../../Admin/Components/HostingReviews/UserReviews";
import AddReviews from "../../Admin/Components/HostingReviews/AddReviews";
import AllHostingReviews from "../../Admin/Components/HostingReviews/AllReviews";
import EditReviews from "../../Admin/Components/HostingReviews/EditReviews";

export default function HostingReviews() {
  const router = useRouter();
  const route = router.query.route;
  return (
    <>
      {route === "hosting-reviews-hero" ? (
        <HostingReviewsHero />
      ) : route === "hosting-reviews-feature-list" ? (
        <HostingReviewsFeatureList />
      ) : route === "hosting-reviews-pricing" ? (
        <HostingReviewsPricing />
      ) : route === "edit-hosting-reviews" ? (
        <EditReviews />
      ) : route === "hosting-user-reviews" ? (
        <UserReviews />
      ) : route === "all-hosting-reviews" ? (
        <AllHostingReviews />
      ) : route === "add-hosting-reviews" ? (
        <AddReviews />
      ) : (
        ""
      )}
    </>
  );
}
