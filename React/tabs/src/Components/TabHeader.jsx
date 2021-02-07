import React, {useState} from 'react';


const TabHeader = props => {
const selectHandler = e =>{
    props.isClicked(props.tabItem.index)
    console.log('you clicked tab # ${props.tabItem.index}')
}

    const selectedStyle = {
        backgroundColor: "mediumseagreen",
        
    }
    const notselectedStyle = {
        backgroundColor: "gray"
    }


    return(
        <button onClick={ selectHandler } style= {props.tabItem.selected ? selectedStyle : notselectedStyle} > {props.tabItem.title}</button>
    );
}

export default TabHeader;