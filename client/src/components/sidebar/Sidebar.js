import React from 'react'
import "./sidebar.css"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function Sidebar() {
  return (
    <div className='sideBar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <LineStyleIcon className="sidebarIcon"/>
                        <a href="/">Home</a>
                    </li>
                    <li className="sidebarListItem">
                        <TimelineIcon className="sidebarIcon"/>
                        <a href="/register">Register New Student</a>
                    </li> 
                    <li className="sidebarListItem">
                        <TrendingUpIcon className="sidebarIcon"/>
                        <a href="/profile">View Students Profile</a>
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUpIcon className="sidebarIcon"/>
                        <a href="/show">View All Students</a>
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUpIcon className="sidebarIcon"/>
                        <a href="/update">Update Students Data</a>
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUpIcon className="sidebarIcon"/>
                        <a href="/register">View Students Result</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
