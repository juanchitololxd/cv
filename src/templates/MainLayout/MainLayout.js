import React, { useState } from "react";
import { AiOutlineLinkedin, AiOutlineMenu, AiOutlineEllipsis } from 'react-icons/ai';
import { TbMessageCircle2Filled } from 'react-icons/tb';
import { SiLinktree } from 'react-icons/si';

import { Icon } from "../../Shared/molecules/Icon/Icon";
import './MainLayout.css';
import { SemiButton } from "../../Shared/molecules/SemiButton/SemiButton";



function MainLayout(props) {
  const [showMenu, setShowMenu] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleButtonContactClick = () => {
    setShowContact(!showContact);
  };
  console.log("reder")
  return (
    <div className="main-container">
        <div className="left-menu">
            <AiOutlineEllipsis className="primary-button icon circle" onClick={handleButtonContactClick}/>
            <div className={showContact ? 'buttons-show': 'buttons'}>
                <Icon url="https://www.linkedin.com/in/juanpablofonsecac/">
                    <AiOutlineLinkedin/>
                </Icon>
                <Icon url={`mailto:juanpablofonsecac5@gmail.com?subject=${encodeURIComponent('Contratación')}`}>
                    <TbMessageCircle2Filled/>
                </Icon>
                <Icon url="https://linktr.ee/eltiojuanchito">
                    <SiLinktree/>
                </Icon>
            </div>
        </div>
        <div>
            <div className="top-menu">
                <AiOutlineMenu className="menu-icon icon" onClick={handleMenuClick} />    
                <SemiButton className={`${showMenu ? 'menu-item' : ''} `} text="Conocimientos" href="#skills"></SemiButton>
                <SemiButton className={`${showMenu ? 'menu-item' : ''} `} text="Proyectos" href="#projects"></SemiButton>
                <SemiButton className={`${showMenu ? 'menu-item' : ''} `} text="Experiencia" href="experience"></SemiButton>

            </div>
            {props.children}
            
        </div>
    </div>
  );
}

export { MainLayout };
