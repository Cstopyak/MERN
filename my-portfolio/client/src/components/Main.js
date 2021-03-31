import React, { Component } from 'react'

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Project from './Project';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer';


function Main() {
    return(
<Router>
    <Home path ="/" />
    <About path = "/about"/>
    <Project path = "/project" />
    <Contact path = "/contact"/>
{/* <Route>
    
    <Route path="/" component = {Home}/>
    <Route path="/about" component = {About}/>
    <Route path="/resume" component = {Resume}/>
    <Route path="/projects" component = {Project}/>
    <Route path="/contact" component = {Contact}/>
    
</Route> */}
</Router>
    );
}
// const Main = () => (
    
//     <Switch>
//     <Route exact path="/" component = {Home}/>
//     <Route path="/about" component = {About}/>
//     <Route path="/resume" component = {Resume}/>
//     <Route path="/projects" component = {Project}/>
//     <Route path="/contact" component = {Contact}/>
//     <Route component= {Footer} />
//     </Switch>
    
    
// )

export default Main;
