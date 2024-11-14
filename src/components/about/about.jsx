import "./about.scss";
import aboutright from "./imges/about-right.png";
import qoshtirnoq from "./imges/qoshtirnoq.svg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-left">
          <div className="about-left-top">
            <h3>Немного о нас</h3>
          </div>

          <h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At lacus
            integer nunc, ornare ipsum lorem nulla est. Augue eros adipiscing
            nec senectus duis nibh. In faucibus adipiscing tellus enim,
            consequat integer accumsan. Ultrices ipsum nulla consequat malesuada
            enim mollis est.{" "}
          </h6>

          <div className="about-left-bottom">
            <img src={qoshtirnoq} alt="" />
            <div className="about-descrip">
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                lacus integer nunc, ornare ipsum lorem nulla est. Augue eros
                adipiscing nec senectus duis nibh. In faucibus adipiscing tellus
                enim, consequat integer accumsan. Ultrices ipsum nulla consequat
                malesuada enim mollis est. Venenatis, sagittis, amet ornare
                donec purus suscipit nam sodales. Varius sit amet nullam
                dictumst massa consequat odio faucibus.{" "}
              </h5>

              <h4>Никита Данилов, Руководитель компании</h4>
            </div>
          </div>
        </div>

        <div className="about-right">
          <img src={aboutright} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About