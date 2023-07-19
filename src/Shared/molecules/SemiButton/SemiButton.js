import React from "react";
import "./styles.css"

function SemiButton({text, onClick, href}){
    return (
        <a href={href} onClick={onClick}>{text}</a>
    );
}

export {SemiButton};