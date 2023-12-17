import React from "react";
import footerlogo from "../icons_assets/footer_logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-logo">
                    <img src={footerlogo} alt="Footer Logo" />
                </div>
                <div className="footer-links">
                    <ul>
                        <h5>Quick Links</h5>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/">About</Link>
                        </li>
                        <li>
                            <Link to="/">Menu</Link>
                        </li>
                        <li>
                            <Link to="/">Reservation</Link>
                        </li>
                        <li>
                            <Link to="/">Login</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-contacts">
                    <ul>
                        <h5>Contact Us</h5>
                        <li>
                            <a href="#">Address</a>
                        </li>
                        <li>
                            <a href="#">Phone Number</a>
                        </li>
                        <li>
                            <a href="#">Email</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-socials">
                    <ul>
                        <h5>Connect With Us</h5>
                        <li>
                            <a href="#">Address</a>
                        </li>
                        <li>
                            <a href="#">Phone Number</a>
                        </li>
                        <li>
                            <a href="#">Email</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer;