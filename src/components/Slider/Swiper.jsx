import { Swiper, SwiperSlide } from 'swiper/react';
import { TbArrowNarrowRight, TbArrowNarrowLeft } from "react-icons/tb";
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '@styles/swiper.css';

export const CustomSwiper = ({ slides, title = "Каталог прикрас" }) => {
  return (
    <div className='slider'>
      <div className='main__container slider__header '>
        <h2>{title}</h2>
        <div className='slider__navigation-btns'>
          <button className="swiper-button-prev">
            <TbArrowNarrowLeft className='btn__icons' />
          </button>
          <button className="swiper-button-next">
            <TbArrowNarrowRight className='btn__icons' />
          </button>
        </div>
      </div>

      <Swiper
        className="slider__swiper"
        modules={[Pagination, Navigation]}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        spaceBetween={16}
       pagination={{ el: '.slider__pagination', clickable: true }}
        slidesPerView={2}
        breakpoints={{
          320: { slidesPerView: 1.5 },
          430: { slidesPerView: 2.5, spaceBetween: 8 },
          1024: { slidesPerView: 4.5, spaceBetween: 16 },
        }}
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
