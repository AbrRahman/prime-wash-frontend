import AboutUs from "../../component/home/aboutUs/AboutUs";
import AchievementsOverview from "../../component/home/achievementsOverview/AchievementsOverview";
import FeaturedServices from "../../component/home/featuredServices/FeaturedServices";
import HeroBanner from "../../component/home/heroBanner/HeroBanner";
import HomeReviewsAndRatings from "../../component/home/HomeReviewsAndRatings/HomeReviewsAndRatings";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <FeaturedServices />
      <AchievementsOverview />
      <AboutUs />
      <HomeReviewsAndRatings />
    </>
  );
};

export default Home;
