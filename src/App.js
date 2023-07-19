import './App.css';
import { MainLayout } from './templates/MainLayout/MainLayout'
import { Presentation } from './pages/presentation/Presentation';
import React from 'react';
import { SkillsProvider } from './pages/skills/SkillsContext';
import { Skills } from './pages/skills/skills';
function App() {
  return (
    <React.Fragment>
      <MainLayout>
        <section>
          <Presentation/>
        </section>
        <section id="skills">
          <SkillsProvider>
            <Skills/>
          </SkillsProvider>
        </section>
        
        
        <div>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
        
      </MainLayout>
    </React.Fragment>
  );
}

export default App;
