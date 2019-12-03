import React from 'react';

const LeftButton = ({ slideNumber }) => {
  if (slideNumber !== 0) {
    return (
      <div
        className="arrow arrow--left"
        label="MoveSlideLeft"
        onClick={() => fullpage_api.moveSlideLeft()}
        role="button"
        tabIndex={0}
      >
        <div className="chevron chevron--left" />
        <div className="chevron chevron--left" />
        <div className="chevron chevron--left" />
      </div>
    );
  }
  return null;
};

const RightButton = ({ slideNumber }) => {
  if (slideNumber !== 2) {
    return (
      <div
        className="arrow arrow--right"
        label="moveSlideRight"
        onClick={() => fullpage_api.moveSlideRight()}
        role="button"
        tabIndex={0}
      >
        <div className="chevron chevron--right" />
        <div className="chevron chevron--right" />
        <div className="chevron chevron--right" />
      </div>
    );
  }
  return null;
};

const BottomButton = () => (
  <div
    className="arrow arrow--down"
    label="moveSectionDown"
    onClick={() => fullpage_api.moveSectionDown()}
    role="button"
    tabIndex={0}
  >
    <div className="chevron chevron--down" />
    <div className="chevron chevron--down" />
    <div className="chevron chevron--down" />
  </div>
);

export { LeftButton, RightButton, BottomButton };
