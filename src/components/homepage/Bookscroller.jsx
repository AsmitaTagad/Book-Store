import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Books } from "../../assets/data/booksdata";
import "swiper/css";
import "swiper/css/pagination";

const Bookscroller = () => {
  return (
    <div className="max-w-[900px] min-h-[450px] mx-auto">
      <Swiper
        slidesPerView={4}
        spaceBetween={60}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {Books.map((book) => (
          <SwiperSlide key={book.id}>
            <div className="flex flex-col items-center bg-white rounded-lg shadow-md">
              <img
                src={book.img}
                alt={book.title}
                className="w-[150px] h-[200px] object-cover rounded"
              />
              <p className="mt-2 text-center font-semibold">{book.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Bookscroller;
