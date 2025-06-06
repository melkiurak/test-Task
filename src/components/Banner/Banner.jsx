import bannerImg from '@img/bannerImg.png'
import '@styles/banner.css'
import { TbClockHour10Filled } from "react-icons/tb";


export const Banner = () => {
    return <div className="banner main__container">
        <div className='banner__title-phone'>
            <h4>Красуй це літо. зі Zlato.ua: спекотні акції вже тут ☀️</h4>
            <button className="timer__prom">
                <TbClockHour10Filled className='timer__icon'/>
                <span>діє до 24.12.2023</span>
            </button>
        </div>
        <div className="banner__img" style={{ backgroundImage: `url(${bannerImg})` }}></div>
    </div>
}