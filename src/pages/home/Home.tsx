import AchievementsOverview from "../../component/home/achievementsOverview/AchievementsOverview";
import FeaturedServices from "../../component/home/featuredServices/FeaturedServices";
import HeroBanner from "../../component/home/heroBanner/HeroBanner";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <FeaturedServices />
      <AchievementsOverview />
    </>
  );
};

export default Home;
