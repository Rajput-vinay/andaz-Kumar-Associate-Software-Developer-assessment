// "use client";
// import { FaSearchLocation, FaSearch, FaArrowRight } from "react-icons/fa";
// import { IoCartOutline } from "react-icons/io5";
// import { LuBookMarked } from "react-icons/lu";
// import { FaBookOpen } from "react-icons/fa6";
// import { RiShoppingBag4Fill } from "react-icons/ri";
// import { CiBeaker1 } from "react-icons/ci";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// // Popular searches
// const suggestionList = [
//   { text: "Dermatologist" },
//   { text: "Pediatrician" },
//   { text: "Gynecologist/Obstetrician" },
//   { text: "Others" },
// ];

// // Services below the fold
// const serviceProvider = [
//   {
//     icon: <IoCartOutline size={22} />,
//     text: "Consult with a doctor",
//   },
//   {
//     icon: <RiShoppingBag4Fill size={22} />,
//     text: "Order Medicines",
//   },
//   {
//     icon: <LuBookMarked size={22} />,
//     text: "View Medical Reports",
//   },
//   {
//     icon: <CiBeaker1 size={22} />,
//     text: "Book Tests",
//   },
//   {
//     icon: <FaBookOpen size={22} />,
//     text: "Read Articles",
//   },
//   {
//     icon: <FaSearchLocation size={22} />,
//     text: "For healthcare provider",
//   },
// ];

// export default function Home() {
//   const router = useRouter();
//   const [location, setLocation] = useState("");
//   const [specialization, setSpecialization] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const handleSearchRedirect = () => {
//     if (specialization.trim() && location.trim()) {
//       console.log("Redirecting to:", location, specialization); // ✅ add this
//       router.push(
//         `/doctor/${encodeURIComponent(location.trim())}/${encodeURIComponent(
//           specialization.trim()
//         )}`
//       );
//     } else {
//       setErrorMessage("Please enter both location and specialization.");
//       console.log("Missing location or specialization");
//     }
//   };
//   return (
//     <div className="w-full min-h-screen bg-[#F0F0F5] relative">
//       {/* Background Image */}
//       <div
//         className="w-full min-h-screen bg-no-repeat bg-right bg-contain relative"
//         style={{
//           backgroundImage:
//             "url('https://www.practostatic.com/web-assets/home/assets/images/homepage.06859593240c3efd483fe48951cfe6ff.svg')",
//           backgroundPosition: "right 0 top 0",
//         }}
//       >
//         {/* Centered Content */}
//         <div className="flex flex-col absolute top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center px-4">
//           <h1 className="text-3xl md:text-5xl font-bold text-white">
//             Your home for health
//           </h1>
//           <div className="mt-4 text-xl md:text-2xl font-semibold text-white">
//             Find and Book
//           </div>

//           {/* Search Bar */}
//           <div className="mt-4 flex flex-row bg-white rounded-md overflow-hidden shadow-md w-full max-w-full mx-auto">
//             {/* Location input */}
//             <div className="flex items-center px-4 border-r">
//               <FaSearchLocation className="text-gray-500 mr-2" />
//               <input
//                 type="text"
//                 placeholder="Bangolore"
//                 value={location}
//                 onChange={(e) => setLocation(e.target.value)}
//                 aria-label="Location"
//                 className="outline-none text-gray-700 w-full sm:w-[150px] py-3"
//               />
//             </div>

//             {/* Search input */}
//             <div className="flex items-center px-4 w-full">
//               <FaSearch className="text-gray-500 mr-2" />
//               <input
//                 type="text"
//                 placeholder="Search doctors, clinics, hospitals, etc."
//                 className="outline-none w-full text-gray-700 py-3"
//                 value={specialization}
//                 onChange={(e) => setSpecialization(e.target.value)}
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter") {
//                     handleSearchRedirect();
//                   }
//                 }}
//               />
//               <FaArrowRight
//                 onClick={handleSearchRedirect}
//                 className="text-gray-500 left-2 cursor-pointer"
//               />
//             </div>
//           </div>
//           {errorMessage && (
//             <p className="text-red-600 mt-2 text-sm font-semibold">
//               {errorMessage}
//             </p>
//           )}

//           {/* Popular Searches */}
//           <div className="mt-6 text-md text-gray-500 flex flex-row flex-wrap justify-center">
//             <span className="mr-2">Popular Searches:</span>
//             <span className="flex flex-wrap justify-center gap-4 ">
//               {suggestionList.map((suggestion, index) => (
//                 <span key={index} className="text-gray-500 ">
//                   {suggestion.text}
//                 </span>
//               ))}
//             </span>
//           </div>

//         </div>
//          <div className="absolute bottom-0 w-full h-20 bg-[#1D2869]">
//         <div className="max-w-7xl mx-auto h-full flex flex-wrap items-center justify-between px-4 sm:px-8 overflow-x-auto">
//           {serviceProvider.map((service, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center gap-2 text-white min-w-fit whitespace-nowrap"
//             >
//               {service.icon}
//               <span className="text-sm font-medium">{service.text}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//       </div>
     
//     </div>
//   );
// }



"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaSearchLocation, FaSearch, FaArrowRight } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { LuBookMarked } from "react-icons/lu";
import { FaBookOpen } from "react-icons/fa6";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { CiBeaker1 } from "react-icons/ci";

const suggestionList = [
  "Dermatologist",
  "Pediatrician",
  "Gynecologist/Obstetrician",
  "Others",
];

const serviceProvider = [
  { icon: <IoCartOutline size={20} />, text: "Consult with a doctor" },
  { icon: <RiShoppingBag4Fill size={20} />, text: "Order Medicines" },
  { icon: <LuBookMarked size={20} />, text: "View medical records" },
  { icon: <CiBeaker1 size={20} />, text: "Book test" },
  { icon: <FaBookOpen size={20} />, text: "Read articles" },
  { icon: <FaSearchLocation size={20} />, text: "For healthcare providers" },
];

export default function Home() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearchRedirect = () => {
    if (specialization.trim() && location.trim()) {
      router.push(
        `/doctor/${encodeURIComponent(location.trim())}/${encodeURIComponent(
          specialization.trim()
        )}`
      );
    } else {
      setErrorMessage("Please enter both location and specialization.");
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F0F0F5] relative mt-10">
      {/* Background Hero Section */}
      <div
        className="w-full min-h-[70vh] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center text-center px-4 "
        style={{
          backgroundImage:
            "url('https://www.practostatic.com/web-assets/home/assets/images/homepage.06859593240c3efd483fe48951cfe6ff.svg')",
        }}
      >
        <h1 className="text-3xl sm:text-5xl font-bold text-white">
          Your home for health
        </h1>
        <p className="mt-3 text-xl sm:text-2xl font-semibold text-white">
          Find and Book
        </p>

        {/* Search Bar */}
        <div className="mt-6 flex flex-col sm:flex-row bg-white rounded-lg overflow-hidden shadow-md w-full max-w-2xl">
          {/* Location */}
          <div className="flex items-center px-4 py-3 border-b sm:border-b-0 sm:border-r w-full sm:w-[45%]">
            <FaSearchLocation className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Bangalore"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="outline-none w-full text-gray-700"
            />
          </div>

          {/* Specialization */}
          <div className="flex items-center px-4 py-3 w-full relative">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search doctors, clinics, hospitals, etc."
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearchRedirect()}
              className="outline-none w-full text-gray-700"
            />
            <FaArrowRight
              onClick={handleSearchRedirect}
              className="text-gray-500 absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
            />
          </div>
        </div>

        {/* Error Message */}
        {errorMessage && (
          <p className="text-red-500 mt-2 text-sm font-semibold">
            {errorMessage}
          </p>
        )}

        {/* Popular Searches */}
        <div className="mt-4 text-sm sm:text-base text-gray-400 flex flex-wrap justify-center gap-3">
          <span className="font-medium">Popular searches:</span>
          {suggestionList.map((text, i) => (
            <span
              key={i}
              className="hover:underline cursor-pointer"
              onClick={() => setSpecialization(text)}
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="w-full bg-[#1D2869] py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
          {serviceProvider.map((service, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center text-white min-w-[100px] text-center"
            >
              {service.icon}
              <span className="text-xs sm:text-sm mt-1 font-medium">
                {service.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
