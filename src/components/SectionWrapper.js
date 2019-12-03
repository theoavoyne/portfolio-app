import React from 'react';

import { BottomButton } from './NavigationButtons';

const SectionWrapper = (props) => (
  <div className="section">
    {props.title && <h2 className="section-title">{props.title}</h2>}
    {props.children}
    {props.bottomButton && <BottomButton />}
  </div>
);

export default SectionWrapper;
