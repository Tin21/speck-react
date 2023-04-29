import { Link } from "react-router-dom";
import PropTypes from "prop-types";
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
import { useNavigate } from "react-router-dom";
import {
  HamburgerMenu,
  HamburgerHeaderInner,
  HamburgerMenuInner,
  HamburgerMenuItem,
} from "../HamburgerMenu/HamburgerMenuStyle";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();

  const [active, setActive] = useState(false);

  const changeState = () => {
    setActive(!active);
  };

  /* const vratiBok = (state) => {
    if (state === true) return <HamburgerMenu />;
  }; */

  return (
    <HeaderWrapper>
      <HeaderInner>
        <Link to="/">
          <LogoImg />
        </Link>
        <Hamburger onClick={() => changeState()} />
        {active && (
          <>
            <HamburgerMenu />
            <HamburgerMenuInner>
              <HamburgerMenuItem
                onClick={() => {
                  navigate("/");
                  changeState();
                }}
              >
                Home
              </HamburgerMenuItem>
              <HamburgerMenuItem
                onClick={() => {
                  navigate("/courses");
                  changeState();
                }}
              >
                Courses
              </HamburgerMenuItem>

              <HamburgerMenuItem
                onClick={() => {
                  navigate("/signin");
                  changeState();
                }}
              >
                Sign In
              </HamburgerMenuItem>

              <HamburgerMenuItem
                onClick={() => {
                  navigate("/register");
                  changeState();
                }}
              >
                Register
              </HamburgerMenuItem>
            </HamburgerMenuInner>
          </>
        )}

        <HeaderNav>
          <HeaderLink to={"/"}>Home</HeaderLink>
          <HeaderLink to={"/courses"}>Courses</HeaderLink>
          <Button onClick={() => navigate("/register")}>Register</Button>
        </HeaderNav>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
