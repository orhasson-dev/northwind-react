import React from 'react';
import './Footer.css';
import TotalProducts from "../../ProductArea/TotalProducts/TotalProducts";

function Footer() : JSX.Element { // JSX.Element = UI object {
    return (
        <div className="Footer">
            <p> All Rights Reserved &copy;</p>
            <TotalProducts/>
        </div>
    );
}

export default Footer;