import "./footer.scss";

import orange2 from "./imges/orange-color.png";
import brown2 from "./imges/brown-color.png";
import yellow2 from "./imges/yellow-color.png";
import watsap from "./imges/watsap.svg";
import youtube from "./imges/youtube.svg";
import instagram from "./imges/instagram.svg";
import visa from "./imges/visa.svg";
import jcb from "./imges/scb.svg";
import maestro from "./imges/maestro.svg";
import mastercard from "./imges/mastercard.svg";
import mir from "./imges/mir.svg";

const Footerr = () => {
  return (
    <>
      <section className="footer-top">
        <div className="container">
          <div className="footer-top-left">
            <h4>Хотите быть в курсе выгодных предложений, акций и новинок?</h4>
          </div>
          <div className="footer-top-right">
            <input type="text" name="" id="" placeholder="Имя" />
            <input type="text" name="" id="" placeholder="Email" />
            <button>Подписаться</button>
          </div>
        </div>
      </section>

      {/* start main footer */}
      <section className="main-footer">
        <div className="container">
          <div className="main-footer-top">
              <div className="main-footer-top-left">
                    <div className="colors">
                      <div className="colors-top">
                        <img src={orange2} alt="" />
                        <img src={ brown2} alt="" />
                        <img src={yellow2} alt="" />
                      </div>
                      <h5>Логотип вашего магазина</h5>
                    </div>

                    <div className="left-text">
                      <h5>Наш адрес:</h5>
                      <h5>Москва, ул. Новокосимская д.7</h5>
                    </div>
              </div>

              <div className="main-footer-top-right">
                      <div className="grafik">
                        <h5>График работы: </h5>
                        <h5>Ежедневно с <span>9:00</span> до <span>21:00</span> </h5>
                      </div>
                      <button>Заказать звонок</button>
              </div>
          </div>


            {/* main footer center */}
            <div className="main-footer-center">
            <div className="main-footer-center-left">
                <div className="footer-links">
                  <h5>Для покупателей:</h5>
                  <a href="">Доставка</a>
                  <a href="">Гарантия</a>
                  <a href="">Политика конфиденциальности</a>
                  <a href="">Отзывы</a>
                  <a href="">Наши работы</a>
                </div>

                <div className="footer-links">
                  <h5>О компании:</h5>
                  <a href="">О Нас</a>
                  <a href="">Доставка и оплата</a>
                  <a href="">Наши работы</a>
                  <a href="">Контакты</a>
                  <a href="">Гарантия</a>
                </div>

                <div className="footer-links">
                  <h5>Категории:</h5>
                  <a href="">Беседки</a>
                  <a href="">Бани</a>
                  <a href="">Площадки</a>
                  <a href="">Дома</a>
                  <a href="">Перголы</a>
                  <a href="">Бренды</a>
                </div>

            </div>
            <div className="main-footer-center-right">
                  <div className="main-footer-center-right">
                        <h4>Для регионов <br /> (звонок бесплатный)</h4>
                        <h3>8 (800) <span>800-00-00</span></h3>
                        <a href="#">Email: youremail@mailbox.ru</a>
                        <h6>Мы в соц.сетях:</h6>

                        <div className="aloqa">
                            <a href="#"><img src={watsap} alt="" /></a>
                            <a href="#"><img src={youtube} alt="" /></a>
                            <a href="#"><img src={instagram} alt="" /></a>
                        </div>
                  </div>

                    <div className="main-footer-center-right-right">
                        <h4>Для Москвы <br />
                        и Московской области</h4>

                        <h3>8 (495) <span>700-00-00</span></h3>
                        <h6>Сообщить об ошибке на сайте</h6>
                          <p>
                            ООО  "Фаза Групп" <br /> 
                            ИНН:   7751140879  <br />
                            ОГРН: 1187746273461 <br />
                          </p>

                    </div>


            </div>
            </div>


            <div className="main-footer-bottom">
              <div className="main-footer-center-bottom-left">
                <h4>Публичная оферта   <br /> 
                  2013-2021 - Товары для дач,  <br />  
                деревянные конструкции под любые нужды</h4>
              </div>
              <div className="main-footer-center-bottom-right">
                <h5>Принимаем к оплате:</h5>
                  <div className="cards">
                  <a href="#"><img src={visa} alt="" /></a>
                  <a href="#"><img src={jcb} alt="" /></a>
                  <a href="#"><img src={maestro} alt="" /></a>
                  <a href="#"><img src={mastercard} alt="" /></a>
                  <a href="#"><img src={mir} alt="" /></a>
                  </div>
                 

              </div>
            </div>


        </div>
      </section>
    </>
  );
};


export default Footerr