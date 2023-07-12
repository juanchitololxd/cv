import React from "react";
import './Icon.css'
function Icon({children, url}){
    return (
        <a href={url}>
            {children}
        </a>
    )
}

export {Icon};