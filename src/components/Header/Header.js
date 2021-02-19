import React from "react";
import "./Header.css";
import { Toolbar, IconButton, InputBase, Avatar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SettingsIcon from "@material-ui/icons/Settings";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import { auth } from "../../Firebase";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser)

  const signOutUser = () => {
    auth.signOut().then(() => {
      dispatch(logout())
    }).catch(err => alert(err.message))
  }

  return (
    <Toolbar className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r2.png"
          alt="Gmail_logo"
        />
      </div>

      <div className="header__middle">
        <SearchIcon className="search__icon" />
        <InputBase placeholder="Search…" className="search__input" />
      </div>

      <div className="header__right">
        <IconButton color="inherit">
          <SettingsIcon />
        </IconButton>
        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>
        <Avatar onClick={signOutUser} src={user?.photoURL} />
      </div>
    </Toolbar>
  );
};

export default Header;
