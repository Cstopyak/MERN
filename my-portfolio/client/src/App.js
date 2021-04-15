import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {Element} from 'react-scroll';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Admin from './components/adminComponents/Admin';
class App extends Component {
  render() {
    return (
      <div className="App">
        
        <NavBar/>
        <Main/>
        <Route exact path="/login" render={()=><Login  />} />
      
      <Route exact path="/admin" render={()=><Admin />} />

      
      

      <Route component={Footer} />
      </div>
      // <div className="App">


      //   <BrowserRouter>
      //     <NavBar />
      //     <Switch>
      //       <Route component={Home} path='/' />
      //       <Route component={About} path='/about' />
      //       <Route component={Project} path='/project' />

      //     </Switch>
      //   </BrowserRouter>
      // </div>
    );
  }
}

export default App;
