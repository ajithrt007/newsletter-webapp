import './PrimaryNavbar.css'
import React from 'react';

import evbex_logo from '../icons/new-evbex-logo.svg';
// import navbar_calander from '../icons/calender.svg';
import dropdown from '../icons/dropdown.svg';   

import Redbutton from './Redbutton.js';
import DropDownList from './DropDownList.js';

export default function PrimaryNavbar(){
    function showDropDown(){
        return <DropDownList/>;
    }
    return(
        <div className="primary-navbar">
            <a href="/"><img src={evbex_logo} alt="Evbex" className="logo"/></a>
            <div className="navbar-buttons">
                <button className="our-services" onMouseEnter={showDropDown}>
                    Services
                    <img src={dropdown} alt="" className="dropdown"/>
                </button>
                {/* <button className="subscribe" onclick="displaySubscribePopup()">Subscribe</button> */}
                <Redbutton buttonName="Subscribe"/>
            </div>
        </div>
    );
}