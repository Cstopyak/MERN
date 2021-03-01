import React, { Component } from 'react'
import "../css/Home.css";
import { Grid, Cell } from 'react-mdl';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Grid className="Home__Grid">
                    <Cell col={12}>
                        
                            <div className="Banner">
                                <h1> Software Engineer</h1>
                                <hr />
                                <p> React | MERN | Java/Spring | Python/Django </p>
                            
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Home;

