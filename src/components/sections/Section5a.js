import React from 'react';

const Section5a = () => (
  <div className="slide">
    <div className="s5-flex">
      <div
        className="s5-left"
        data-aos={window.innerWidth <= 650 ? 'fade-down' : 'fade-right'}
        data-aos-delay={400}
      >
        <img
          src="/images/remood.png"
          alt="Remood"
          className="s5-illustration"
        />
      </div>
      <div
        className="s5-right"
        data-aos={window.innerWidth <= 650 ? 'fade-up' : null}
      >
        <h3
          className="s5-title"
          data-aos={window.innerWidth <= 650 ? null : 'fade-left'}
          data-aos-duration="200"
        >
          Remood
        </h3>
        <p
          className="s5-description"
          data-aos={window.innerWidth <= 650 ? null : 'fade-left'}
          data-aos-delay="100"
          data-aos-duration="200"
        >
          Remood est une plateforme qui analyse votre profil et historique d&apos;écoutes
          Spotify pour vous générer des playlists sur-mesure et personnalisables.
        </p>
        <a
          href="https://www.remood.io/"
          className="s5-link"
          target="_blank"
          rel="noopener noreferrer"
          data-aos={window.innerWidth <= 650 ? null : 'fade-left'}
          data-aos-duration="200"
          data-aos-delay="200"
        >
          Voir site
        </a>
      </div>
    </div>
  </div>
);

export default Section5a;
