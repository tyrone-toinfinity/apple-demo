import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <img
        src="public/logos/AppleLogo.svg"
        alt="apple logo"
        className="headerLogo"
      />
      <div className="header__search">
        <input type="text" name="" id="" className="header__searchIn" />
        {/* Logo */}
      </div>

      <nav className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineOne">Sign In</span>
        </div>
        <div className="header__option">
          {" "}
          <span className="header__optionLineOne">Returns</span>
        </div>
        <div className="header__option"></div>
      </nav>
    </div>
  );
};
