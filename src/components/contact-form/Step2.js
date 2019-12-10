import React from 'react';

import { InputGroup, TextAreaGroup } from './Inputs';

const Step2 = (props) => {
  if (props.currentStep !== 2) {
    return null;
  }

  return (
    <div className="form__inputs">

      <div className="form__input-group--large">
        <InputGroup
          handleChange={props.handleChange}
          name="projet"
          required
          value={props.projet}
        />
      </div>

      <div className="form__input-group--large">
        <TextAreaGroup
          handleChange={props.handleChange}
          name="description"
          value={props.description}
        />
      </div>

    </div>
  );
};

export default Step2;
