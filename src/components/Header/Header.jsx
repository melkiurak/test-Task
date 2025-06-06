import { IoIosArrowDown, IoIosSearch,IoMdMore } from "react-icons/io";
import '@styles/header.css';
import iconsCatalog from '@icons/icon-catalog.png'
import iconsCatalogBlack from '@icons/icon-catalog-black.png'
import { RiArrowDownSFill } from "react-icons/ri";
import { LuUserRound } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { TbShoppingBag } from "react-icons/tb";

export const Header = () => {
    return <header className="header">
        <div className="header__top header__container">
            <button className="header__top-catalog">
                <img src={iconsCatalogBlack} alt="" />
            </button>
            <div className="header__language">
                <button className="language-button">
                    <div className="language-button__main">
                        <div className="language-button__flag"></div>
                        <span className="language-button__text">Українська</span>
                    </div>
                    <IoIosArrowDown className="language-button__icon" />
                </button>
            </div>
            <nav className="header__nav">
                <ul className="nav__list">
                    <li className="nav__item"><a href="" className="nav__link">Про нас</a></li>
                    <li className="nav__item"><a href="" className="nav__link">Доставка та оплата</a></li>
                    <li className="nav__item"><a href="" className="nav__link">Обмін</a></li>
                    <li className="nav__item"><a href="" className="nav__link">Точки видачі</a></li>
                    <li className="nav__item"><a href="" className="nav__link">Допомога (FAQ)</a></li>
                    <button className="nav__button">Контакти</button>
                </ul>
            </nav>
            <div className="header__top-actions">
                <button className="actions"><IoIosSearch className="actions__icon"/></button>
                <button className="actions"><IoMdMore className="actions__icon"/></button>
            </div>
        </div>
        <div className="header__bottom ">
            <div className="header__container header__bottom-container">
                <div className="header__bottom-controls">
                    <button className="catalog-button"> 
                        <img src={iconsCatalog} alt="" />
                        <span>Каталог товарів</span>
                        <IoIosArrowDown className="catalog-button__icons"/>
                    </button> 
                    <button className="phone-button">
                        <div className="phone-button__info">
                            <span className="phone-button__number">0 800 000 222</span>
                            <p className="phone-button__description">Бесплатно по Украине</p>
                        </div>
                        <RiArrowDownSFill className="phone-button__icons"/>
                    </button>
                </div>
                <div className="header__bottom-search">
                    <input type="text" className="header__bottom-search-input" placeholder="Наприклад, кільце з діамантом" />
                    <IoIosSearch className="header__icons-search"/>
                </div>
                <div className="header__bottom-profile">
                    <div className="header__profile-login">
                        <LuUserRound className="header__profile-icons-user"/>
                        <span>Войти в кабинет</span>
                    </div>
                    <div className="header__divider">
                        <span></span>
                    </div>
                    <div className="header__profile-icons">
                        <button className="profile__button">
                            <FaRegHeart className="profile__button-icon"/>
                        </button>
                        <button className="profile__button">
                            <IoEyeOutline className="profile__button-icon"/>
                        </button>
                        <button className="profile__button">
                            <TbShoppingBag className="profile__button-icon"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
</header>

}