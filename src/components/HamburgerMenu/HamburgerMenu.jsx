import {
  ReactComponent as Hamburger,
  HamburgerMenu,
  HamburgerHeaderInner,
} from "../Header/HeaderStyle";
import { HamburgerMenuClicked, HeaderInner } from "./HamburgerMenuStyle";
import PropTypes from "prop-types";

const HamburgerMenu = ({ state }) => {
  return (
    <>
      <HamburgerHeaderInner />
    </>
  );
};

HamburgerMenu.PropTypes = {
  state: PropTypes.bool,
};

export default HamburgerMenu;
