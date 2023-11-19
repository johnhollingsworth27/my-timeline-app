import React from 'react';
import '../Navbar/Navbar.css';
import { Icon } from 'semantic-ui-react'


const Footer = () => {
    return (
        <>
            

            <div className="footer">
                
                <div className="footer-content">
                    <div className="footer-title">
                        Copyright
                    <Icon name='copyright outline' size='small' />
                        2023 History in a Nutshell
                    </div>
                    <div className="footer-links">
                        {/* Footer links can go here */}
                        <a href="/" className="footer-link">Home</a>
                        <a href="/about" className="footer-link">About</a>
                        <a href="/contact" className="footer-link">Contact</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
