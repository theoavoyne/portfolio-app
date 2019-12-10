import React from 'react';

const style = { backgroundImage: 'url(\'/images/times-circle.svg\')' };

const Problem = () => (
  <React.Fragment>
    <div className="form__done__icon" style={style} />
    <div className="form__done__text">
      Un problème est survenu. Merci de me contacter directement par email
      sur tavoyne@gmail.com.
    </div>
  </React.Fragment>
);

export default Problem;
