import React, { useEffect, useState } from 'react';
import ActivityFiltersSection from './ActivityFiltersSection';
import ActionNeededSection from './ActionNeededSection';
import NotificationsSection from './NotificationsSection';
import { filterActivityOptions } from '../constants';
import ALL_ACTIONS from '../data/actions.json';
import ALL_NOTIFICATIONS from '../data/notifications.json';

const Activity = () => {
  const [filtersData, setFiltersData] = useState(filterActivityOptions);
  const [allActions, setAllActions] = useState(ALL_ACTIONS);
  const [allNotifications, setAllNotifications] = useState(ALL_NOTIFICATIONS);
  const [selectedFilter, setSelectedFilter] = useState({});

  useEffect(() => {
    // console.log(selectedFilter);
  }, [selectedFilter]);

  return (
    <>
      <section id="activity" className='sub-heading'>
        <div>Activity</div>
        <div className="grid-container">
          <ActivityFiltersSection
            data={{ selectedFilter, filtersData, setSelectedFilter }}
          />
          <ActionNeededSection data={{ selectedFilter, allActions }} />
          <NotificationsSection data={{ allNotifications }} />
        </div>
      </section>
    </>
  );
};

export default Activity;
