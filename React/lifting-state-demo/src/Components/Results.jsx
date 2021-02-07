import React, { useState } from 'react'

const Results = props => {
    return(
        <>
            <h1> here all the supers</h1>
            {
                props.allSupers.map((supe) => {
                    return <div>
                        <h3> Alias:{supe.Alias}</h3>
                        <h3> Real Name: {supe.Realname}</h3>
                        <h3> Power: {supe.Power}</h3>
                        <h3> HQ: {supe.Hq}</h3>
                        <h3> Weakness: {supe.Weakness}</h3>
                        <hr/>
                    </div>
                })
            }
        </>
    );
}

export default Results;