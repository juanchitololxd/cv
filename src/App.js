import './App.css';
import { MainLayout } from './templates/MainLayout/MainLayout'
import { Presentation } from './pages/presentation/Presentation';
import { About } from './pages/About/About';
import React from 'react';
function App() {
  return (
    <React.Fragment>
      <MainLayout>
        <Presentation/>
        <About></About>
      </MainLayout>
    </React.Fragment>
  );
}

export default App;
