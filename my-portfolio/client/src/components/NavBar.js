import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import "../css/NavBar.css";

class Navbar extends Component {
    render() {
        return (
            <Layout>
          <Header className="header-color" title="Hi, I'm Colby" scroll>
            <Navigation>
            <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/contact">Contact</Link>

            </Navigation>
          </Header>
          <Drawer title="Portfolio">
            <Navigation>
              <Link to="/about">About</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/contact">Contact</Link>
              <Link to="#">LinkedIn</Link>
              <Link to="#">Github</Link>
              <Link to="#">Link</Link>
              <Link to="#">Link</Link>
            </Navigation>
          </Drawer>
          
        </Layout>
            // <nav className="navBar">
            //     <ul className="nav__list">
            //         <div className="nav__container">
            //             <NavLink className="nav__section" to="/">
            //                 <li class Name=""> Home </li>
            //             </NavLink>



            //             <NavLink className="nav__section" to="/about">
            //                 <li class Name="nav__li"> About </li>
            //             </NavLink>



            //             <NavLink className="nav__section" to="/projects">
            //                 <li class Name="nav__li"> Projects </li>
            //             </NavLink>

            //             <NavLink className="nav__section" to="/contact">
            //                 <li class Name="nav__li"> Contact </li>
            //             </NavLink>

            //         </div>
            //     </ul>
            // </nav>
        )
    }
}
export default Navbar;
