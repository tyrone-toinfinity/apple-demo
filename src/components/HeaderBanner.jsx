import "./HeaderBanner.css";
export const HeaderBanner = () => {
  return (
    <div className="headerBannerWrapper">
      <div className="header__Banner">
        <div className="storeLocation">My Store</div>
        <div className="navShortcutLinks">
          <div className="nav__shortLink">Registry</div>
          <div className="nav__shortLink">Weekly Ad</div>
          <div className="nav__shortLink">RedCard</div>
          <div className="nav__shortLink">Target Circle</div>
          <div className="nav__shortLink">Find Stores</div>
        </div>
      </div>
    </div>
  );
};
