import React from 'react';

const Section2 = () => (
  <React.Fragment>
    <p
      id="s2-text"
      data-aos={window.innerWidth <= 1170 ? 'zoom-in' : 'fade-right'}
    >
      Je développe des applications avec Node.js et React.js. J&apos;interviens dans le
      cadre de la conception du site web de votre entreprise, de l&apos;élaboration de
      votre MVP, de la refonte complète de votre produit, du développement d&apos;une
      fonctionnalité ou encore d&apos;une API.
    </p>
    <img
      src="/images/theo.png"
      alt="Theophile Avoyne"
      id="s2-photo"
      data-aos="fade-left"
      data-aos-delay="400"
    />
  </React.Fragment>
);

export default Section2;
