import React from 'react'
import "./topbar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topleft">
                <span className='logo'>School Management System</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNoneIcon />
                    <span className='topbarIconBadge'>2</span>
                </div>  
                <div className="topbarIconContainer">
                    <LanguageIcon />
                
                </div> 
                <div className="topbarIconContainer">
                    <SettingsIcon />
                </div>  
                <div className="topbarIconContainer">
                    <img src="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916__340.png" alt="avatar-img" className="topAvatar" />
                </div>  
            </div>
        </div>
    </div>
  )
}
