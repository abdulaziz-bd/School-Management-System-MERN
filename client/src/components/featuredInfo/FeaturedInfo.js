import React from 'react'
import "./featuredInfo.css";

export default function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featuredCoverPic">
            <img className="cover-img" src="https://27mi124bz6zg1hqy6n192jkb-wpengine.netdna-ssl.com/wp-content/uploads/2014/07/7-First-Day-of-School-Activities-Students-Love.jpg" alt="cover-img" />
        </div>
        <div className="featuredWelcome">
            <span className="featuredWelcomeText">Welcome to Home Page</span>
        </div>
        <div className="featuredItemContainer">
            <div className="featuredItem">
                <span className="featuredTitle">Number Of Total Teacher</span>
                <div className="featuredContainer">
                    <span className="numberOfStudents">15</span>
                </div>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Number Of Total Students</span>
                <div className="featuredContainer">
                    <span className="numberOfStudents">130</span>
                </div>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Students Grade Average</span>
                <div className="featuredContainer">
                    <span className="numberOfStudents">3.80</span>
                </div>
            </div>
        </div>
    </div>
  )
}
