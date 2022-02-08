import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose, AiOutlineLogin, AiOutlineLogout, AiFillReconciliation } from 'react-icons/ai';
import { FaBell } from 'react-icons/fa';
import { VscAccount } from 'react-icons/vsc';
import { navbarNavList } from './navbar-nav-list';
import './navbar.scss'
import Register from '../register/Register';
import Login from '../login/Login';

const NavbarContent = () => {

    const [showSidebar, setShowSidebar] = useState(false)
    const [showRegister, setShowRegister] = useState(false)
    const [showLogin, setShowLogin] = useState(false)

    const handleClickMenuButton = () => {
        setShowSidebar(!showSidebar)
    }


    return (
        <section className="navbar">
            <div className="container">
                <object>
                    <Link to="/" ><img src='images/logo.png' alt='logo' /></Link>
                </object>
                <menu className={showSidebar ? 'open' : null} >
                    <nav className={!showSidebar ? 'link-wrapper' : 'link-wrapper open'} >
                        {navbarNavList.map((listItem, i) => {
                            return <Link key={i} to={listItem.to} onClick={handleClickMenuButton} >
                                <span >{listItem.icon} </span>  {listItem.title}
                            </Link>
                        })}

                    </nav>
                    <nav className='icon-wrapper'>
                        <button ><FaBell className='menu-toggle' /> </button>
                        <button className='dropdown' ><VscAccount className='menu-toggle' />
                            <ul>
                                <li onClick={() => setShowLogin(true)}> <span ><AiOutlineLogin className='menu-toggle' /> </span> Login  </li>
                                <li onClick={() => setShowRegister(true)} > <span ><AiFillReconciliation className='menu-toggle' /> </span> Register  </li>
                                <li> <span ><AiOutlineLogout className='menu-toggle' /> </span> Logout  </li>
                            </ul>
                        </button>
                    </nav>
                </menu>
                <button className='menu-toggle' onClick={handleClickMenuButton} >
                    {showSidebar ? <AiOutlineClose className='menu-toggle' /> : <AiOutlineMenu className='menu-toggle' />}
                </button>
            </div>
            <Register showRegister={showRegister} setShowRegister={setShowRegister} />
            <Login showLogin={showLogin} setShowLogin={setShowLogin} />
        </section >

    )
};

export default NavbarContent;
