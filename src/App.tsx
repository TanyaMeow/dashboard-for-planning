import React from 'react';
import './styles/Common.scss';
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import SettingBoard from "./Components/SettingBoard";
import UserTable from "./Components/UserTable";

function App() {
  return (
    <div className="App">
        <Navigation />
        <div className='content_block'>
            <Header />
            <SettingBoard />
        </div>
    </div>
  );
}

export default App;
