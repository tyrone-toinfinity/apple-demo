import { HeaderBanner } from "./HeaderBanner";
import { FaSearch, FaRegUserCircle } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import "./Header.css";

export const Header = () => {
  return (
    <>
      <HeaderBanner />
      <div className="headerWrapper">
        <div className="header">
          <img
            src="public/logos/TargetLogo.svg"
            alt="apple logo"
            className="headerLogo"
          />
          <ul className="nav__List">
            <li className="nav__linkoption">Categories</li>
            <li className="nav__linkoption">Deals</li>
            <li className="nav__linkoption">What's New</li>
            <li className="nav__linkoption">Pickup & Delivery</li>
          </ul>
          <div className="header__search">
            <input
              type="text"
              name=""
              id=""
              className="header__searchInput"
              placeholder="Search"
            />
            <FaSearch className="header__searchIcon" />
          </div>
          <nav className="header__nav">
            <div className="header__option">
              <span className="header__optionLineOne">
                <FaRegUserCircle />
              </span>
              <span className="header__optionLineOne">Sign In</span>
            </div>
            <div className="header__option">
              {" "}
              <span className="header__optionLineOne">
                <FiShoppingCart />
              </span>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
