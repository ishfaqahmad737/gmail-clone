import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Avatar , IconButton } from '@mui/material';
function Header() {
  return(
  <div className="header">
    <div class="header__left">
    <IconButton>
      <MenuIcon/>
    </IconButton>  
    <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" alt="gmail-clone-logo" />
    </div>
    <div class="header__middle">
    <IconButton>
      <SearchIcon/>
    </IconButton> 
      <input type="text"placeholder="Search mail"/>
      <ArrowDropDownIcon/>
    </div>
    <div class="header__right">
    <IconButton>
      <AppsIcon/>
    </IconButton> 
    <IconButton>
      <NotificationsIcon/>
    </IconButton> 
      <Avatar sx={{width:35,height:35}}/>
    </div>
    
  </div>);
}

export default Header;
