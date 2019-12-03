import React from 'react';

const NextButton = (props) => {
  if (props.currentStep < 3) {
    return (
      <button
        type="button"
        onClick={props.next}
        className="button button--blue form__next-btn"
      >
        Suivant
      </button>
    );
  }
  return null;
};

const PrevButton = (props) => {
  if (props.currentStep !== 1) {
    return (
      <button
        type="button"
        onClick={props.prev}
        className="button button--orange"
      >
        Précédent
      </button>
    );
  }
  return null;
};

const SubmitButton = (props) => {
  if (props.currentStep === 3) {
    return (
      <button
        type="submit"
        className="button button--blue"
      >
        Soumettre
      </button>
    );
  }
  return null;
};

export { NextButton, PrevButton, SubmitButton };
