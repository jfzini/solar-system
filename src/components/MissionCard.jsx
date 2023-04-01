import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination, moreInfo } = this.props;
    return (
      <section className="mission__card--content">
        <a href={ moreInfo } target="_blank" rel="noreferrer">
          <p className="mission__card--name">{name.toUpperCase()}</p></a>
          <hr />
          <div className="mission__card--infos">
            <div className="mission__card--infos">
              <span className="material-symbols-outlined">
                calendar_month
              </span>
              <p className="mission__card--year">
                {year}
              </p>
              <span className="material-symbols-outlined">
                location_on
              </span>
              <p className="mission__card--country">
                {country}
              </p>
            </div>
            <div className="mission__card--infos">
              <span className="material-symbols-outlined">
                flag
              </span>
              <p className="mission__card--destination">
                {destination}
              </p>
            </div>
          </div>
      </section>
    );
  }
}

MissionCard.propTypes = {
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  moreInfo: PropTypes.string.isRequired,
};

export default MissionCard;
