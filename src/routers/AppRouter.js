import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';

const Fullpage = () => (
  <ReactFullpage
    licenseKey="005C85F9-3D6D40F9-87556F4F-CB409887"
    render={({ fullpageApi }) => (
      <ReactFullpage.Wrapper>
        <div className="section">
          <Section1 fullpageApi={fullpageApi} />
        </div>
        <div className="section">
          <Section2 fullpageApi={fullpageApi} />
        </div>
        <div className="section">
          <Section3 fullpageApi={fullpageApi} />
        </div>
      </ReactFullpage.Wrapper>
    )}
  />
);

export default Fullpage;
