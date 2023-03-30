import React, { Component } from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import Planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <ul>
          <li>
            {
              Planets.map(({ name, image }) => (
                <PlanetCard planetName={ name } planetImage={ image } key={ name } />
              ))
            }
          </li>
        </ul>
      </div>
    );
  }
}

export default SolarSystem;
