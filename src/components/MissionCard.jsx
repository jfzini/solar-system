import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="mission__card--content">
        <p data-testid="mission-name" className="mission__card--name">{name}</p>
        <hr />
        <div className="mission__card--infos">
          <div className="mission__card--infos">
            <span className="material-symbols-outlined">
              calendar_month
            </span>
            <p data-testid="mission-year" className="mission__card--year">
              {year}
            </p>
            <span className="material-symbols-outlined">
              location_on
            </span>
            <p data-testid="mission-country" className="mission__card--country">
              {country}
            </p>
          </div>
          <div className="mission__card--infos">
            <span className="material-symbols-outlined">
              flag
            </span>
            <p data-testid="mission-destination" className="mission__card--destination">
              {destination}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default MissionCard;
