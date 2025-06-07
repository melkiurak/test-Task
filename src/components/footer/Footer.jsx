import { FiPhone, FiHome } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { LuUserRound } from "react-icons/lu";
import { TbShoppingBag } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";

import { MdOutlineMailOutline } from "react-icons/md";
import '@styles/footer.css'
import facebookIcon from '@icons/icon-facebook.png'
import instagramIcon from '@icons/icon-instagram.png'
import pinterestIcon from '@icons/icon-pinterest.png'
import youtubeIcon from '@icons/icon-youtube.png'
import TikTokIcon from '@icons/icon-tik-tok.png'
import scrapIcon from '@icons/icon-scrap.png'
import { AiOutlineProduct } from "react-icons/ai";
import { useState } from "react";

export const Footer = () => {
    const [listOpen, setListOpen] = useState({
        about: false,
        safety: false,
        helpService: false,
        proposal: false,
        interesting: false,
        catalog: false,
    });
    const handelOpenList = (key) => {
        setListOpen(prev => {
            const newState = { ...prev };
            newState[key] = !prev[key];
            return newState;
        });
    }

    return <footer className="footer">
        <div className="main__container footer__container">
            <div className="footer__container-menu">
                <button className="footer__container-menu-btn">
                    <FiHome className="footer__container-menu-icon"/>
                    <span>Додому</span>
                </button>
                <button className="footer__container-menu-btn" >
                    <AiOutlineProduct className="footer__container-menu-icon"/>
                    <span>Каталог</span>
                </button>
                <button className="footer__container-menu-btn">
                    <TbShoppingBag className="footer__container-menu-icon"/>
                    <span>Кошик</span>
                </button>
                <button className="footer__container-menu-btn">
                    <FaRegHeart className="footer__container-menu-icon"/>
                    <span>Бажання</span>
                </button>
                <button className="footer__container-menu-btn">
                    <LuUserRound className="footer__container-menu-icon"/>
                    <span>Увійти</span>
                </button>
            </div>
            <div className="footer__about-wrapper">
                <p>Интернет-магазин ювелирных изделий. Доступные цены, скидки гарантия качества, доставка и возврат по всей Украине.</p>
                <div className="footer__social">
                    <span>Следи за нами:</span>
                    <div className="footer__social-icons">
                        <button><img src={facebookIcon} alt="Facebook"/></button>
                        <button><img src={instagramIcon} alt="instagram"/></button>
                        <button><img src={pinterestIcon} alt="pinterest"/></button>
                        <button><img src={youtubeIcon} alt="youtube"/></button>
                        <button><img src={TikTokIcon} alt="TikTok"/></button>
                    </div>
                </div>
            </div>
            <div className="footer__divider-mobile">
                <span></span>
            </div>
            <div className="footer__section-wrapper">
                <div className="footer__divider">
                    <span></span>
                </div>
                <div className="footer__links">
                    <nav className="footer__nav">
                        <button className="footer__list-title" onClick={() => handelOpenList('about')}>
                            <span>О нас</span>
                            <IoIosArrowDown className="footer__list-title-icon"/>
                        </button>
                        <ul className={`footer__list ${listOpen.about ? 'footer__list-open' : 'footer__list-close'}` }>
                            <li><a href="">О Zlato.ua</a></li>
                            <li><a href="">Отзывы</a></li>
                            <li><a href="">Контакты</a></li>
                            <li><a href="">Сотрудничество</a></li>
                        </ul>
                        <button className="footer__list-title" onClick={() => handelOpenList('safety')}>
                            <span>Безопасность</span>
                            <IoIosArrowDown className="footer__list-title-icon"/>
                        </button>
                        <ul className={`footer__list ${listOpen.safety ? 'footer__list-open' : 'footer__list-close'}` }>
                            <li><a href="">Публичная оферта</a></li>
                            <li><a href="">Пользовательское соглашение</a></li>
                            <li><a href="">Политика конфиденциальности</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="footer__divider">
                    <span></span>
                </div>           
                <div className="footer__links">
                    <nav className="footer__nav">
                        <button className="footer__list-title" onClick={() => handelOpenList('helpService')}>
                            <span>Помощь и сервис</span>
                            <IoIosArrowDown className="footer__list-title-icon"/>
                        </button>
                        <ul className={`footer__list ${listOpen.helpService ? 'footer__list-open' : 'footer__list-close'}` }>
                            <li><a href="">Доставка и оплата</a></li>
                            <li><a href="">Точки выдачи</a></li>
                            <li><a href="">Кредит и оплата частями</a></li>
                            <li><a href="">Обмен украшений</a></li>
                            <li><a href="">Гарантия</a></li>
                            <li><a href="">Упаковка</a></li>
                            <li><a href="">Уход за украшениями</a></li>
                            <li><a href="">Помощь FAQ</a></li>
                            <li><a href="">Карта сайта</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="footer__divider">
                    <span></span>
                </div>            
                <div className="footer__links">
                    <nav className="footer__nav">
                        <button className="footer__list-title" onClick={() => handelOpenList('proposal')}>
                            <span>Предложение</span>
                            <IoIosArrowDown className="footer__list-title-icon"/>
                        </button>
                        <ul className={`footer__list ${listOpen.proposal ? 'footer__list-open' : 'footer__list-close'}` }>
                            <li><a href="">Скидка именникам</a></li>
                            <li><a href="">Подарочные сертификаты</a></li>
                            <li><a href="">Акции</a></li>
                        </ul>
                        <button className="footer__list-title" onClick={() => handelOpenList('interesting')}>
                            <span>Интересное</span>
                            <IoIosArrowDown className="footer__list-title-icon"/>
                        </button>
                        <ul className={`footer__list ${listOpen.interesting ? 'footer__list-open' : 'footer__list-close'}` }>
                            <li><a href="">Новости</a></li>
                            <li><a href="">Ювелирный блог</a></li>
                            <li><a href="">Ювелирный гороскоп</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="footer__divider">
                    <span></span>
                </div>            
                <div className="footer__links">
                    <nav className="footer__nav">
                         <button className="footer__list-title" onClick={() => handelOpenList('catalog')}>
                            <span>Каталог</span>
                            <IoIosArrowDown className="footer__list-title-icon"/>
                        </button>
                        <ul className={`footer__list ${listOpen.catalog ? 'footer__list-open' : 'footer__list-close'}` } >
                            <li><a href="">Все украшения</a></li>
                            <li><a href="">Бренды</a></li>
                            <li><a href="">Золото</a></li>
                            <li><a href="">Серебро</a></li>
                            <li><a href="">Брилианты</a></li>
                            <li><a href="">Женщинам</a></li>
                            <li><a href="">Мужчинам</a></li>
                            <li><a href="">Помощь FAQ</a></li>
                            <li><a href="">Детям</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="footer__divider">
                    <span></span>
                </div>            
                <div className="footer__contacts">
                    <div className="footer__contacts-block">
                        <div className="footer__contact-item">
                            <FiPhone className="footer__contact-item-icons" />
                            <div className="footer__contact-text">
                                <span>0 800 758 008</span>
                                <p>Бесплатно по Украине</p>
                            </div>
                        </div>
                        <div className="footer__contact-item">
                            <MdOutlineMailOutline className="footer__contact-item-icons" />
                            <div  className="footer__contact-text">
                                <span>call@example.ua</span>
                            </div>
                        </div>
                    </div>
                    <div className="footer__contacts-divider">
                        <span></span>
                    </div>
                    <div className="footer__schedule">
                        <p>Графік роботи Call-центру:</p>
                        <div className="footer__schedule-time">
                            <span>Пн-Пт: 9:00 - 19:00</span>
                            <span>Сб-Нд: 9:00 - 19:00</span>
                        </div>
                    </div>
                    <img className="footer__contacts-img" src={scrapIcon} alt="" />
                </div>
            </div>
        </div>
</footer>
}