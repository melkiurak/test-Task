import { Banner } from "./components/Banner/Banner"
import { Header } from "./components/Header/Header"
import { Navigation } from "./components/navigation/Navigation"
import { BsStars } from "react-icons/bs";
import diamond from '@icons/icon-symbol-Diamods.png'
import { Steps } from "./components/Steps/Steps";
import discountImg from '@img/discount__Img.png'
import { DicsountProducts } from "./components/dicsountProducts/dicsountProducts";
import { Categories } from "./components/categories/categories";
import { MoreAction } from "./components/moreAction/moreAction";


function App() {
  return (
    <div className="wrapper">
      <Header/>
      <main>
        <Banner/>
        <Navigation/>
        <div className="promo__section main__container">
          <div className="promo__title">
            <BsStars className="promo__title-icon"/>
            <h2>Правила акції</h2>
          </div>
          <nav className="promo__nav">
            <ul className="promo__list">
              <li className="promo__item">Акція діє з 20.06 по 31.07.2023;</li>
              <li className="promo__item">в акції беруть участь <strong>ювелірні вироби зі вставкою «Діамант»,</strong> з основною знижкою від -49%;</li>
              <li className="promo__item"><strong>під терміном «активуй -55% на прикраси з діамантами»</strong> мається на увазі заміна Основної знижки акційного товару на Акційну знижку -55% при застосуванні промокоду «ДІАМАНТКОД55»;</li>
              <li className="promo__item"><strong>для коректної роботи промокоду</strong> рекомендуємо додавати в кошик лише ті акційні вироби, що відповідають умовам цієї акції.</li>
            </ul>
          </nav>
        </div>
        <div className="promo__section main__container">
          <div className="promo__title">
            <img src={diamond} className="promo__title-icon" alt="" />
            <h2>Обмеження</h2>
          </div>
          <nav className="promo__nav">
            <ul className="promo__list">
              <li className="promo__item">В акції не беруть участь весільні обручки з діамантами та вироби з діамантами з основною знижкою понад 54%;</li>
              <li className="promo__item">акція не сумісна з іншими акційними пропозиціями та додатковими знижками (3% на першу покупку, 5% іменинникам, 200 грн за підписку).</li>
            </ul>
          </nav>
        </div>
        <Steps/>
        <div className="discount main__container">
          <h2>Приклад розрахунку знижки</h2>
          <img src={discountImg} alt="" />
        </div>
        <Categories/>
        <MoreAction/>
      </main>
    </div>
  )
}

export default App
