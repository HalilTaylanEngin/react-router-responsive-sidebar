import React from 'react';
import { BrowserRouter } from "react-router-dom";
import NavbarRouter from "./navbarRouter";
import NavbarContent from "./navbarContent";
import './navbar.scss'

const Navbar = () => {
    return (
        <BrowserRouter>
            <NavbarContent />
            <NavbarRouter />
        </BrowserRouter>
    )
};

export default Navbar;
