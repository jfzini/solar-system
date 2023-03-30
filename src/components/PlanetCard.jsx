import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;

    return (
      <div data-testid="planet-card" className={ `planet__card ${planetName}` }>
        <span data-testid="planet-name" className="no__show">{planetName}</span>
        <img
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
          className="planet__image"
        />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetImage: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
};

export default PlanetCard;
