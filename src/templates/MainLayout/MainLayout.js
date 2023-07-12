import React, { useState } from "react";
import { AiOutlineLinkedin, AiOutlineMenu, AiOutlineEllipsis } from 'react-icons/ai';
import { TbMessageCircle2Filled } from 'react-icons/tb';
import { SiLinktree } from 'react-icons/si';

import { Icon } from "../../Shared/molecules/Icon/Icon";
import './MainLayout.css';


function MainLayout(props) {
  const [showMenu, setShowMenu] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleButtonContactClick = () => {
    setShowContact(!showContact);
  };

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
                <a href="#about" className={`${showMenu ? 'menu-item' : ''} `}>Acerca de mi</a>
                <a href="#skills" className={`${showMenu ? 'menu-item' : ''} `}>Conocimientos</a>
                <a href="#projects" className={`${showMenu ? 'menu-item' : ''} `}>Proyectos</a>
                <a href="#experience" className={`${showMenu ? 'menu-item' : ''} `}>Experiencias</a>
            </div>
            <section>
                {props.children}
            </section>
        </div>
    </div>
  );
}

export { MainLayout };
