import React from 'react';

const Section5a = () => (
  <div className="slide">
    <div className="s5-flex">
      <div className="s5-left">
        <img
          src="/images/remood.png"
          alt="Remood"
          className="s5-illustration"
        />
      </div>
      <div className="s5-right">
        <h3 className="s5-title">Remood</h3>
        <p className="s5-description">
          Remood est une plateforme qui analyse votre profil et historique d&apos;écoutes
          Spotify pour vous générer des playlists sur-mesure et personnalisables.
        </p>
        <a
          href="https://www.remood.io/"
          className="s5-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir site
        </a>
      </div>
    </div>
  </div>
);

export default Section5a;
