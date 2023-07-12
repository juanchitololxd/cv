import React from "react";
import './Presentation.css'
import { Button } from "../../Shared/molecules/Button/Button";

function Presentation (){
    return (
        <div className="container">
            <img src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-gris.png" alt="foto"></img>
            <div className="data">
                <div className="personal">
                    <h2>Juan Pablo Fonseca</h2>
                    <h4>Software Developer</h4>
                </div>
                <Button label="Descargar CV"></Button>
            </div>
        </div>
    );
}

export {Presentation};