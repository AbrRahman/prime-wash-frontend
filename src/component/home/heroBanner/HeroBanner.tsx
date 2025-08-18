import banner1 from "../../../assets/images/banner-img-1.png";
import banner2 from "../../../assets/images/banner-img-2.png";
import banner3 from "../../../assets/images/banner-img-3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import HeroBannerItem from "./HeroBannerItem";
import "swiper/css";
import "swiper/css/pagination";
// banner items
const bannerItems = [
  {
    title: "Experience the Prime Shine with PrimeWash",
    description:
      "Delivering a spotless, showroom-quality finish every time. From hand washes to premium detailing, we make your car look brand new with eco-friendly products and expert care.",
    image: banner1,
  },
  {
    title: "Car Wash Made Simple Anytime, Anywhere",
    description:
      "Book your wash in just a few clicks. Our mobile team arrives at your location with everything needed to give your car the shine it deserves, saving you time and effort.",
    image: banner2,
  },
  {
    title: "Where Trust Meets Sparkle",
    description:
      "Thousands of car owners rely on PrimeWash for reliable, professional, and affordable service. Your satisfaction is our priority — because your car deserves nothing but the best.",
    image: banner3,
  },
];

const HeroBanner = () => {
  return (
    <>
      <section className="bg-brand-primary">
        <div className="container mx-auto px-4 py-8">
          <Swiper
            pagination={{ clickable: true }}
            navigation={true}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={800}
            loop={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper relative -z-20"
          >
            {bannerItems.map((item, index) => (
              <SwiperSlide key={index} className="pb-3 lg:pb-0 relative -z-20">
                <HeroBannerItem bannerItem={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default HeroBanner;
