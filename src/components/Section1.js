import React from 'react';

const Section1 = ({ fullpageApi }) => (
  <React.Fragment>
    <h1 className="name">Theophile<br />Avoyne</h1>
    <h2 className="headline">Développeur full-stack Node.js & React.js à Paris</h2>
    <button type="submit" onClick={() => fullpageApi.moveSectionDown()}>
      Go down
    </button>
  </React.Fragment>
);

export default Section1;
