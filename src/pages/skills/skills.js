import React from 'react'
import { SemiButton } from '../../Shared/molecules/SemiButton/SemiButton'
import "./styles.css"
import { SkillsContext } from './SkillsContext'

export function Skills() {

    const { knowledges, selectedKnowledge, setSelectedKnowledge } = React.useContext(SkillsContext);

    return (
        <div>
            <h1 className='header'> Conocimientos </h1>
            <div className="knowledges">
                <div className="general">
                    {knowledges?.map((item) => (
                        <SemiButton key={item.name} text={item.name} onClick={() => setSelectedKnowledge(item)}
                        ></SemiButton>
                    )
                    )}
                </div> 
                <div>
                    {selectedKnowledge?.skills?.map((skill) => (
                        <span key={skill.name}>
                            {skill.logo}
                            {skill.name}
                        </span>
                    ))} 
                </div>
            </div>
        </div>
  )
}
