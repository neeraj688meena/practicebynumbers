import React, { useState, useEffect } from 'react';
import BtnsSection from './BtnsSection';
import { notificationStatus } from '../constants';
import Card from './Card';

const NotificationsSection = ({ data: { allNotifications } }) => {
  const [currentNotifications, setCurrentNotifications] =
    useState(allNotifications);
  const [notificationsMap, setNotificationsMap] = useState(null);
  const [currentNotificationState, setCurrentNotificationState] = useState(
    notificationStatus.UNREAD
  );

  const setNewNotificationsFromArr = (arr) => {
    const map = new Map();

    Object.values(arr).forEach((value) => {
      const { status } = value;
      map.set(status, [map.get(status) || [], value].flat());
    });

    setNotificationsMap(map);
  };

  useEffect(() => {
    setNewNotificationsFromArr(currentNotifications);
  }, [currentNotifications]);

  const handleControlsBtnsClick = (e) => {
    const { name, value } = e.target;

    setCurrentNotificationState(value);
  };

  const handleCardClick = (e) => {
    const { cardId } = e.target.closest('[data-card-id]').dataset;

    const newNotifications = [...notificationsMap.values()]
      .flat()
      .map((value) => {
        let { status } = value;
        if (String(cardId) === String(value.id)) {
          status =
            notificationStatus.UNREAD === status
              ? notificationStatus.MARKED_AS_READ
              : notificationStatus.UNREAD;
        }

        value = { ...value, status };

        return value;
      });

    setNewNotificationsFromArr(newNotifications);
  };

  return (
    <div className="notifications-section">
      <BtnsSection
        data={{
          actionStatus: notificationStatus,
          heading: 'Notifications',
          defaultValue: currentNotificationState,
          handleBtnsClick: handleControlsBtnsClick,
        }}
      />

      <div className="cards-section">
        {notificationsMap?.get(currentNotificationState)?.map((obj) => (
          <Card
            key={obj.id}
            data={{
              obj,
              cardType: 'notification-cards',
              clickHandler: handleCardClick,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationsSection;
