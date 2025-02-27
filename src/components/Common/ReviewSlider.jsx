// import React, { useEffect, useState } from "react"
// import ReactStars from "react-rating-stars-component"
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react"

// // Import Swiper styles
// import "swiper/css"
// import "swiper/css/free-mode"
// import "swiper/css/pagination"
// import "../../App.css"
// // Icons
// import { FaStar } from "react-icons/fa"
// // Import required modules
// import { Autoplay, FreeMode, Pagination } from "swiper"

// // Get apiFunction and the endpoint
// import { apiConnector } from "../../services/apiConnector"
// import { ratingsEndpoints } from "../../services/apis"

// function ReviewSlider() {
//   const [reviews, setReviews] = useState([])
//   const truncateWords = 15

//   useEffect(() => {
//     ;(async () => {
//       const { data } = await apiConnector(
//         "GET",
//         ratingsEndpoints.REVIEWS_DETAILS_API
//       )
//       if (data?.success) {
//         setReviews(data?.data)
//       }
//     })()
//   }, [])

//   // console.log(reviews)

//   return (
//     <div className="text-white">
//       <div className="my-[50px] h-[184px] max-w-maxContentTab lg:max-w-maxContent">
//         <Swiper
//           slidesPerView={4}
//           spaceBetween={25}
//           loop={true}
//           freeMode={true}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
//           modules={[FreeMode, Pagination, Autoplay]}
//           className="w-full "
//         >
//           {reviews.map((review, i) => {
//             return (
//               <SwiperSlide key={i}>
//                 <div className="flex flex-col gap-3 bg-richblack-800 p-3 text-[14px] text-richblack-25">
//                   <div className="flex items-center gap-4">
//                     <img
//                       src={
//                         review?.user?.image
//                           ? review?.user?.image
//                           : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
//                       }
//                       alt=""
//                       className="h-9 w-9 rounded-full object-cover"
//                     />
//                     <div className="flex flex-col">
//                       <h1 className="font-semibold text-richblack-5">{`${review?.user?.firstName} ${review?.user?.lastName}`}</h1>
//                       <h2 className="text-[12px] font-medium text-richblack-500">
//                         {review?.course?.courseName}
//                       </h2>
//                     </div>
//                   </div>
//                   <p className="font-medium text-richblack-25">
//                     {review?.review.split(" ").length > truncateWords
//                       ? `${review?.review
//                           .split(" ")
//                           .slice(0, truncateWords)
//                           .join(" ")} ...`
//                       : `${review?.review}`}
//                   </p>
//                   <div className="flex items-center gap-2 ">
//                     <h3 className="font-semibold text-yellow-100">
//                       {review.rating.toFixed(1)}
//                     </h3>
//                     <ReactStars
//                       count={5}
//                       value={review.rating}
//                       size={20}
//                       edit={false}
//                       activeColor="#ffd700"
//                       emptyIcon={<FaStar />}
//                       fullIcon={<FaStar />}
//                     />
//                   </div>
//                 </div>
//               </SwiperSlide>
//             )
//           })}
//           {/* <SwiperSlide>Slide 1</SwiperSlide> */}
//         </Swiper>
//       </div>

//       <div>
//         mohit
//       </div>
//     </div>
//   )
// }

// export default ReviewSlider


// import React, { useEffect, useRef, useState } from "react";
// import image1 from "./../../assets/Images/aboutus1.webp"
// import image2 from "./../../assets/Images/aboutus1.webp"
// import image3 from "./../../assets/Images/aboutus1.webp"
// import image4 from "./../../assets/Images/aboutus1.webp"
// import image5 from "./../../assets/Images/aboutus1.webp"
// import image6 from "./../../assets/Images/aboutus1.webp"
// const images = [
//   image2,image3,image4,image6,image5
// ];


// const ReviewSlider = () => {
//     return (
//       <div className="w-full overflow-hidden bg-gray-100 py-4">
//         <div className="relative flex w-full">
//           {/* Moving images */}
//           <div className="flex space-x-4 animate-marquee">
//             {[...images, ...images].map((img, index) => (
//               <img
//                 key={index}
//                 src={img}
//                 alt={`Slide ${index}`}
//                 className="w-[400px] h-[220px] object-cover rounded-lg"
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default ReviewSlider;

  import React from "react";
  import { FaStar } from "react-icons/fa";
  import review1 from "./../../assets/Images/aboutus1.webp";
  import review2 from "./../../assets/Images/aboutus1.webp";
  import review3 from "./../../assets/Images/aboutus1.webp";
  import review4 from "./../../assets/Images/aboutus1.webp";
  import review5 from "./../../assets/Images/aboutus1.webp";
  
  const reviews = [
    {
      image: review1,
      name: "John Doe",
      text: "Great service! Highly recommended.",
      rating: 5,
    },
    {
      image: review2,
      name: "Jane Smith",
      text: "Amazing experience, will come again!",
      rating: 4,
    },
    {
      image: review3,
      name: "Michael Brown",
      text: "Loved the hospitality and service.",
      rating: 5,
    },
    {
      image: review4,
      name: "Emily Davis",
      text: "Good service but room for improvement.",
      rating: 3,
    },
    {
      image: review5,
      name: "David Wilson",
      text: "Exceptional quality and friendly staff!",
      rating: 5,
    },
  ];
  
  const ReviewSlider = () => {
    return (
      <div className="w-full overflow-hidden bg-gray-100 py-4">
        <div className="relative flex w-full">
          <div className="flex space-x-4 animate-marquee">
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={index}
                className="w-[300px] h-[220px] bg-white p-4 shadow-lg rounded-lg flex flex-col items-center text-center"
              >
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover mb-2"
                />
                <h3 className="font-semibold text-lg text-black">{review.name}</h3>
                <p className="text-sm text-gray-600 text-black">{review.text}</p>
                <div className="flex mt-2 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < review.rating ? "" : "text-gray-300"} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ReviewSlider;
  