import React from 'react';

import { InputGroup, RadioInput } from './Inputs';

const Step3 = (props) => {
  if (props.currentStep !== 3) {
    return null;
  }

  return (
    <div className="form__inputs">

      <div className="form__input-group--large">
        <InputGroup
          handleChange={props.handleChange}
          name="email"
          required
          value={props.email}
        />
      </div>

      <div className="form__input-group--large">
        <InputGroup
          handleChange={props.handleChange}
          name="téléphone"
          required
          value={props.telephone}
        />
      </div>

      <h4 className="form__question">Comment souhaitez-vous être contacté ? *</h4>
      <RadioInput
        handleChange={props.handleChange}
        name="comment"
        options={['email', 'téléphone']}
        value={props.comment}
      />

    </div>
  );
};

export default Step3;
