import "./Header.scss";
import "../Button/Button.scss";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  Header as HeaderWrapper,
  HeaderInner,
  Hamburger,
  LogoImg,
  HeaderLink,
  HeaderNav,
} from "./HeaderStyle";
import { Button } from "../../utils/styles/generalStyles";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <Link to="/">
          <LogoImg />
        </Link>
        <Hamburger />
        <HeaderNav>
          <HeaderLink to={"/"}>Home</HeaderLink>
          <HeaderLink to={"/courses"}>Courses</HeaderLink>
          <Link to={"/register"}>
            <Button>Register</Button>
          </Link>
        </HeaderNav>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
