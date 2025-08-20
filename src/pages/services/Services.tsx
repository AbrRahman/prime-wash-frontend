import ServiceSideBar from "../../component/services/ServiceSideBar";
import carImag from "../../assets/images/car-1.png";
import ServiceCard from "../../component/services/ServiceCard";
const Services = () => {
  const serviceData = [
    {
      _id: "srv001",
      name: "Exterior Wash",
      description:
        "Quick exterior cleaning with foam and rinse for a fresh look.",
      price: 500,
      duration: 20,
      image: carImag,
    },
    {
      _id: "srv002",
      name: "Interior Detailing",
      description:
        "Deep cleaning of seats, carpets, and dashboard for a spotless interior.",
      price: 1200,
      duration: 45,
      image: carImag,
    },
    {
      _id: "srv003",
      name: "Full Body Wash",
      description:
        "Complete wash inside and out with premium shampoo and wax finish.",
      price: 1500,
      duration: 60,
      image: carImag,
    },
    {
      _id: "srv004",
      name: "Engine Bay Cleaning",
      description:
        "Safe and effective cleaning of engine bay to improve performance.",
      price: 2000,
      duration: 50,
      image: carImag,
    },
    {
      _id: "srv005",
      name: "Wax & Shine",
      description: "Protective wax coating with polish for long-lasting shine.",
      price: 1000,
      duration: 40,
      image: carImag,
    },
    {
      _id: "srv006",
      name: "Premium Detailing Package",
      description:
        "Complete detailing package including wash, polish, and interior clean.",
      price: 2500,
      duration: 90,
      image: carImag,
    },
  ];
  return (
    <>
      <div className="bg-brand-primary">
        <div className=" container mx-auto px-4 pb-12 pt-8 lg:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
            {/* site filter option */}
            <div className=" lg:col-span-3">
              <ServiceSideBar />
            </div>
            {/* display service */}
            <div className=" lg:col-span-9">
              {/* search bar */}
              <div className="w-11/12 lg:w-3/5  mb-2.5 mx-auto lg:mx-0">
                {" "}
                <form action="" className="flex items-center gap-3">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="bg-brand-secondary w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50 text-sky-50 px-2.5 py-1.5"
                  ></input>
                  <button className="text-sky-50 bg-cyan-600 px-4 py-1.5 rounded-md hover:bg-cyan-500 transition-colors duration-300 tracking-wide select-none">
                    Search
                  </button>
                </form>
              </div>

              {/* display product */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {serviceData.map((service) => (
                  <ServiceCard key={service._id} service={service} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
