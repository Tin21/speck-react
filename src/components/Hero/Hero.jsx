import "./Hero.scss";
import HeroImg from "../../assets/images/landing.jpg"
import Button from "../Button/Button"

const Hero = () => {
    return (
        <section className="Hero">
        <figure className="Hero-Figure">
          <img
            className="Hero-Image"
            src={HeroImg}
            alt="Speck academy"
          />
        </figure>
        <div className="Hero-Overlay"></div>
        <div className="Hero-Content">
          <div className="Hero-ContentInner">
            <div className="Hero-TextCard">
              <h1 className="Hero-Title">Learn what matters with Speck and FOI</h1>
              <p className="Hero-Subtitle">
                Make a turnaround in your career or upgrade your current skill
                set with knowledge-based lessons from IT practice.
              </p>
              <Button>
                Explore Courses
              </Button>
            </div>
          </div>
        </div>
      </section>
    );

};

export default Hero;