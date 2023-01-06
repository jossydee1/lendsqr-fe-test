import React, { useContext } from "react";
import logo from "../../Assets/logo.png";
import searchIcon from "../../Assets/TopNav/search.svg";
import bell from "../../Assets/TopNav/bell.svg";
import avatar from "../../Assets/TopNav/avatar.svg";
import dropdown from "../../Assets/TopNav/dropdown.svg";
// import "../../Pages/Dashboard/Dashboard.scss";
import AppContext from "../../Context/Context";

function TopNav() {
  const phoneSize = window.matchMedia("(max-width: 768px)").matches;
  // const { hamburger, handleMenu } = useContext(AppContext);
  return (
    <div className="topNav">
      <img src={logo} alt="logo" className="logo" />
      <div
      // className={`hamburger ${hamburger ? "active" : ""}`}
      // onClick={handleMenu}
      >
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
      </div>
      <div className="flex-box">
        <div className="search-box">
          <input type="search" placeholder="Search for anything" />
          <div className="search-icon">
            <img src={searchIcon} alt="icon" className="icon" />
          </div>
        </div>
        <div className="right">
          {!phoneSize && (
            <>
              <p className="docs">Docs</p>
              <img src={bell} alt="bell" className="bell" />
            </>
          )}
          <img src={avatar} alt="avatar" className="avatar" />
          <p className="admin">Adedeji</p>
          <img src={dropdown} alt="icon" className="dropdown" />
        </div>
      </div>
    </div>
  );
}

export default TopNav;
