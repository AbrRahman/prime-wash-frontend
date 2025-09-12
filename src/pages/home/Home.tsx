import AboutUs from "../../component/home/aboutUs/AboutUs";
import AchievementsOverview from "../../component/home/achievementsOverview/AchievementsOverview";
import FAQ from "../../component/home/FAQ/FAQ";
import FeaturedServices from "../../component/home/featuredServices/FeaturedServices";
import HeroBanner from "../../component/home/heroBanner/HeroBanner";
import HomeReviewsAndRatings from "../../component/home/HomeReviewsAndRatings/HomeReviewsAndRatings";
import { useAppDispatch } from "../../redux/features/hooks";
import { setActiveMenu } from "../../redux/features/header/headerSlice";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setActiveMenu("Home"));
  }, [dispatch]);
  return (
    <>
      <HeroBanner />
      <FeaturedServices />
      <AchievementsOverview />
      <AboutUs />
      <HomeReviewsAndRatings />
      <FAQ />
    </>
  );
};

export default Home;
