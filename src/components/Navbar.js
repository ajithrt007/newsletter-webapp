import './Navbar.css'
import React from 'react';

import PrimaryNavbar from './PrimaryNavbar';
import SecondaryNavbar from './SecondaryNavbar';

export default function Navbar(){
    return(
        <div className="Navbar">        
            <PrimaryNavbar/>
            <SecondaryNavbar/>
        </div>
    );
}
