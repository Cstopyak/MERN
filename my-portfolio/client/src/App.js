import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
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
          <Content>
            <div className="page-content" />
            <Main />
            <Footer/>
          </Content>
        </Layout>
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
