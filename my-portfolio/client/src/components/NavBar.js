import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import "../css/NavBar.css";

class Navbar extends Component {
    render() {
        return (
            <nav className="navBar">
                <ul className="nav__list">
                    <div className="nav__container">
                        <NavLink className="nav__section" to="/">
                            <li class Name=""> Home </li>
                        </NavLink>



                        <NavLink className="nav__section" to="/about">
                            <li class Name="nav__li"> About </li>
                        </NavLink>



                        <NavLink className="nav__section" to="/projects">
                            <li class Name="nav__li"> Projects </li>
                        </NavLink>

                        <NavLink className="nav__section" to="/contact">
                            <li class Name="nav__li"> Contact </li>
                        </NavLink>

                    </div>
                </ul>
            </nav>
        )
    }
}
export default Navbar;
