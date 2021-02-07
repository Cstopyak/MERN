import React, { Component } from 'react';

class PersonCardComp extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        }
    }
    ageButton = () => {
        this.state.age += 1;
        this.setState({age: this.state.age});
    }

    render() {
        return (
            <div>
                <h3> Name:{this.props.name}</h3>
                <p> Age:{this.state.age}</p>
                <p> Hair:{this.props.hair}</p>
                <button onClick={ this.ageButton }>Birthday Button</button>
                <hr/>
            </div>
        );
    }
}

export default PersonCardComp;