import './SecondaryNavbar.css'
import React from 'react';

import calender from '../icons/calender.svg';

export default function SecondaryNavbar(){
    return(
        <div className="secondary-navbar">
            <p className="date">Showing All Results</p>
            {/* <p className="date">Showing Result of <b></b></p> */}
            <button className="change-date" onclick="showCalender()">
                Tap to change
                <img src={calender} alt="Calender-icon" className="date"/>
            </button>
            {/* <div className="calender">
                <form action="/" method="post">
                    <input type="date" name="date" className="date-set" placeholder="13/06/2002" value="2002-06-13"/>
                    <button type="submit" className="show-content">Show Content</button>
                </form>
            </div>             */}
        </div>
    );
}