import React, { Component } from 'react';
import Title from './Title';
import MissionsData from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions" className="mission__wrapper">
        <Title headline="Missões" />
        <ul className="mission__container">
          {MissionsData.map(({ name, year, country, destination, moreInfo }) => (
            <li className="mission__card" key={ name }>
              <MissionCard
                key={ name }
                name={ name }
                year={ year }
                country={ country }
                destination={ destination }
                moreInfo={ moreInfo }
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Missions;
