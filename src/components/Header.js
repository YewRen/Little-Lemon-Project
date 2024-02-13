import logo from "../icons_assets/Logo.svg";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>


                <div className="navigation">
                    <ul>
                        <li>
                            <Link to="/" className="nav-item">Home</Link>
                        </li>
                        <li>
                            <Link to="/" className="nav-item">About</Link>
                        </li>
                        <li>
                            <Link to="/" className="nav-item">Menu</Link>
                        </li>
                        <li>
                            <Link to="/reservations" className="nav-item">Reservations</Link>
                        </li>
                        <li>
                            <Link to="/" className="nav-item">Order Online</Link>
                        </li>
                        <li>
                            <Link to="/" className="nav-item">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;