import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";


import orange from "./imges/orange-color.png";
import brown from "./imges/brown-color.png";
import yellow from "./imges/yellow-color.png";



const Header = () => {
  return (
    <header>
      <div className="header-top">
        <div className="container">
          <div className="header-top-left">
            <div className="location">
              <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
              <h5>
                Ваш город: Константинополь{" "}
                <FontAwesomeIcon icon={faChevronDown} className="down" />{" "}
              </h5>
            </div>
            <div className="location">
              <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
              <h5>Наш офис: Москва, ул. Новокосимская д.7 </h5>
            </div>
          </div>

          <div className="header-top-right">
            <a href="#">Статьи</a>
            <a href="#">Оплата</a>
            <a href="#">Гарантия</a>
            <a href="#">Дилерам</a>
            <a href="#">Вакансии</a>
          </div>
        </div>
      </div>

      {/* header-center start */}
      <div className="header-center">
        <div className="container">
          <div className="header-center-left">
            <div className="center-left-colors">
              <img src={orange} alt="" />
              <img src={brown} alt="" />
              <img src={yellow} alt="" />
            </div>
            <h5>Логотип вашего магазина</h5>
          </div>

          <div className="header-center-center">
            <div className="header-center-dates">
              <h5> <FontAwesomeIcon icon={faCheck} className="true-icon" />  Лучшие цены</h5>
              <h5> <FontAwesomeIcon icon={faCheck} className="true-icon" /> Бесплатная доставка</h5>
              <h5> <FontAwesomeIcon icon={faCheck} className="true-icon" />  Гарантия от 3х лет</h5>
              <h5> <FontAwesomeIcon icon={faCheck} className="true-icon" />  Более 1 000 товаров</h5>
            </div>
            <form action="">
              <input type="text" />
              <button>Найти</button>
            </form>

          </div>

          <div className="header-center-right">
            <div className="header-center-phone">
              <h6> <FontAwesomeIcon icon={faClock} className="oclock" /> Ежедневно с 9:00 до 21:00</h6>
              <h4>8 (800) <span> 800-00-00</span> </h4>
              <h4>8 (495)  <span>700-00-00</span>  </h4>
            </div>
              
            <div className="header-center-button">
              <h5><FontAwesomeIcon icon={faEnvelope} className="pochta" />  youremail@mailbox.ru</h5>
              <button>Заказать звонок</button>
            </div>

          </div>
        </div>
      </div>


      {/* header-botom start */}
      <div className="header-bottom">
        <div className="container">
            
              <button className="header-bottom-left" ><FontAwesomeIcon icon={faBars} className="bars" /> Каталог товаров</button>

            <div className="header-bottom-right">
                  <h4>О компании</h4>
                  <h4>Отзывы</h4>
                  <h4>Наши работы</h4>
                  <h4>Доставка</h4>
                  <h4>Контакты</h4>
            </div>



        </div>
      </div>
      


    </header>
  );
};

export default Header;
