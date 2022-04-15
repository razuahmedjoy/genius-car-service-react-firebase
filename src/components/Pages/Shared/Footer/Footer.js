import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <footer className="text-center mt-5 bg-dark text-light p-2">
            <p><small>Copyright &copy;  {new Date().getFullYear()}</small></p>
        </footer>
    );
};

export default Footer;