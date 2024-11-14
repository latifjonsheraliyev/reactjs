import "./showcase.scss";
import showcaseitem1 from "./imges/showcase-items.png";
import showcaseitem2 from "./imges/showcase-items2.png";
import showcaseitem3 from "./imges/showcase-items3.png";
import showcaseitem4 from "./imges/showcase-items4.png";
const Showcase =()=>{

    return(
        <>
        <section className="showcase">
            <div className="container">
                    <h2>Беседки под ключ <br />
                    за 7 дней</h2>


                <div className="showcase-line">
                    <h4>Выгода до 24%</h4>
                    <h4>Сборка за 1 день</h4>
                </div>

            </div>
        </section>
        <section className="showcase-end">
            <div className="container">
                <div className="showcase-end-item">
                    <img src={showcaseitem1} alt="" />
                    <h5>Изготовливаем конструкции
                    по вашему дизайн-проекту</h5>
                </div>
                <div className="showcase-end-item">
                    <img src={showcaseitem2} alt="" />
                    <h5>Изготовливаем конструкции
                    по вашему дизайн-проекту</h5>
                </div>

                <div className="showcase-end-item">
                    <img src={showcaseitem3} alt="" />
                    <h5>Изготовливаем конструкции
                    по вашему дизайн-проекту</h5>
                </div>

                <div className="showcase-end-item">
                    <img src={showcaseitem4} alt="" />
                    <h5>Изготовливаем конструкции
                    по вашему дизайн-проекту</h5>
                </div>

                <div className="showcase-end-item">
                    <img src={showcaseitem1} alt="" />
                    <h5>Изготовливаем конструкции
                    по вашему дизайн-проекту</h5>
                </div>
            </div>
        </section>

        </>
    )

}

export default Showcase