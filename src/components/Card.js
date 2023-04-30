import React from 'react';
import {
  actionFilterMap,
  actionStatus,
  notificationFilterMap,
} from '../constants';
import { generate_avatar_data } from '../utility';
import moment from 'moment/moment';

const Card = ({ data: { obj, cardType, clickHandler } }) => {
  const {
    patient_first_name,
    patient_last_name,
    sms_body = '',
    date_created,
    status,
    id,
  } = obj;

  const isActionsCards = cardType === 'action-cards';
  const isUnread = status === 'unread';

  const currentFilterMap = isActionsCards
    ? actionFilterMap
    : notificationFilterMap;

  const action = Object.entries(currentFilterMap).find(([key, value]) =>
    value.filters.includes(obj.event_type)
  )[1];

  const compiledNameObj = generate_avatar_data(
    `${patient_first_name} ${patient_last_name}`
  );

  const date = moment(date_created).fromNow();

  const Btns = () => (
    <div className="btns">
      <button name="action-control" value={actionStatus.COMPLETED}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 1024 1024"
          style={{ color: 'green', fontWeight: 600 }}
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path>
        </svg>
      </button>
      <button name="action-control" value={actionStatus.IGNORED}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 1024 1024"
          style={{ color: 'red', fontWeight: 600 }}
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
        </svg>
      </button>
    </div>
  );

  const Dots = () => (
    <div className="dot-container">
      <div className={`dot ${isUnread ? 'active' : ''}`}></div>
    </div>
  );

  return (
    <div
      data-card-id={id}
      data-card-status={status}
      className="card"
      onClick={clickHandler}
    >
      <div
        className="avatar"
        style={{ backgroundColor: compiledNameObj.color }}
      >
        <div>{compiledNameObj.initials}</div>
      </div>

      <div className="sms-and-action">
        <div
          className="action"
          style={{
            '--bg-color': `${action.color}22`,
            '--color': action.color,
          }}
        >
          {action.text}
        </div>
        <div className="sms">{sms_body}</div>
      </div>

      <div className="data-and-btns">
        <div className="date">{date}</div>

        {isActionsCards ? <Btns /> : <Dots />}
      </div>
    </div>
  );
};

export default Card;
