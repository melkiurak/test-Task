import { TbArrowNarrowLeft, TbArrowNarrowRight, TbClockHour10Filled } from 'react-icons/tb';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import moreActions from '@img/moreAction.png'
import '@styles/moreAction.css'
import { Navigation, Pagination } from 'swiper/modules';
import '@styles/swiper.css';

export const MoreAction = () => {
  return (
    <div className="more">
      <div className="more__header main__container">
        <h2>Більше акцій</h2>
        <div className="more__nav">
          <div className="swiper__pagination" />
          <button className="swiper__button-prev swiper__button-prev-action">
            <TbArrowNarrowLeft className="swiper__button-prev-icons" />
          </button>
          <button className="swiper__button-next swiper__button-next-action">
            <TbArrowNarrowRight className="swiper__button-next-icons" />
          </button>
        </div>
      </div>
      <Swiper className="slider__swiper" 
      modules={[Pagination, Navigation]} 
      navigation={{ nextEl: '.swiper__button-next-action', prevEl: '.swiper__button-prev-action' }} 
      slidesPerView={1.1} 
      spaceBetween={24}  
      breakpoints={{
          430: { slidesPerView: 1.4, spaceBetween: 8 },
          768: { slidesPerView: 2.2, spaceBetween: 8 },
          1024: { slidesPerView: 3, spaceBetween: 16 },
          1440: { slidesPerView: 4.5, spaceBetween: 24 },
        }}  
        pagination={{
          type: 'fraction',
          el: '.swiper__pagination',
          renderFraction: (currentClass, totalClass) => {
              return `<span class="${currentClass}"> </span> <span class="separator">з</span><span class="${totalClass}"></span>`;
            },
          }}>
        <SwiperSlide className="slider__slide">
          <div className="more__slide">
            <div
              className="more__image"
              style={{ backgroundImage: `url(${moreActions})` }}
            />
            <div className="more__content">
              <p className="more__text">
                Створи настрій. 7 каблучок для цього літа та осені
              </p>
              <div className="more__buttons">
                <button className="timer__prom">
                  <TbClockHour10Filled className="timer-icon" />
                  <span>діє до 24.12.2023</span>
                </button>
                <button className="more__terms">Умови</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider__slide">
          <div className="more__slide">
            <div
              className="more__image"
              style={{ backgroundImage: `url(${moreActions})` }}
            />
            <div className="more__content">
              <p className="more__text">
                Створи настрій. 7 каблучок для цього літа та осені
              </p>
              <div className="more__buttons">
                <button className="timer__prom">
                  <TbClockHour10Filled className="timer-icon" />
                  <span>діє до 24.12.2023</span>
                </button>
                <button className="more__terms">Умови</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider__slide">
          <div className="more__slide">
            <div
              className="more__image"
              style={{ backgroundImage: `url(${moreActions})` }}
            />
            <div className="more__content">
              <p className="more__text">
                Створи настрій. 7 каблучок для цього літа та осені
              </p>
              <div className="more__buttons">
                <button className="timer__prom">
                  <TbClockHour10Filled className="timer-icon" />
                  <span>діє до 24.12.2023</span>
                </button>
                <button className="more__terms">Умови</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider__slide">
          <div className="more__slide">
            <div
              className="more__image"
              style={{backgroundImage: `linear-gradient(to top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${moreActions})`,}}
            />
            <div className="more__content">
              <p className="more__text-end">
                Створи настрій. 7 каблучок для цього літа та осені
              </p>
              <div className="more__buttons">
                <button className="more__buttons-end">
                  <span>Акція завершена</span>
                </button>
                <button className="more__terms">Умови</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider__slide">
          <div className="more__slide">
            <div
              className="more__image"
              style={{backgroundImage: `linear-gradient(to top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${moreActions})`,}}
            />
            <div className="more__content">
              <p className="more__text-end">
                Створи настрій. 7 каблучок для цього літа та осені
              </p>
              <div className="more__buttons">
                <button className="more__buttons-end">
                  <span>Акція завершена</span>
                </button>
                <button className="more__terms">Умови</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
