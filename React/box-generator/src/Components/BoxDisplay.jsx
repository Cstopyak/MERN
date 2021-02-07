import React, { useState } from 'react';


const BoxDisplay = (props) => {
    const myStyle = {
        backgroundColor: props.box.Color,
        height: "100px",
        width: "100px"
    }
    return (
        <>
            

            <div class="color-box">
                <h3 style= {myStyle}> </h3>
            </div>

        </>
    );
}

export default BoxDisplay;
