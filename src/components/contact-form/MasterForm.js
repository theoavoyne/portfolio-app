import _ from 'lodash';
import React from 'react';

import FormNavigation from './FormNavigation';
import Pending from './Pending';
import Problem from './Problem';
import Sent from './Sent';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import { NextButton, PrevButton, SubmitButton } from './Buttons';

/* eslint-disable object-curly-newline */
const stepProps = [
  { prenom: '', nom: '', entreprise: '', poste: '' },
  { projet: '', description: '' },
  { email: '', telephone: '', comment: 'email' }
];
/* eslint-enable object-curly-newline */

const defaultState = _.reduce(stepProps, _.merge);

const requiredFields = [
  ['prenom', 'nom', 'entreprise'],
  ['projet'],
  ['email', 'telephone', 'comment']
];

class MasterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 3,
      error: false,
      status: 'not sent',
      ...defaultState
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (this.state.currentStep < 3) {
        e.preventDefault();
        this.next();
      }
    }
  }

  handleSubmit = (e) => {
    console.log('Submit');
    e.preventDefault();
    const values = _.pick(this.state, requiredFields.flat());

    if (Object.values(values).every((value) => value)) {
      this.setState({ status: 'pending' });
      const formFields = Object.keys(defaultState);

      // Build request
      const body = JSON.stringify({ formData: _.pick(this.state, formFields) });
      const headers = { 'Content-Type': 'application/json' };
      const init = { method: 'POST', headers, body };

      fetch('/contact', init).then(({ status }) => {
        if (_.startsWith(status, 2)) { return this.setState({ status: 'sent' }); }
        return this.setState({ status: 'problem' });
      });
    } else {
      this.setState({ error: true });
    }
  }

  next = () => {
    console.log('Next');
    const { currentStep } = this.state;

    if (currentStep < 3) {
      const values = _.pick(this.state, requiredFields[currentStep - 1]);

      if (Object.values(values).every((value) => value)) {
        const nextStep = currentStep + 1;
        return this.setState({ currentStep: nextStep, error: false });
      }

      this.setState({ error: true });
    }
  }

  prev = () => {
    const { currentStep } = this.state;
    const nextStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({ currentStep: nextStep, error: false });
  }

  render() {
    if (_.includes(['not sent', 'pending'], this.state.status)) {
      return (
        <React.Fragment>
          {this.state.status === 'pending' && <Pending />}
          <form onSubmit={this.handleSubmit} onKeyPress={this.handleKeyPress}>

            <FormNavigation currentStep={this.state.currentStep} />

            { this.state.error && (
              <p className="form__error">
                Merci de renseigner tous les champs obligatoires (*).
              </p>
            )}

            <Step1
              handleChange={this.handleChange}
              {..._.pick(this.state, ['currentStep', ...Object.keys(stepProps[0])])}
            />

            <Step2
              handleChange={this.handleChange}
              {..._.pick(this.state, ['currentStep', ...Object.keys(stepProps[1])])}
            />

            <Step3
              handleChange={this.handleChange}
              {..._.pick(this.state, ['currentStep', ...Object.keys(stepProps[2])])}
            />

            <div className="form__controls">
              <PrevButton currentStep={this.state.currentStep} prev={this.prev} />
              <NextButton currentStep={this.state.currentStep} next={this.next} />
              <SubmitButton currentStep={this.state.currentStep} />
            </div>
          </form>
        </React.Fragment>
      );
    }
    if (this.state.status === 'sent') { return <Sent />; }
    if (this.state.status === 'problem') { return <Problem />; }
  }
}

export default MasterForm;
