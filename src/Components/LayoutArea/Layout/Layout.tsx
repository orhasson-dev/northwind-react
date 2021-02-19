import './Layout.css';
import React from 'react';
import Header from '../Header/Header';

function Layout() : JSX.Element { // JSX.Element = UI object
    return (
        <div className="Layout">
            <header><Header/></header>
            <aside>B</aside>
            <main>C</main>
            <footer>D</footer>
        </div>
    );
}

export default Layout;