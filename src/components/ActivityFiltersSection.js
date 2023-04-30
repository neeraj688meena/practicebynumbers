import React from 'react';

const ActivityFiltersSection = ({
  data: { filtersData, setSelectedFilter, selectedFilter },
}) => {
  const handleBtnClick = (e, reset = false) => {
    if (reset) {
      setSelectedFilter(() => []);
      return;
    }

    const { name, value } = e.currentTarget;

    setSelectedFilter(() => filtersData.find((obj) => obj.value === value));
  };

  const filtersMapCB = (obj) => {
    const { color, name, value, label } = obj;

    return (
      <button
        className={`${value === selectedFilter?.value ? 'active' : ''}`}
        onClick={handleBtnClick}
        name={name}
        key={name}
        value={value}
      >
        <div className="dot" style={{ backgroundColor: color }}></div>
        <div className="label">{label}</div>
      </button>
    );
  };

  return (
    <div className="filters-section">
      <h4>Filter Activity</h4>
      <div className="select-all" onClick={(e) => handleBtnClick(e, true)}>
        Select All
      </div>
      {filtersData.map(filtersMapCB)}
    </div>
  );
};

export default ActivityFiltersSection;
