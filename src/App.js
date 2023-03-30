import React from 'react';
import './App.css';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <div className="page__container">
        <Header />
        <SolarSystem />
        <Missions />
      </div>
    );
  }
}

export default App;
