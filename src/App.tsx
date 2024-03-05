import React from 'react';
import './styles/Common.scss';
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import SettingBoard from "./Components/SettingBoard";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="App">
        <Navigation />
        <Projects />
        <div className='content_block'>
            <Header />
            <SettingBoard />
        </div>
    </div>
  );
}

export default App;
