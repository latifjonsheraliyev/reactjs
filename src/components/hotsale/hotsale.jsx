import "./hotsale.scss";
import hotsaleimg from "./imges/hotsale-card.png";
import razmer from "./imges/razmer.svg";
import ploshad from "./imges/ploshad.svg";
import garantiya from "./imges/garantiya.svg";

const Hotsale = () => {
  return (
    <>
      <div className="container hitprodaj">
        <h2 className="hotsale">Хиты продаж</h2>
        <h5>Все товары </h5>
      </div>

      <div className="container">
        <div className="hotsale-top">
          <div className="hotsale-left">
            <h5>Беседки</h5>
          </div>

          <div className="hotsale-right">
            <h4>Бани</h4>
            <h4>Площадки</h4>
            <h4>Дома</h4>
            <h4>Дома</h4>
            <h4>Дома</h4>
          </div>
        </div>
      </div>

      <div className="hotsale-bottom">
        <div className="container">
          <div className="hotsale-card">
            <img src={hotsaleimg} alt="" />

            <div className="hotsale-card-bottom">
              <div className="nomer">
                <h6>Артикул: </h6>
                <h5>0000001</h5>
              </div>
              <h4>
                Название товара длинное <br />в две строки наверное
              </h4>

              <div className="hotsale-card-items">
                <img src={razmer} alt="" />
                <h4>
                  Размеры: <span> ..............................</span>{" "}
                </h4>
                <h5> 14.6 x 4.3 м.</h5>
              </div>
              <div className="hotsale-card-items">
                <img src={ploshad} alt="" />
                <h4>
                  Площадь: <span> ..............................</span>{" "}
                </h4>
                <h5>33 м2</h5>
              </div>
              <div className="hotsale-card-items">
                <img src={razmer} alt="" />
                <h4>
                  Вместимость:: <span> ..............................</span>{" "}
                </h4>
                <h5>15 чел</h5>
              </div>
              <div className="hotsale-card-items">
                <img src={garantiya} alt="" />
                <h4>
                  Гарантия: <span> ..............................</span>{" "}
                </h4>
                <h5>10 лет</h5>
              </div>

              <div className="kupit">
                <div className="kupit-left">
                  <div className="kupit-left-top">
                    <h5>6 127 500 ₽</h5>
                    <button>-25%</button>
                  </div>
                  <h3>5 023 900 ₽</h3>
                </div>
                <button>Купить</button>
              </div>
            </div>
          </div>

          <div className="hotsale-card">
            <img src={hotsaleimg} alt="" />

            <div className="hotsale-card-bottom">
              <div className="nomer">
                <h6>Артикул: </h6>
                <h5>0000001</h5>
              </div>
              <h4>
                Название товара длинное <br />в две строки наверное
              </h4>

              <div className="hotsale-card-items">
                <img src={razmer} alt="" />
                <h4>
                  Размеры: <span> ..............................</span>{" "}
                </h4>
                <h5> 14.6 x 4.3 м.</h5>
              </div>
              <div className="hotsale-card-items">
                <img src={ploshad} alt="" />
                <h4>
                  Площадь: <span> ..............................</span>{" "}
                </h4>
                <h5>33 м2</h5>
              </div>
              <div className="hotsale-card-items">
                <img src={razmer} alt="" />
                <h4>
                  Вместимость:: <span> ..............................</span>{" "}
                </h4>
                <h5>15 чел</h5>
              </div>
              <div className="hotsale-card-items">
                <img src={garantiya} alt="" />
                <h4>
                  Гарантия: <span> ..............................</span>{" "}
                </h4>
                <h5>10 лет</h5>
              </div>

              <div className="kupit">
                <div className="kupit-left">
                  <div className="kupit-left-top">
                    <h5>6 127 500 ₽</h5>
                    <button>-25%</button>
                  </div>
                  <h3>5 023 900 ₽</h3>
                </div>
                <button>Купить</button>
              </div>
            </div>
          </div>

          <div className="hotsale-card">
            <img src={hotsaleimg} alt="" />

            <div className="hotsale-card-bottom">
              <div className="nomer">
                <h6>Артикул: </h6>
                <h5>0000001</h5>
              </div>
              <h4>
                Название товара длинное <br />в две строки наверное
              </h4>

              <div className="hotsale-card-items">
                <img src={razmer} alt="" />
                <h4>
                  Размеры: <span> ..............................</span>{" "}
                </h4>
                <h5> 14.6 x 4.3 м.</h5>
              </div>
              <div className="hotsale-card-items">
                <img src={ploshad} alt="" />
                <h4>
                  Площадь: <span> ..............................</span>{" "}
                </h4>
                <h5>33 м2</h5>
              </div>
              <div className="hotsale-card-items">
                <img src={razmer} alt="" />
                <h4>
                  Вместимость:: <span> ..............................</span>{" "}
                </h4>
                <h5>15 чел</h5>
              </div>
              <div className="hotsale-card-items">
                <img src={garantiya} alt="" />
                <h4>
                  Гарантия: <span> ..............................</span>{" "}
                </h4>
                <h5>10 лет</h5>
              </div>

              <div className="kupit">
                <div className="kupit-left">
                  <div className="kupit-left-top">
                    <h5>6 127 500 ₽</h5>
                    <button>-25%</button>
                  </div>
                  <h3>5 023 900 ₽</h3>
                </div>
                <button>Купить</button>
              </div>
            </div>
          </div>

          <div className="hotsale-card">
            <img src={hotsaleimg} alt="" />

            <div className="hotsale-card-bottom">
              <div className="nomer">
                <h6>Артикул: </h6>
                <h5>0000001</h5>
              </div>
              <h4>
                Название товара длинное <br />в две строки наверное
              </h4>

              <div className="hotsale-card-items">
                <img src={razmer} alt="" />
                <h4>
                  Размеры: <span> ..............................</span>{" "}
                </h4>
                <h5> 14.6 x 4.3 м.</h5>
              </div>
              <div className="hotsale-card-items">
                <img src={ploshad} alt="" />
                <h4>
                  Площадь: <span> ..............................</span>{" "}
                </h4>
                <h5>33 м2</h5>
              </div>
              <div className="hotsale-card-items">
                <img src={razmer} alt="" />
                <h4>
                  Вместимость:: <span> ..............................</span>{" "}
                </h4>
                <h5>15 чел</h5>
              </div>
              <div className="hotsale-card-items">
                <img src={garantiya} alt="" />
                <h4>
                  Гарантия: <span> ..............................</span>{" "}
                </h4>
                <h5>10 лет</h5>
              </div>

              <div className="kupit">
                <div className="kupit-left">
                  <div className="kupit-left-top">
                    <h5>6 127 500 ₽</h5>
                    <button>-25%</button>
                  </div>
                  <h3>5 023 900 ₽</h3>
                </div>
                <button>Купить</button>
              </div>
            </div>
          </div>

          <div className="hotsale-card">
            <img src={hotsaleimg} alt="" />

            <div className="hotsale-card-bottom">
              <div className="nomer">
                <h6>Артикул: </h6>
                <h5>0000001</h5>
              </div>
              <h4>
                Название товара длинное <br />в две строки наверное
              </h4>

              <div className="hotsale-card-items">
                <img src={razmer} alt="" />
                <h4>
                  Размеры: <span> ..............................</span>{" "}
                </h4>
                <h5> 14.6 x 4.3 м.</h5>
              </div>
              <div className="hotsale-card-items">
                <img src={ploshad} alt="" />
                <h4>
                  Площадь: <span> ..............................</span>{" "}
                </h4>
                <h5>33 м2</h5>
              </div>
              <div className="hotsale-card-items">
                <img src={razmer} alt="" />
                <h4>
                  Вместимость:: <span> ..............................</span>{" "}
                </h4>
                <h5>15 чел</h5>
              </div>
              <div className="hotsale-card-items">
                <img src={garantiya} alt="" />
                <h4>
                  Гарантия: <span> ..............................</span>{" "}
                </h4>
                <h5>10 лет</h5>
              </div>

              <div className="kupit">
                <div className="kupit-left">
                  <div className="kupit-left-top">
                    <h5>6 127 500 ₽</h5>
                    <button>-25%</button>
                  </div>
                  <h3>5 023 900 ₽</h3>
                </div>
                <button>Купить</button>
              </div>
            </div>
          </div>

          <div className="hotsale-card">
            <img src={hotsaleimg} alt="" />

            <div className="hotsale-card-bottom">
              <div className="nomer">
                <h6>Артикул: </h6>
                <h5>0000001</h5>
              </div>
              <h4>
                Название товара длинное <br />в две строки наверное
              </h4>

              <div className="hotsale-card-items">
                <img src={razmer} alt="" />
                <h4>
                  Размеры: <span> ..............................</span>{" "}
                </h4>
                <h5> 14.6 x 4.3 м.</h5>
              </div>
              <div className="hotsale-card-items">
                <img src={ploshad} alt="" />
                <h4>
                  Площадь: <span> ..............................</span>{" "}
                </h4>
                <h5>33 м2</h5>
              </div>
              <div className="hotsale-card-items">
                <img src={razmer} alt="" />
                <h4>
                  Вместимость:: <span> ..............................</span>{" "}
                </h4>
                <h5>15 чел</h5>
              </div>
              <div className="hotsale-card-items">
                <img src={garantiya} alt="" />
                <h4>
                  Гарантия: <span> ..............................</span>{" "}
                </h4>
                <h5>10 лет</h5>
              </div>

              <div className="kupit">
                <div className="kupit-left">
                  <div className="kupit-left-top">
                    <h5>6 127 500 ₽</h5>
                    <button>-25%</button>
                  </div>
                  <h3>5 023 900 ₽</h3>
                </div>
                <button>Купить</button>
              </div>
            </div>
          </div>

          <div className="hotsale-card">
            <img src={hotsaleimg} alt="" />

            <div className="hotsale-card-bottom">
              <div className="nomer">
                <h6>Артикул: </h6>
                <h5>0000001</h5>
              </div>
              <h4>
                Название товара длинное <br />в две строки наверное
              </h4>

              <div className="hotsale-card-items">
                <img src={razmer} alt="" />
                <h4>
                  Размеры: <span> ..............................</span>{" "}
                </h4>
                <h5> 14.6 x 4.3 м.</h5>
              </div>
              <div className="hotsale-card-items">
                <img src={ploshad} alt="" />
                <h4>
                  Площадь: <span> ..............................</span>{" "}
                </h4>
                <h5>33 м2</h5>
              </div>
              <div className="hotsale-card-items">
                <img src={razmer} alt="" />
                <h4>
                  Вместимость:: <span> ..............................</span>{" "}
                </h4>
                <h5>15 чел</h5>
              </div>
              <div className="hotsale-card-items">
                <img src={garantiya} alt="" />
                <h4>
                  Гарантия: <span> ..............................</span>{" "}
                </h4>
                <h5>10 лет</h5>
              </div>

              <div className="kupit">
                <div className="kupit-left">
                  <div className="kupit-left-top">
                    <h5>6 127 500 ₽</h5>
                    <button>-25%</button>
                  </div>
                  <h3>5 023 900 ₽</h3>
                </div>
                <button>Купить</button>
              </div>
            </div>
          </div>

          <div className="hotsale-card">
            <img src={hotsaleimg} alt="" />

            <div className="hotsale-card-bottom">
              <div className="nomer">
                <h6>Артикул: </h6>
                <h5>0000001</h5>
              </div>
              <h4>
                Название товара длинное <br />в две строки наверное
              </h4>

              <div className="hotsale-card-items">
                <img src={razmer} alt="" />
                <h4>
                  Размеры: <span> ..............................</span>{" "}
                </h4>
                <h5> 14.6 x 4.3 м.</h5>
              </div>
              <div className="hotsale-card-items">
                <img src={ploshad} alt="" />
                <h4>
                  Площадь: <span> ..............................</span>{" "}
                </h4>
                <h5>33 м2</h5>
              </div>
              <div className="hotsale-card-items">
                <img src={razmer} alt="" />
                <h4>
                  Вместимость:: <span> ..............................</span>{" "}
                </h4>
                <h5>15 чел</h5>
              </div>
              <div className="hotsale-card-items">
                <img src={garantiya} alt="" />
                <h4>
                  Гарантия: <span> ..............................</span>{" "}
                </h4>
                <h5>10 лет</h5>
              </div>

              <div className="kupit">
                <div className="kupit-left">
                  <div className="kupit-left-top">
                    <h5>6 127 500 ₽</h5>
                    <button>-25%</button>
                  </div>
                  <h3>5 023 900 ₽</h3>
                </div>
                <button>Купить</button>
              </div>
            </div>
          </div>

          <div className="hotsale-card">
            <img src={hotsaleimg} alt="" />

            <div className="hotsale-card-bottom">
              <div className="nomer">
                <h6>Артикул: </h6>
                <h5>0000001</h5>
              </div>
              <h4>
                Название товара длинное <br />в две строки наверное
              </h4>

              <div className="hotsale-card-items">
                <img src={razmer} alt="" />
                <h4>
                  Размеры: <span> ..............................</span>{" "}
                </h4>
                <h5> 14.6 x 4.3 м.</h5>
              </div>
              <div className="hotsale-card-items">
                <img src={ploshad} alt="" />
                <h4>
                  Площадь: <span> ..............................</span>{" "}
                </h4>
                <h5>33 м2</h5>
              </div>
              <div className="hotsale-card-items">
                <img src={razmer} alt="" />
                <h4>
                  Вместимость:: <span> ..............................</span>{" "}
                </h4>
                <h5>15 чел</h5>
              </div>
              <div className="hotsale-card-items">
                <img src={garantiya} alt="" />
                <h4>
                  Гарантия: <span> ..............................</span>{" "}
                </h4>
                <h5>10 лет</h5>
              </div>

              <div className="kupit">
                <div className="kupit-left">
                  <div className="kupit-left-top">
                    <h5>6 127 500 ₽</h5>
                    <button>-25%</button>
                  </div>
                  <h3>5 023 900 ₽</h3>
                </div>
                <button>Купить</button>
              </div>
            </div>
          </div>

          <div className="hotsale-card">
            <img src={hotsaleimg} alt="" />

            <div className="hotsale-card-bottom">
              <div className="nomer">
                <h6>Артикул: </h6>
                <h5>0000001</h5>
              </div>
              <h4>
                Название товара длинное <br />в две строки наверное
              </h4>

              <div className="hotsale-card-items">
                <img src={razmer} alt="" />
                <h4>
                  Размеры: <span> ..............................</span>{" "}
                </h4>
                <h5> 14.6 x 4.3 м.</h5>
              </div>
              <div className="hotsale-card-items">
                <img src={ploshad} alt="" />
                <h4>
                  Площадь: <span> ..............................</span>{" "}
                </h4>
                <h5>33 м2</h5>
              </div>
              <div className="hotsale-card-items">
                <img src={razmer} alt="" />
                <h4>
                  Вместимость:: <span> ..............................</span>{" "}
                </h4>
                <h5>15 чел</h5>
              </div>
              <div className="hotsale-card-items">
                <img src={garantiya} alt="" />
                <h4>
                  Гарантия: <span> ..............................</span>{" "}
                </h4>
                <h5>10 лет</h5>
              </div>

              <div className="kupit">
                <div className="kupit-left">
                  <div className="kupit-left-top">
                    <h5>6 127 500 ₽</h5>
                    <button>-25%</button>
                  </div>
                  <h3>5 023 900 ₽</h3>
                </div>
                <button>Купить</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotsale;
