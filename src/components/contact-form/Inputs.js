import _ from 'lodash';
import React from 'react';

const InputGroup = (props) => {
  const {
    handleChange,
    name,
    required,
    value
  } = props;
  const deburred = _.deburr(name);
  let capitalized = _.capitalize(name);
  if (capitalized === 'Projet') { capitalized = 'Nom du projet'; }
  const placeholder = capitalized + (required ? ' *' : '');

  return (
    <React.Fragment>
      {value && <label htmlFor={name} className="form__label">{capitalized}</label>}
      <input
        className="form__input"
        name={deburred}
        onChange={handleChange}
        placeholder={placeholder}
        type="text"
        value={value}
      />
    </React.Fragment>
  );
};

const RadioInput = (props) => {
  const {
    handleChange,
    name,
    options,
    value
  } = props;

  const handleKeyPress = (e, event) => {
    if (e.key === 'Enter') { handleChange(event); }
  };

  return (
    <React.Fragment>
      {
        options.map((option) => {
          const deburred = _.deburr(option);
          const event = { target: { name, value: deburred } };
          const checked = deburred === value;
          const capitalized = _.capitalize(option);

          return (
            <div className="form__radio-input" key={deburred}>
              <div
                className="form__radio-input__box"
                onClick={() => handleChange(event)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => handleKeyPress(e, event)}
              >
                {checked && <div className="form__radio-input__check" />}
              </div>
              <div className="form__radio-input__name">{capitalized}</div>
            </div>
          );
        })
      }
    </React.Fragment>
  );
};

const TextAreaGroup = (props) => {
  const {
    handleChange,
    name,
    required,
    value
  } = props;
  const deburred = _.deburr(name);
  const capitalized = _.capitalize(name);
  const placeholder = capitalized + (required ? ' *' : '');

  return (
    <React.Fragment>
      {value && <label htmlFor={name} className="form__label">{capitalized}</label>}
      <textarea
        className="form__input form__input--textarea"
        name={deburred}
        onChange={handleChange}
        placeholder={placeholder}
        type="text"
        value={value}
      />
    </React.Fragment>
  );
};

export { InputGroup, RadioInput, TextAreaGroup };
