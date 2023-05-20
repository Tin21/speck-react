import { NavLink, Navigate } from "react-router-dom";
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
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Header = (props) => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin, user, setUser } =
    useContext(AuthContext);
  const [active, setActive] = useState(false);

  useEffect(() => {
    user && setIsAdmin(user.is_admin);
    user && localStorage.setItem("is_admin", user.is_admin);
    user && setIsLoggedIn(true);
  }, [user]);

  const changeState = () => {
    setActive(!active);
  };

  const logoutUser = () => {
    localStorage.clear();
    setUser(null);
    setIsLoggedIn(false);
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

              {isAdmin && isLoggedIn && (
                <HamburgerNavLink to="/profile">
                  <HamburgerMenuItem
                    onClick={() => {
                      changeState();
                    }}
                  >
                    Profile
                  </HamburgerMenuItem>
                </HamburgerNavLink>
              )}

              {!isLoggedIn && (
                <HamburgerNavLink to="/sign-in">
                  <HamburgerMenuItem
                    onClick={() => {
                      changeState();
                    }}
                  >
                    Sign In
                  </HamburgerMenuItem>
                </HamburgerNavLink>
              )}

              {isLoggedIn && (
                <HamburgerMenuItem
                  onClick={() => {
                    changeState();
                    logoutUser();
                  }}
                >
                  Sign out
                </HamburgerMenuItem>
              )}

              {!isLoggedIn && (
                <HamburgerNavLink to="/register">
                  <HamburgerMenuItem
                    onClick={() => {
                      changeState();
                    }}
                  >
                    Register
                  </HamburgerMenuItem>
                </HamburgerNavLink>
              )}
            </HamburgerMenuInner>
          </>
        )}

        <HeaderNav>
          <HeaderLink to={"/"}>Home</HeaderLink>
          <HeaderLink to={"/courses"}>Courses</HeaderLink>
          {isAdmin && isLoggedIn && (
            <HeaderLink to={"/profile"}>Profile</HeaderLink>
          )}
          {!isLoggedIn && (
            <Button isOutline onClick={() => navigate("/sign-in")}>
              Sign In
            </Button>
          )}
          {isLoggedIn && (
            <Button
              isOutline
              onClick={() => {
                logoutUser();
              }}
            >
              Log out
            </Button>
          )}
          {!isLoggedIn && (
            <Button isRegister onClick={() => navigate("/register")}>
              Register
            </Button>
          )}
        </HeaderNav>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
