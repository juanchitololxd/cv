import React, { createContext, useState, useEffect } from 'react'
import { FaAngular, FaHtml5, FaCss3Alt, FaReact, FaPython} from 'react-icons/fa'
import { DiResponsive } from 'react-icons/di'
import { BiLogoJava } from 'react-icons/bi'
import { SiPwa, SiFlask, SiApachemaven, SiAzuredevops, SiQuarkus } from 'react-icons/si'
import {AiOutlineApi} from 'react-icons/ai'

const SkillsContext = createContext("SkillsContext");

function SkillsProvider({children}) {

    const [knowledges, setKnowledges] = useState([])

    const [selectedKnowledge, setSelectedKnowledge] = useState(undefined);

    useEffect(() => {
        const aux = [
            {name: "Front End", skills: [
                { logo: <FaAngular/>, name: "Angular"},
                { logo: <SiPwa/>, name: "PWA"},
                { logo: <FaHtml5/>, name: "HTML"},
                { logo: <FaCss3Alt/>, name: "CSS"},
                { logo: <FaReact/>, name: "React.js"},
                { logo: <DiResponsive/>, name: "Responsive design"}
            ]},
            {name: "Backed", skills: [
                {logo: <FaPython/>, name: "python"},
                {logo: <SiFlask/>, name: "flask"},
                {logo: <AiOutlineApi/>, name: "API REST"},
                {logo: <BiLogoJava/>, name: "Java"},
                {logo: <SiApachemaven/>, name: "Maven"},
                {logo: <SiQuarkus/>, name: "quarkus"}
            ]},
            {name: "Devops", skills: [
                {logo: <SiAzuredevops/>, name: "Azure Devops"}
            ]}
        ]
        setKnowledges(aux)
        setSelectedKnowledge(aux[0]);
    }, [])

  return (
    <SkillsContext.Provider
      value={{ knowledges, selectedKnowledge, setSelectedKnowledge }}
    >
      {children}
    </SkillsContext.Provider>
  );
}
export {SkillsContext, SkillsProvider};