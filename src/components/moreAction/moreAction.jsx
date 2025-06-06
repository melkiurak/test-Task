import moreActionImg from '@img/moreAction.png'
import 'swiper/css';
import 'swiper/css/pagination';
import { CustomSwiper } from '../Slider/Swiper';

const slidesData = [
  { id: 1, img: moreActionImg, text: "Сережки" },
  { id: 2, img: moreActionImg, text: "Кольца" },
  { id: 3, img: moreActionImg, text: "Браслеты" },
  { id: 4, img: moreActionImg, text: "Браслеты" },
  { id: 5, img: moreActionImg, text: "Браслеты" },
  { id: 6, img: moreActionImg, text: "Браслеты" },
  { id: 7, img: moreActionImg, text: "Браслеты" },
];

export const MoreAction = () => {
    return <div>
        <CustomSwiper slides={slidesData} title="Більше акцій"  spaceBetween={24} />
    </div>
}