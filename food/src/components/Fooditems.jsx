import React from 'react';
import 'animate.css';
import { motion } from 'framer-motion';
import { MdOutlineFoodBank } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/bundle'
import 'swiper/css/navigation'; // Navigation styles
import 'swiper/css/pagination';


function Fooditems(props) {

  const posts = [
    {
      id: 1,
      title: 'Chiken Pizza',
      Price: '$20.89',
      imageUrl:
        'https://gramentheme.com/html/fresheat/assets/img/food-items/item1_1.png',

    },
    {
      id: 2,
      title: 'Chiken Leg Piece',
      Price: '$20.89',
      imageUrl:
        'https://gramentheme.com/html/fresheat/assets/img/food-items/item1_4.png',

    },
    {
      id: 3,
      title: 'Egg & Cucumber',
      Price: '$20.89',
      imageUrl:
        'https://gramentheme.com/html/fresheat/assets/img/food-items/item1_2.png',

    },
    {
      id: 4,
      title: 'Chiken Fried Rice',
      Price: '$10.99',
      imageUrl:
        'https://gramentheme.com/html/fresheat/assets/img/food-items/item1_3.png',

    },
    {
      id: 5,
      title: 'Egg & Cucumber',
      Price: '$20.89',
      imageUrl:
        'https://gramentheme.com/html/fresheat/assets/img/food-items/item1_2.png',

    }

  ]

  return (
    <div className="bg-[#F4F1EA] py-10 h-[80vh] sm:px-10 ">
  
      <div className="mx-auto max-w-7xl px-6   overflow-x-hidden container">
        <div className="mx-auto max-w-2xl overflow-hidden lg:max-w-4xl w-full flex flex-col items-center text-center">

          <p className="mt-2 text-lg sm:text-xl md:text-xl leading-8 font-[700] uppercase text-[#FB792F]">
            <MdOutlineFoodBank className='inline-block ' />
            Best Food
            <MdOutlineFoodBank className='inline-block ' />
          </p>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Popular Food Items
          </h2>
        </div>

        <Swiper className="mx-auto  grid max-w-3xl grid-cols-1 gap-x-5 lg:mx-0 lg:max-w-none lg:grid-cols-4 md:grid-cols-3"
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          speed={800}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          effect="slide" // Smooth slide effect
          freeMode={true}
          // pagination={{
          //   clickable: true,
          // }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            520: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            }
          }}



          modules={[Autoplay, Pagination, Navigation]}
        >
          {posts.map((post) => (
            <SwiperSlide key={post.id}>
              <div className=" flex max-w-xl h-80 flex-col  items-start justify-between">
                <article className=" w-full h-full relative">
                  <div className="mt-3 flex items-center justify-center relative">
                    {/* Rotating Dotted Border */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                      className="absolute inset-0 m-auto w-44 h-44 shadow-md z-20 border-[2px] p-2 rounded-full border-[#EB052D] border-dashed"
                    >
                    </motion.div>


                    <img
                      alt=""
                      src={post.imageUrl}
                      className="relative z-20 h-26 w-26 rounded-full bg-gray-50"
                    />
                  </div>

                  <div className="carddown w-full bottom-[15px] h-48 flex flex-col rounded-xl items-center justify-center bg-[#fdfcfc] z-10 absolute">
                    <div className="group mt-4 ">
                      <h1 className="mt-4 text-lg font-bold leading-6 text-[1.1rem] text-gray-900 group-hover:text-gray-600">
                        {post.title}
                      </h1>
                    </div>
                    <div className="flex items-center gap-x-4 text-xs">
                      <h1
                        className="relative z-10  bg-gray-50 px-3 py-2 font-regular text-[1rem] text-gray-600 "
                      >
                        The Registeration fees
                      </h1>
                    </div>
                    <div className="flex items-center gap-x-4 text-xs">
                      <h1
                        className="relative z-10 bg-gray-50 px-3 py-2 text-[1.1rem] font-bold text-[#EB052D]"
                      >
                        {post.Price}
                      </h1>
                    </div>
                  </div>
                </article>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </div>
  );
}

export default Fooditems;





