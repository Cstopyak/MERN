import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import "../css/NavBar.css";




const NavBar = () => {
  const [toggle, setToggle] = useState();


  //creating toggle functionality
  const toggleAction = () => {
    setToggle(!toggle)
  }

  const closeNavbar = () => {
    if (toggle === true) {
      setToggle(false)
    }
  }


  return (
    <div className="nav-container">
      <nav>
        <div className="logoBtn">
          <Link to="/">Hi, I'm Colby</Link>
          <div className="btn" onClick={toggleAction}>
            <div className={toggle ? "bar1 animationBar" : "bar bar1"}></div>
            <div className={toggle ? "bar2 animationBar" : "bar bar2"}></div>
            <div className={toggle ? "bar3 animationBar" : " bar3"}></div>
          </div>

        </div>
        <div className="links-container">
          <ul className={toggle ? "new-links links" : "links"} onClick={closeNavbar}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Projects</Link></li>
            <li className="admin"><Link to="/">Admin</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
        </div>




      </nav>
    </div>
  )
}
export default NavBar;
// class Navbar extends Component {
//     render() {
//         return (
//             <Layout>
//           <Header className="header-color" title="Hi, I'm Colby" scroll>
//             <Navigation>
//             <Link to="/">Home</Link>
//               <Link to="/About">About</Link>
//               <Link to="/projects">Projects</Link>
//               <Link to="/resume">Resume</Link>
//               <Link to="/contact">Contact</Link>
//               <Link to="/register">Register</Link>
//               <Link to="/Login">Login</Link>
//               <Link to="/Admin">Admin</Link>

//             </Navigation>
//           </Header>
//           <Drawer title="Portfolio">
//             <Navigation>
//               <Link to="/about">About</Link>
//               <Link to="/resume">Resume</Link>
//               <Link to="/contact">Contact</Link>
//               <Link to="#">LinkedIn</Link>
//               <Link to="#">Github</Link>
//               <Link to="/register">Register</Link>
//               <Link to="/Login">Login</Link>
//               <Link to="/Admin">Admin</Link>
//             </Navigation>
//           </Drawer>

//         </Layout>
//             // <nav className="navBar">
//             //     <ul className="nav__list">
//             //         <div className="nav__container">
//             //             <NavLink className="nav__section" to="/">
//             //                 <li class Name=""> Home </li>
//             //             </NavLink>



//             //             <NavLink className="nav__section" to="/about">
//             //                 <li class Name="nav__li"> About </li>
//             //             </NavLink>



//             //             <NavLink className="nav__section" to="/projects">
//             //                 <li class Name="nav__li"> Projects </li>
//             //             </NavLink>

//             //             <NavLink className="nav__section" to="/contact">
//             //                 <li class Name="nav__li"> Contact </li>
//             //             </NavLink>

//             //         </div>
//             //     </ul>
//             // </nav>
//         )
//     }
// }
// export default Navbar
