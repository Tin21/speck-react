import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "../../utils/styles/generalStyles";
import {
  Hero as HeroWrapper,
  HeroFigure,
  HeroImage,
  HeroContent,
  HeroContentInner,
  HeroOverlay,
  HeroTextCard,
  HeroTitle,
  HeroSubtitle,
} from "./HeroStyle";

const Hero = ({ imgSrc, imgAlt, title, subtitle, buttonText }) => {
  return (
    <HeroWrapper>
      <HeroFigure>
        <HeroImage src={imgSrc} alt={imgAlt} />
      </HeroFigure>
      <HeroOverlay></HeroOverlay>
      <HeroContent>
        <HeroContentInner>
          <HeroTextCard>
            <HeroTitle>{title}</HeroTitle>
            <HeroSubtitle>{subtitle}</HeroSubtitle>
            <Link to="/courses">
              <Button isSecondary>{buttonText}</Button>
            </Link>
          </HeroTextCard>
        </HeroContentInner>
      </HeroContent>
    </HeroWrapper>
  );
};

Hero.PropTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  buttonText: PropTypes.string,
};

export default Hero;
