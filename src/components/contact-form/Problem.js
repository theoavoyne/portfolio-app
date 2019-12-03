import React from 'react';

const style = { backgroundImage: 'url(\'/images/times-circle.svg\')' };

const Problem = () => (
  <div className="form__done">
    <div className="form__done__icon" style={style} />
    <span className="form__done__text">
      Un problème est survenu. Merci de me contacter directement par email
      à tavoyne@gmail.com.
    </span>
  </div>
);

export default Problem;
