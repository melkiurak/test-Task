import bannerImg from '@img/bannerImg.png'
import '@styles/banner.css'
import { MdOutlineContentCopy } from "react-icons/md";
import { TbClockHour10Filled } from "react-icons/tb";


export const Banner = () => {
    return <div className="banner">
        <div className='banner__title-phone'>
            <h4>Красуй це літо. зі Zlato.ua: спекотні акції вже тут ☀️</h4>
            <button className="banner__content-timer">
                <TbClockHour10Filled className='timer__icons'/>
                <span>діє до 24.12.2023</span>
            </button>
        </div>
        <div className="banner__img" style={{ backgroundImage: `url(${bannerImg})` }}></div>
        <div className="banner__content">
            <button className="banner__content-timer">
                <TbClockHour10Filled className='timer__icons'/>
                <span>діє до 24.12.2023</span>
            </button>
            <div className="banner__content-block">
                <div className="block__info">
                    <h1>Красуй це літо з нами: спекотні акції вже тут ☀️</h1>
                    <p>
                        З <strong>20 червня</strong> по <strong>31 липня 2023</strong> активуй знижку <span className='banner__sale'>-55%</span> при покупці прикрас з діамантами за цим промокодом ↓ 
                    </p>
                    <p>
                        З <strong>20 червня</strong> по <strong>31 липня 2023</strong> активуй знижку <span className='banner__sale'>-55%</span> при покупці прикрас з діамантами за цим промокодом ↓ 
                    </p>
                    <p>
                        З <strong>20 червня</strong> по <strong>31 липня 2023</strong> активуй знижку <span className='banner__sale'>-55%</span> при покупці прикрас з діамантами за цим промокодом ↓ 
                    </p>                    
                </div>
                <div className="block__input">
                    <input type="text" />
                    <button className='block__input-button'>
                        <MdOutlineContentCopy className='button__icons'/>
                    </button>
                </div>
            </div>
        </div>
    </div>
}