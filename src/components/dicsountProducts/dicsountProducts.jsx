import { TbArrowNarrowRight } from "react-icons/tb";
import '@styles/discount.css'
import { SwiperSlide, Swiper } from "swiper/react";
import sergi from '@img/sergi.png'
import stopwatch from '@icons/stopwatch.png'
import { RiHeartAddLine } from "react-icons/ri";
import '@styles/swiper.css';
import { Navigation, Pagination } from "swiper/modules";

const products = [
  {
    promo: "-60% з ПРОМОкодом",
    image: sergi,
    status: "Під замовлення (до 2 тижнів)",
    description: "Колье-трансформер с сердоликом, цитрином и родолитом Тоффи на...",
    discount: "52%",
    sold: "1 104 432",
    price: "3 637 432 грн"
  },
{
    promo: "-60% з ПРОМОкодом",
    image: sergi,
    status: "Під замовлення (до 2 тижнів)",
    description: "Колье-трансформер с сердоликом, цитрином и родолитом Тоффи на...",
    discount: "52%",
    sold: "1 104 432",
    price: "3 637 432 грн"
  },
    {
    promo: "-60% з ПРОМОкодом",
    image: sergi,
    status: "Під замовлення (до 2 тижнів)",
    description: "Колье-трансформер с сердоликом, цитрином и родолитом Тоффи на...",
    discount: "52%",
    sold: "1 104 432",
    price: "3 637 432 грн"
  },
    {
    promo: "-60% з ПРОМОкодом",
    image: sergi,
    status: "Під замовлення (до 2 тижнів)",
    description: "Колье-трансформер с сердоликом, цитрином и родолитом Тоффи на...",
    discount: "52%",
    sold: "1 104 432",
    price: "3 637 432 грн"
  },
    {
    promo: "-60% з ПРОМОкодом",
    image: sergi,
    status: "Під замовлення (до 2 тижнів)",
    description: "Колье-трансформер с сердоликом, цитрином и родолитом Тоффи на...",
    discount: "52%",
    sold: "1 104 432",
    price: "3 637 432 грн"
  },
];

export const DiscountProducts = () => {
    return (
        <div className="discount__products main__container">
            <div className="discount__products-header">
                <h2>Вироби, що беруть участь в акції</h2>
                <button className="discount__products-button">
                    <span className="discount__products-button-text" data-full="Переглянути всі" data-short="Всі"></span>
                    <TbArrowNarrowRight className="discount__products-icon" />
                </button>
            </div>
            <div className="discount__products-swiper">
                <Swiper className=" slider__swiper"
                    modules={[Pagination, Navigation]} 
                    spaceBetween={16} 
                    slidesPerView={2}
                    breakpoints={{
                        320: { slidesPerView: 1.5 },
                        430: { slidesPerView: 2.2, spaceBetween: 8 },
                        768: { slidesPerView: 2.7, spaceBetween: 8 },
                        1024: { slidesPerView: 4.5, spaceBetween: 16 },
                        1440: { slidesPerView: 5, spaceBetween: 16 },
                    }}
                >
                    {products.map((product, index ) => (
                        <SwiperSlide className="discount__products-slide slider__slide" key={index}>
                            <div className="discount__product">
                                <button className="discount__product-promo">{product.promo}</button>
                                <div className="discount__product-image-wrapper">
                                    <img src={product.image} alt="" className="discount__product-image" />
                                </div>
                                <div className="discount__product-info">
                                    <div className="discount__product-info-text">
                                        <div className="discount__product-info-status-wrapper">
                                            <img src={stopwatch} alt="" />
                                            <span className="discount__product-info-status">{product.status}</span>
                                        </div>
                                        <p className="discount__product-info-description">{product.description}</p>
                                    </div>
                                    <div className="discount__product-info-extra">
                                        <div className="discount__product-info-extra-indicator">
                                            <div className="discount__product-info-extra-stats">
                                                <div className="discount__product-info-extra-discount">
                                                    <span>{product.discount}</span>
                                                </div>
                                                <div className="discount__product-info-extra-sold">
                                                    <span>{product.sold}</span>
                                                </div>
                                            </div>
                                            <p className="discount__product-info-extra-price">{product.price}</p>
                                        </div>
                                        <div className="discount__product-info-extra-action">
                                            <button className="discount__product-info-extra-button">
                                                <span>Купить</span>
                                                <RiHeartAddLine/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}