import React, { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import SectionWrapper from '../components/SectionWrapper';
import Section1 from '../components/sections/Section1';
import Section2 from '../components/sections/Section2';
import Section3 from '../components/sections/Section3';
import Section4 from '../components/sections/Section4';
import Section5a from '../components/sections/Section5a';
import Section5b from '../components/sections/Section5b';
import Section5c from '../components/sections/Section5c';
import Section6 from '../components/sections/Section6';
import { LeftButton, RightButton } from '../components/NavigationButtons';

const FullpageScroller = () => {
  const [slideNumber, setSlideNumber] = useState(0);

  const handleSlideLeave = (section, origin, destination) => {
    setSlideNumber(destination.index);
  };

  const handleSectionLoad = (origin, destination) => {
    const aosItems = destination.item.getElementsByClassName('aos-init');
    const len = aosItems === null ? 0 : aosItems.length;
    for (let i = 0; i < len; i += 1) {
      aosItems[i].classList.add('aos-animate');
    }
  };

  return (
    <ReactFullpage
      licenseKey="005C85F9-3D6D40F9-87556F4F-CB409887"
      anchors={REACT_ENV === 'development' ? ['1', '2', '3', '4', '5', '6'] : []}
      controlArrows={false}
      onSlideLeave={handleSlideLeave}
      afterLoad={handleSectionLoad}
      render={() => (
        <ReactFullpage.Wrapper>

          {/* Section 1 */}
          <SectionWrapper bottomButton>
            <Section1 />
          </SectionWrapper>

          {/* Section 2 */}
          <SectionWrapper title="Théophile Avoyne" bottomButton>
            <Section2 />
          </SectionWrapper>

          {/* Section 3 */}
          <SectionWrapper title="Théophile Avoyne" bottomButton>
            <Section3 />
          </SectionWrapper>

          {/* Section 4 */}
          <SectionWrapper title="Technologies" bottomButton>
            <Section4 />
          </SectionWrapper>

          {/* Section 5 */}
          <SectionWrapper title="Réalisations" bottomButton>
            <Section5a />
            <Section5b />
            <Section5c />
            <LeftButton slideNumber={slideNumber} />
            <RightButton slideNumber={slideNumber} />
          </SectionWrapper>

          {/* Section 6 */}
          <SectionWrapper title="Demande de devis">
            <Section6 />
          </SectionWrapper>

        </ReactFullpage.Wrapper>
      )}
    />
  )
};

export default FullpageScroller;
