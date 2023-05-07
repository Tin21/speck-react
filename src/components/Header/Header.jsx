import { NavLink } from "react-router-dom";
import {
  Header as HeaderWrapper,
  HeaderInner,
  Hamburger,
  LogoImg,
  HeaderLink,
  HeaderNav,
  HamburgerMenuInner,
  HamburgerMenuItem,
  HamburgerNavLink,
} from "./HeaderStyle";
import { Button } from "../../utils/styles/generalStyles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();

  const [active, setActive] = useState(false);

  const changeState = () => {
    setActive(!active);
  };

  return (
    <HeaderWrapper>
      <HeaderInner>
        <NavLink to="/">
          <LogoImg />
        </NavLink>
        <Hamburger onClick={() => changeState()} />
        {active && (
          <>
            <HamburgerMenuInner>
              <HamburgerNavLink to="/">
                <HamburgerMenuItem
                  onClick={() => {
                    changeState();
                  }}
                >
                  Home
                </HamburgerMenuItem>
              </HamburgerNavLink>

              <HamburgerNavLink to="/courses">
                <HamburgerMenuItem
                  onClick={() => {
                    changeState();
                  }}
                >
                  Courses
                </HamburgerMenuItem>
              </HamburgerNavLink>

              <HamburgerNavLink to="/profile">
                <HamburgerMenuItem
                  onClick={() => {
                    changeState();
                  }}
                >
                  Profile
                </HamburgerMenuItem>
              </HamburgerNavLink>

              <HamburgerNavLink to="/sign-in">
                <HamburgerMenuItem
                  onClick={() => {
                    changeState();
                  }}
                >
                  Sign In
                </HamburgerMenuItem>
              </HamburgerNavLink>

              <HamburgerNavLink to="/register">
                <HamburgerMenuItem
                  onClick={() => {
                    changeState();
                  }}
                >
                  Register
                </HamburgerMenuItem>
              </HamburgerNavLink>
            </HamburgerMenuInner>
          </>
        )}

        <HeaderNav>
          <HeaderLink to={"/"}>Home</HeaderLink>
          <HeaderLink to={"/courses"}>Courses</HeaderLink>
          <HeaderLink to={"/profile"}>Profile</HeaderLink>
          <Button isOutline onClick={() => navigate("/sign-in")}>
            Sign In
          </Button>
          <Button onClick={() => navigate("/register")}>Register</Button>
        </HeaderNav>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
