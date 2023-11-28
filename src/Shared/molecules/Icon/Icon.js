import React from "react";
import './Icon.css'
function Icon({children, url}){
    return (
        <a href={url} target="_blank" rel="noreferrer">
            {children}
        </a>
    )
}

export {Icon};