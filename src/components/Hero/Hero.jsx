import "./Hero.scss";
import PropTypes from "prop-types";
import Button from "../Button/Button";

const Hero = ({imgSrc, imgAlt, title, subtitle, buttonText}) => {
    return (
        <section className="Hero">
        <figure className="Hero-Figure">
          <img
            className="Hero-Image"
            src={imgSrc}
            alt={imgAlt}
          />
        </figure>
        <div className="Hero-Overlay"></div>
        <div className="Hero-Content">
          <div className="Hero-ContentInner">
            <div className="Hero-TextCard">
              <h1 className="Hero-Title">{title}</h1>
              <p className="Hero-Subtitle">
                {subtitle}
              </p>
              <Button>
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
      </section>
    );

};

Hero.PropTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  buttonText: PropTypes.string,
}

export default Hero;