import React from "react";
import './Button.css'

function Button({label, onClick}){
    return (
        <button onClick={onClick}>{label}</button>
    );
}

export {Button};