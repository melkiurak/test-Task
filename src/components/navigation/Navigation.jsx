import '@styles/navigation.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { TbClockHour10Filled } from "react-icons/tb";
import { MdOutlineContentCopy } from 'react-icons/md';
export const Navigation = () => {
        return <div className="navigation main__container" >
        <div className="navigation__tabs">  
            <button className="navigation__tab-button navigation__tab-button-active">Про акцію</button>
            <button className="navigation__tab-button">Офіційні правила</button>
        </div>
        <div className="promo-section">
            <div className='promo__section-info'>
                <button className="timer__prom">
                    <TbClockHour10Filled className="timer-icon"/>
                    <span>діє до 24.12.2023</span>
                </button>
                <p>Красуй це літо з нами: спекотні акції вже тут ☀️ З 20 червня по 31 липня 2023 активуй знижку -55% при покупці прикрас з діамантами за цим промокодом ↓</p>
            </div>
            <div className="promo__body">
                <div className="promo__body-input">
                    <input type="text" />
                    <button className='input__copy-button'>
                        <MdOutlineContentCopy className='button__icons'/>
                    </button>
                    <p>Скопіюй промокод</p>
                </div>
            </div>
        </div>
        <Swiper className="navigation__content" slidesPerView="auto" spaceBetween={16} style={{ width: '100%' }}>
            <SwiperSlide>
                <button className="navigation__content-button navigation__content-button-active">Правила</button>
            </SwiperSlide>
            <SwiperSlide>
                <button className="navigation__content-button">Обмеження</button>
            </SwiperSlide>
            <SwiperSlide>
                <button className="navigation__content-button">Як активувати промокод</button>
            </SwiperSlide>
            <SwiperSlide>
                <button className="navigation__content-button">Приклад розрахунку знижки</button>
            </SwiperSlide>
      </Swiper>
    </div>
}