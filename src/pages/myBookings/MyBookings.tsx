import serviceImage from "../../assets/images/car-1.png";
const MyBookings = () => {
  return (
    <div>
      <div className="border-b-2 border-dashed pb-6 border-b-brand-primary ">
        <h1 className="text-xl font-semibold text-sky-50">My Bookings</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-sky-50">
              <th>Service Image</th>
              <th>Service Name</th>
              <th>Date</th>
              <th>Duration</th>
              <th>Service Charge</th>
              <th>Car Name</th>
              <th>Car Brand</th>
              <th>Booking Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="text-slate-300">
              <td>
                <img src={serviceImage} alt="" className="w-20" />
              </td>
              <td>Basic Wash</td>
              <td className="whitespace-nowrap">01-09-25</td>
              <td className="whitespace-nowrap">09:00am-10:00am</td>
              <td>2000 tk</td>
              <td>Camry</td>
              <td>Toyota</td>
              <td>Booked</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;

//  [
//         {
//             "_id": "60d9c4e4f3b4b544b8b8d1c7",
//             "service": {
//                 "_id": "60d9c4e4f3b4b544b8b8d1c5",
//                 "name": "Car Wash",
//                 "description": "Exterior and interior car cleaning",
//                 "price": 50,
//                 "duration": 30,
//                 "isDeleted": false
//             },
//             "slot": {
//                 "_id": "60d9c4e4f3b4b544b8b8d1c6",
//                 "service": "60d9c4e4f3b4b544b8b8d1c5",
//                 "date": "2024-06-15",
//                 "startTime": "09:00",
//                 "endTime": "09:30",
//                 "isBooked": "booked"
//             },
//             "vehicleType": "car",
//             "vehicleBrand": "Toyota",
//             "vehicleModel": "Camry",
//             "manufacturingYear": 2020,
//             "registrationPlate": "ABC123",
//             "createdAt": "2024-06-15T12:00:00Z",
//             "updatedAt": "2024-06-15T12:00:00Z"
//         }
//     ]
