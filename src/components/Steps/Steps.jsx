import { IoDiamondOutline } from "react-icons/io5";
import stepsImg1 from '@img/steps_Img1.png'
import stepsImg2 from '@img/steps_Img2.png'
import '@styles/steps.css'
import { CiCircleInfo } from "react-icons/ci";


export const Steps = () => {
    return <div className="steps">
        <div className="steps__block">
            <div className="promo__section">
                <div className="promo__title">
                    <IoDiamondOutline className="promo__title-icon"/>
                    <h2>Як активувати промокод</h2>
                </div>
                <nav className="promo__nav">
                    <ul className="promo__list">
                        <li className="promo__item">Вибери прикрасу в каталозі, відкрий її картку з детальним описом, клікни на потрібний розмір (для каблучок, ланцюжків та браслетів) і натисни кнопку «купити»;</li>
                        <li className="promo__item">після вибору прикраси натисни в кошику кнопку «оформити замовлення»;</li>
                        <li className="promo__item">на сторінці оформлення замовлення натисни на текстове поле «У мене є промокод»;</li>
                    </ul>
                </nav>
            </div>
            <img src={stepsImg1} className="steps__img" alt="" />
        </div>
        <div className="steps__block">
            <img src={stepsImg2} className="steps__img " alt="" />
            <div className="steps__two-content">
                <nav className="promo__nav">
                    <ul className="promo__list">
                        <li className="promo__item">в поле вводу впиши промокод «ДІАМАНТКОД55» і натисни кнопку «застосувати»;</li>
                        <li className="promo__item">Ура! Промокод прийнятий, отже сума «До оплати» вказана вже зі знижкою за промокодом.</li>
                    </ul>
                </nav>
                <div className="content__info">
                    <CiCircleInfo className="content__info-icon" />
                    <div className="content__info-text">
                        <span>Промокод не прийнятий?</span>
                        <p>Це означає, що обрана прикраса не відповідає умовам Акції.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}