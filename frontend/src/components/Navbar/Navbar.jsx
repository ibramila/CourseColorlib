import React from 'react'
import "./style.scss"
import { NavLink } from "react-router-dom";
import { MdPhoneInTalk } from "react-icons/md"
function NavbarSide() {
    const activeNavbar = {
        fontWeight: 900,
        color: "#faba84"
    }
    return (
        <>
            <nav style={{ position: "fixed", zIndex: 999 }}>
                <div className='container'>
                    <div className='nav'>
                        <ul>
                            <li>
                                <img src="https://preview.colorlib.com/theme/course/images/logo.png" alt="" />
                            </li>
                            <li style={{fontWeight:700, fontSize:"20px"}}>
                                COURSE
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <NavLink style={({ isActive }) => (isActive ? activeNavbar : null)} to="/"> Home</NavLink>

                            </li>
                            <li>
                                <NavLink style={({ isActive }) => (isActive ? activeNavbar : null)} to="/add"> Add</NavLink>
                            </li>
                            <li>
                                <NavLink style={({ isActive }) => (isActive ? activeNavbar : null)} to="/contacts"> Contacts</NavLink>
                            </li>
                            <li>
                                <NavLink style={({ isActive }) => (isActive ? activeNavbar : null)} to="/aboutus"> About Us</NavLink>
                            </li> <li>
                                <NavLink style={({ isActive }) => (isActive ? activeNavbar : null)} to="/portfolio"> Portfolio</NavLink>
                            </li>
                            <li>
                                <NavLink style={({ isActive }) => (isActive ? activeNavbar : null)} to="/pricing"> Pricing</NavLink>
                            </li>
                        </ul>
                        <ul className='phone'>
                            <li>
                                <MdPhoneInTalk style={{ fontSize: "35px" }} />
                            </li>
                            <li>
                                +43 4566 7788 2457
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavbarSide