import React from "react";
import './Presentation.css'
import { Button } from "../../Shared/molecules/Button/Button";

function Presentation (){
    const handleDescargarPDF = () => {
        const pdfUrl = '/cv Front end developer.pdf';
        window.open(pdfUrl, '_blank');
    };

    return (
        <div className="container">
            <img src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-gris.png" alt="foto"></img>
            <div className="data">
                
                <div className="personal">
                    <h2>Juan Pablo Fonseca</h2>
                    <h3>Software Developer</h3>
                    <p>Desarrollador especializado en <strong>aplicaciones web</strong>. Destacado por la puntualidad, perseverancia, disciplina y ser <strong>autodidacta</strong></p>
                </div>
                <Button label="ver CV" onClick={handleDescargarPDF}></Button>
            </div>
        </div>
    );
}

export {Presentation};