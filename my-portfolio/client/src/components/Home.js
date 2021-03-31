import React, { Component } from 'react'
import "../css/Home.css";
import { Grid, Cell } from 'react-mdl';
import Footer from './Footer';
import About from './About';
import Project from './Project';
import Contact from './Contact';
class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="Home__Grid">
                    
                        
                            <div className="Banner">
                                <h1> Software Engineer</h1>
                                <hr />
                                <p> React | MERN | Java/Spring | Python/Django </p>
                            
                        </div>
                        
                </div>
                
            </div>
        )
    }
}
export default Home;

