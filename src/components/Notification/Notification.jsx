// import PropTypes from 'prop-types';
import React from 'react';
import PropTypes from 'prop-types';
import s from './notification.module.css';

const Notification = ({ message }) => {
  return (
    <div className="">
      {message && (
        <div className={s.feedback__title}>
          <p className={s.feedback__text}>{message}</p>
        </div>
      )}
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
