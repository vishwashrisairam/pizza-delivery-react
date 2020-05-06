import React from 'react';
import '../index.css'

function Loader(props){
    // console.log("Loading",props.show)
    return (
        // <div className={props.show ? "" :"hide"}>
        <div className="loader center">
            <i className="fas fa-cog fa-spin fa-10x" />
        </div>
        // </div>
    )
} 

export default Loader;