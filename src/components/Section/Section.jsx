import React from 'react';
import PropTypes from 'prop-types';
import s from '../Notification/notification.module.css';

const Section = ({ title, children }) => {
  return (
    <div>
      {title && (
        <div className={s.feedback__title}>
          <p className={s.feedback__text}>{title}</p>
        </div>
      )}
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object.isRequired,
};

export default Section;
