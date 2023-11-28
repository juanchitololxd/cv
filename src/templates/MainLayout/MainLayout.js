import React, { useState } from "react";
import { AiOutlineLinkedin, AiOutlineMenu, AiOutlineEllipsis, AiOutlineMessage } from 'react-icons/ai';
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
      if (!showContact) document.body.classList.add('blurred')
      else document.body.classList.remove('blurred')
    
  };
  return (
    <div id="container" className="main-container">
        <div className="left-menu">
            <AiOutlineEllipsis className="primary-button icon circle" onClick={handleButtonContactClick}/>
            <div className={showContact ? 'buttons-show': 'buttons'}>
                <Icon url="https://www.linkedin.com/in/juanpablofonsecac/">
                    <AiOutlineLinkedin/>
                </Icon>
                <Icon url={`mailto:juanpablofonsecac5@gmail.com?subject=${encodeURIComponent('Contratación')}`}>
                    <AiOutlineMessage/>
                </Icon>
                <Icon url="https://linktr.ee/eltiojuanchito">
                    <SiLinktree/>
                </Icon>
            </div>
        </div>
        <div>
            <div className="top-menu">
                <AiOutlineMenu className="menu-icon icon" onClick={handleMenuClick} />    
                <div className={`${!!showMenu ? 'menu-items' : 'menu-disabled'}`}>
                  <SemiButton text="Conocimientos" href="#skills" onClick={handleMenuClick}></SemiButton>
                  <SemiButton text="Proyectos" href="#projects" onClick={handleMenuClick}></SemiButton>
                  <SemiButton text="Experiencia" href="#experience" onClick={handleMenuClick}></SemiButton>
                </div>


            </div>
            {props.children}
            
        </div>
    </div>
  );
}

export { MainLayout };
