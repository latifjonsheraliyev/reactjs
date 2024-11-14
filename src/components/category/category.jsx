import "./category.scss";
import ct_left from "./imges/category-left.png";
import ct_center1 from "./imges/category-center-1.png";
import ct_center2 from "./imges/category-center-2.png";
import ct_center3 from "./imges/category-center-3.png";
import ct_right1 from "./imges/category-right-1.png";
import ct_right2 from "./imges/category-right-2.png";



const Category = () => {
  return (
    <>
      <section className="category">
        <div className="container">
          <h3>Категории</h3>

          <div className="category-main">

            <div className="category-left">
                <div className="categor-left-top">
                  <h5>Беседки</h5>
                  <div className="pod">
                    <h6>Подкатегория 1</h6>
                    <h6>Подкатегория 2</h6>
                    <h6>Подкатегория 3</h6>
                    <h6>Подкатегория 4</h6>
                    <h6>Подкатегория 5</h6>
                    <h6>Подкатегория 6</h6>
                  </div>

                </div>

                <img src={ct_left} alt="" />    

            </div>


            <div className="category-center">

                <div className="category-center-item">
                  <div className="ct-center-left">
                    <h5>Бани</h5>
                    <h6>Подкатегория 1</h6>
                    <h6>Подкатегория 2</h6>
                    <p>...</p>
                  </div>

                    <img src={ct_center1} alt="" />
                </div>

                <div className="category-center-item">
                  <div className="ct-center-left">
                    <h5>Бани</h5>
                    <h6>Подкатегория 1</h6>
                    <h6>Подкатегория 2</h6>
                    <p>...</p>
                  </div>
                  <img src={ct_center2} alt="" />
                </div>

                <div className="category-center-item">
                  <div className="ct-center-left">
                    <h5>Бани</h5>
                    <h6>Подкатегория 1</h6>
                    <h6>Подкатегория 2</h6>
                    <p>...</p>
                  </div>
                  <img src={ct_center3} alt="" />
                </div>

            </div>

            <div className="category-right">
                    <div className="ct-right-item">
                      <div className="ct-right-item-left">
                        <h5>Детские площадки</h5>
                        <p>Подкатегория 1</p>
                        <p>Подкатегория 2</p>
                        <p>Подкатегория 3</p>
                        <p>Подкатегория 4</p>
                        <p>Подкатегория 5</p>

                      </div>
                      <div className="foiz">
                      <img src={ct_right1} alt="" />
                      </div>
                    </div>

                    <div className="ct-right-item">
                      <div className="ct-right-item-left">
                        <h5>Детские площадки</h5>
                        <p>Подкатегория 1</p>
                        <p>Подкатегория 2</p>
                        <p>Подкатегория 3</p>
                        <p>Подкатегория 4</p>
                        <p>Подкатегория 5</p>

                      </div>
                      <div className="foiz">
                      <img src={ct_right2} alt="" />
                      </div>
                    </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
