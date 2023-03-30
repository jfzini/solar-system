import React, { Component } from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import Planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <ul className="solar-system__container">
          {
            Planets.map(({ name, image }) => (
              <li>
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
