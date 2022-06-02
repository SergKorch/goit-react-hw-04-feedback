import React from 'react';
import PropTypes from 'prop-types';
import s from './statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  if (!positivePercentage) {
    positivePercentage = 0;
  }
  return (
    <ul>
      <li className={s.statistics__text}>
        <p>Good: {good} </p>
      </li>
      <li className={s.statistics__text}>
        <p>Neutral: {neutral} </p>
      </li>
      <li className={s.statistics__text}>
        <p>Bad: {bad} </p>
      </li>
      <li className={s.statistics__text}>
        <p>Total: {total}</p>
      </li>
      <li className={s.statistics__text}>
        <p>Positive feedback: {positivePercentage}%</p>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
