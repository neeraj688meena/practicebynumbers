import React, { useState, useEffect } from 'react';
import Card from './Card';
import { actionFilterMap, actionStatus } from '../constants';
import BtnsSection from './BtnsSection';

const ActionNeededSection = ({ data: { selectedFilter, allActions } }) => {
  const [currentActions, setCurrentActions] = useState(allActions);
  const [currentFilter, setCurrentFilter] = useState([]);
  const [actionsMap, setActionsMap] = useState(null);
  const [currentActionState, setCurrentActionState] = useState(
    actionStatus.PENDING
  );

  const setNewActionsFromArr = (arr) => {
    const map = new Map();

    Object.values(arr).forEach((value) => {
      const { status } = value;
      map.set(status, [map.get(status) || [], value].flat());
    });

    setActionsMap(map);
  };

  useEffect(() => {
    const matchedFilterMap =
      Object.entries(actionFilterMap).find(
        ([key, value]) => selectedFilter.value === key
      ) || {};

    setCurrentFilter(matchedFilterMap);
  }, [selectedFilter, allActions]);

  useEffect(() => {
    if (!Object.entries(currentFilter).length) {
      setCurrentActions(allActions);

      return;
    }

    setCurrentActions(() => {
      const { filters } = currentFilter[1];
      const finalActions = allActions.filter(({ event_type }) =>
        filters?.includes(event_type)
      );

      return finalActions;
    });
  }, [currentFilter, allActions]);

  useEffect(() => {
    setNewActionsFromArr(currentActions);
  }, [currentActions]);

  const handleControlsBtnsClick = (e) => {
    const { name, value } = e.target;

    setCurrentActionState(value);
  };

  const handleCardClick = (e) => {
    const button = e.target.closest(`[name="action-control"]`);
    if (!button) return;

    const { cardId } = e.target.closest('[data-card-id]').dataset;

    const newActions = [...actionsMap.values()].flat().map((value) => {
      let { status } = value;

      if (String(cardId) === String(value.id)) {
        status = button.value;
      }

      value = { ...value, status };

      return value;
    });

    setNewActionsFromArr(newActions);
  };

  const RenderCardsFromArr = (arr = []) =>
    arr.map((obj) => (
      <Card
        key={obj.id}
        data={{
          obj,
          cardType: 'action-cards',
          currentFilter,
          clickHandler: handleCardClick,
        }}
      />
    ));

  return (
    <div className="actions-section">
      <BtnsSection
        data={{
          actionStatus,
          heading: 'Action Needed',
          defaultValue: currentActionState,
          handleBtnsClick: handleControlsBtnsClick,
        }}
      />

      <div className="cards-section">
        {currentActionState === actionStatus.ALL
          ? RenderCardsFromArr([...actionsMap.values()].flat())
          : RenderCardsFromArr(actionsMap?.get(currentActionState))}
      </div>
    </div>
  );
};

export default ActionNeededSection;
