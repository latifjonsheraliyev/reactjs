import "./clients.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Clients = () => {
  return (
    <>
      <div className="container">
        <h3 className="otziv">Отзывы наших клиентов</h3>
      </div>

      <div className="swiper-section">
        <div className="container">

          <div className="swiper-card">
            <div className="swiper-card-top">
              <div className="swiper-card-top-left">
                <h4>Алексей С.А.</h4>
                <p>28 июня 2021</p>
              </div>
              <div className="swiper-card-top-right">
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <h5>Общая оценка: (4,8) </h5>
              </div>
            </div>

            <div className="swiper-card-bottom">
              <p>
                «Цена хорошая, все соответствует ожиданиям. Подбирала перголу
                для своего участка. Также мне хотелось бы отметить вежливость
                работников компании, все подробно рассказали. Я считаю этот
                магазин отличным. И наверняка буду покупать снова или советовать
                коллегам.»
              </p>
              <a href="">Читать полностью</a>
            </div>
          </div>

          <div className="swiper-card">
            <div className="swiper-card-top">
              <div className="swiper-card-top-left">
                <h4>Алексей С.А.</h4>
                <p>28 июня 2021</p>
              </div>
              <div className="swiper-card-top-right">
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <h5>Общая оценка: (4,8) </h5>
              </div>
            </div>

            <div className="swiper-card-bottom">
              <p>
                «Цена хорошая, все соответствует ожиданиям. Подбирала перголу
                для своего участка. Также мне хотелось бы отметить вежливость
                работников компании, все подробно рассказали. Я считаю этот
                магазин отличным. И наверняка буду покупать снова или советовать
                коллегам.»
              </p>
              <a href="https://kun.uz/en">Читать полностью</a>
            </div>
          </div>

          <div className="swiper-card">
            <div className="swiper-card-top">
              <div className="swiper-card-top-left">
                <h4>Алексей С.А.</h4>
                <p>28 июня 2021</p>
              </div>
              <div className="swiper-card-top-right">
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <h5>Общая оценка: (4,8) </h5>
              </div>
            </div>

            <div className="swiper-card-bottom">
              <p>
                «Цена хорошая, все соответствует ожиданиям. Подбирала перголу
                для своего участка. Также мне хотелось бы отметить вежливость
                работников компании, все подробно рассказали. Я считаю этот
                магазин отличным. И наверняка буду покупать снова или советовать
                коллегам.»
              </p>
              <a href="https://kun.uz/en">Читать полностью</a>
            </div>
          </div>
        </div>
      </div>

        <div className="yolgizbuton">
            <button>Открыть все отзывы</button>
        </div>

    </>
  );
};

export default Clients;
