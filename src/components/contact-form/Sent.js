import React from 'react';

const style = { backgroundImage: 'url(\'/images/check-circle.svg\')' };

const Sent = () => (
  <div className="form__done">
    <div className="form__done__icon" style={style} />
    <span className="form__done__text">
      Votre demande a bien été prise en compte. Vous serez contacté prochainement.
    </span>
  </div>
);

export default Sent;
