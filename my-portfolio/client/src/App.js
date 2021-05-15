import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Element } from 'react-scroll';
import './App.css';
import Main from './components/Main';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Resume from './components/Resume';
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


    </div>
  )
}

export default App;


// class App extends Component {
//   render() {
//     return (
//       <div className="App">

//         <NavBar/>
//         <Main/>
//         {/* <Route exact path="/login" render={()=><Login  />} />

//       <Route exact path="/admin" render={()=><Admin />} /> */}




//       <Route component={Footer} />
//       </div>
//       // <div className="App">


//       //   <BrowserRouter>
//       //     <NavBar />
//       //     <Switch>
//       //       <Route component={Home} path='/' />
//       //       <Route component={About} path='/about' />
//       //       <Route component={Project} path='/project' />

//       //     </Switch>
//       //   </BrowserRouter>
//       // </div>
//     );
//   }
// }

// export default App;
