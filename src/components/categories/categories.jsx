import categories1 from '@img/categories1.png'
import categories2 from '@img/categories2.png'
import categories3 from '@img/categories3.png'
import categories4 from '@img/categories4.png'
import categories5 from '@img/categories5.png'
import 'swiper/css';
import 'swiper/css/pagination';
import { CustomSwiper } from '../Slider/Swiper';

const slidesData = [
  { id: 1, img: categories1, text: "Сережки" },
  { id: 2, img: categories2, text: "Кольца" },
  { id: 3, img: categories3, text: "Браслеты" },
  { id: 4, img: categories4, text: "Браслеты" },
  { id: 5, img: categories5, text: "Браслеты" },
];

export const Categories = () => {
    return <div className='categories'>
      <CustomSwiper slides={slidesData} title="Більше виробів" />
    </div>
}