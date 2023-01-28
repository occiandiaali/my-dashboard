import React from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import logo from "../../assets/images/lendsqr.png";
import "./navbar.scss";

type navbarType = {
  isDark: string | null;
  setIsDark: React.Dispatch<React.SetStateAction<string | null>>;
};

const Navbar = ({ isDark, setIsDark }: navbarType) => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="brand-logo">
          <img src={logo} alt="" className="lendsqr-logo" />
        </div>
        <div className="search-div">
          <input type="text" placeholder="Search for anything" />
          <div className="search-icon-wrapper">
            <SearchOutlinedIcon
              fontSize="small"
              color="action"
              id="navbar-search-icon"
            />
          </div>
        </div>
        <div className="nav-end">
          <div className="docs-text">
            <span>
              <a href="https://www.google.com">Docs</a>
            </span>
          </div>
          {isDark === "dark" ? (
            <LightModeOutlinedIcon
              className="navbar-icon"
              onClick={() => {
                localStorage.setItem("isDark", "light");
                setIsDark("light");
              }}
            />
          ) : (
            <DarkModeOutlinedIcon
              className="navbar-icon"
              onClick={() => {
                localStorage.setItem("isDark", "dark");
                setIsDark("dark");
              }}
            />
          )}
          <NotificationsNoneIcon className="navbar-icon" onClick={() => {}} />
          <img
            src="https://images.pexels.com/photos/4350097/pexels-photo-4350097.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            className="avatar"
          />
          Abosede
          <KeyboardArrowDownIcon className="navbar-icon" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
