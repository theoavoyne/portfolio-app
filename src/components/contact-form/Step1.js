import React from 'react';

import { InputGroup } from './Inputs';

const Step1 = (props) => {
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <div className="form__inputs">

      <div className="form__two-inputs">
        <div className="form__input-group--small">
          <InputGroup
            handleChange={props.handleChange}
            name="prénom"
            required
            value={props.prenom}
          />
        </div>
        <div className="form__input-group--small">
          <InputGroup
            handleChange={props.handleChange}
            name="nom"
            required
            value={props.nom}
          />
        </div>
      </div>

      <div className="form__input-group--large">
        <InputGroup
          handleChange={props.handleChange}
          name="entreprise"
          required
          value={props.entreprise}
        />
      </div>

      <div className="form__input-group--large">
        <InputGroup
          handleChange={props.handleChange}
          name="poste"
          value={props.poste}
        />
      </div>

    </div>
  );
};

export default Step1;
