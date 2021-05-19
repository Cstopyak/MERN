import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Element } from 'react-scroll';
import './App.css';
import Main from './components/Main';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Login from './components/Login';
//admin
import Admin from './components/adminComponents/Admin';

//edit components
import EditAbout from './components/editComponent/EditAbout';
import EditProject from './components/editComponent/EditProject';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Element className='Home'>
      <Route exact path="/" component={Home} />
    </Element>

      <Element className = "About">
        <Route exact path = "/" component={About}/>
      </Element>

      <Element className='Projects'>
      <Route exact path="/" component={Project} />
    </Element>

    <Element className='Contact'>
      <Route exact path="/" component={Contact} />
    </Element>



    <Route exact path="/login" render={()=><Login  />} />
      
      <Route exact path="/admin" render={()=><Admin />} />

      <Route exact path="/edit/:id" component={EditAbout} />
      <Route exact path="/editProject/:id" component={EditProject} />


    </div>
  )
}

export default App;


