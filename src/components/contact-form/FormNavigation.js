import React from 'react';

const FormNavigation = (props) => {
  const style = {
    backgroundImage: `url('/images/form-navigation-${props.currentStep}.svg')`
  };
  return (
    <div style={style} className="form__navigation" />
  );
};

export default FormNavigation;
