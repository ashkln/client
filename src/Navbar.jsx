import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <React.Fragment>
            <div className="navbar">
                <div className="navbar-title">
                    <h2>Monitor</h2>
                </div>
                <ul className="navbar-links">
                    <li className="navbar-link-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="navbar-link-item">
                        <Link to="/monitor" className="nav-link">Monitor</Link>
                    </li>
                    <li className="navbar-link-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <div className="navbar-collapsible-bars">
                        <div className="collapsible-bar-1"></div>
                        <div className="collapsible-bar-2"></div>
                        <div className="collapsible-bar-3"></div>
                    </div>
                </ul>
            </div>

            <div className="navbar-overlay">
                <div className="collapsible-close">&times;</div>
                <ul className="collapsible-links">
                    <li className="collapsible-link-item">
                        <Link to="/" className="collapsible-link"> Home</Link>
                    </li>
                    <li className="collapsible-link-item">
                        <Link to="/monitor" className="collapsible-link"> Monitor</Link>
                    </li>
                    <li className="collapsible-link-item">
                        <Link to="/about" className="collapsible-link">About</Link>
                    </li>
                </ul>
            </div>


        </React.Fragment>
    )
}
