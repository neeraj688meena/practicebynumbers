import React, { useState } from 'react';

const BtnsSection = ({
  data: { actionStatus, handleBtnsClick, heading, defaultValue },
}) => {
  const [currentActionButton, setCurrentActionButton] = useState(defaultValue);

  const handleActionBtnClick = (e) => {
    handleBtnsClick(e);
    setCurrentActionButton(() => e.target.value);
  };

  return (
    <div className="btns-section">
      <h3 className="sub-heading">{heading}</h3>

      <div className="controls">
        {Object.entries(actionStatus).map(([key, value]) => (
          <button
            onClick={handleActionBtnClick}
            className={currentActionButton === value ? '' : 'in-active'}
            key={key}
            value={value}
          >
            {value.toLowerCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BtnsSection;
