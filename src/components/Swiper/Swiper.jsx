import { Swiper, SwiperSlide } from 'swiper/react';
import { TbArrowNarrowRight, TbArrowNarrowLeft } from "react-icons/tb";
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '@styles/swiper.css';
import { useState } from 'react';

export const CustomSwiper = ({ slides, title = "Каталог прикрас", prevBtnClass, nextBtnClass }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <div className='slider'>
      <div className='main__container slider__header '>
        <h2>{title}</h2>
        <div className='slider__navigation-btns'>
          <div className='swiper__pagination-react'>
              <span>{activeIndex}</span>
              з
              <span>{slides.length}</span>
          </div>
          <button className={`swiper__button-prev ${prevBtnClass}`}>
            <TbArrowNarrowLeft className='swiper__button-prev-icons' />
          </button>
          <button className={`swiper__button-next ${nextBtnClass}`}>
            <TbArrowNarrowRight className='swiper__button-next-icons' />
          </button>
        </div>
      </div>
      <Swiper
        className="slider__swiper"
        modules={[Pagination, Navigation]}
        navigation={{ nextEl: `.${nextBtnClass}`, prevEl: `.${prevBtnClass}` }}
        spaceBetween={16}
        pagination={{ el: '.slider__pagination', clickable: true }}
        slidesPerView={2}
        breakpoints={{
          320: { slidesPerView: 1.5 },
          430: { slidesPerView: 2.5, spaceBetween: 8 },
          1024: { slidesPerView: 4.5, spaceBetween: 16 },
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex + 1)}
        onSwiper={(swiper) => setActiveIndex(swiper.realIndex + 1)}
      >
        {slides.map(({ id, img, text }) => (
          <SwiperSlide key={id} className="slider__slide">
            <div
              className="slider__slide-content"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url(${img})`,
              }}
            >
              <div className="slider__slide-info">
                <h3>{text}</h3>
                <button className="slider__slide-button">
                  <TbArrowNarrowRight className="slider__slide-icon" />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="slider__pagination" />
    </div>
  );
};
