import React, { Component } from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import Planets from '../data/planets';
import Sun from './Sun';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <div className="no__show">
          <Title headline="Planetas" />
        </div>
        <ul className="solar-system__container">
          <Sun />
          {
            Planets.map(({ name, image }) => (
              <li key={ name }>
                <PlanetCard planetName={ name } planetImage={ image } key={ name } />
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default SolarSystem;
