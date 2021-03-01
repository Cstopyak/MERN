import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Project from './Project';
import Resume from './Resume';
import Contact from './Contact';

const Main = () => (
    <Switch>
    <Route exact path="/" component = {Home}/>
    <Route path="/about" component = {About}/>
    <Route path="/resume" component = {Resume}/>
    <Route path="/projects" component = {Project}/>
    <Route path="/contact" component = {Contact}/>
    </Switch>
    
)

export default Main;
