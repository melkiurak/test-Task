import { TbArrowNarrowRight } from "react-icons/tb";
import '@styles/discount.css'
import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";

export const DicsountProducts = () => {
    return <div className="discount__products">
        <div className="discount__products-header">
            <h2 className="discount__products-title">Вироби, що беруть участь в акції</h2>
            <button className="discount__products-button">
                <span>Переглянути</span>
                <TbArrowNarrowRight className="discount__products-icon" />
            </button>
        </div>
        <Swiper>
            <SwiperSlide>
                <div>
                    <button>-60% з ПРОМОкодом</button>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <div>
                            <span>Під замовлення (до 2 тижнів)</span>
                            <p>Колье-трансформер с сердоликом, цитрином и родолитом Тоффи на...</p>
                        </div>
                        <div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
}