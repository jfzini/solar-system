//This could have been created on ./PlanetCard.jsx, but since it was a personal addition, I had to create this new component in order to pass the original tests
import React, { Component } from 'react';

class Sun extends Component {
  render() {
    return (
      <div className={ 'planet__card Sun' }>
        <span className="no__show">Sun</span>
        <img src="https://www.solarsystemscope.com/spacepedia/images/handbook/renders/sun.png" alt="Sun" className="planet__image" />
      </div>
    );
  }
}

export default Sun;
