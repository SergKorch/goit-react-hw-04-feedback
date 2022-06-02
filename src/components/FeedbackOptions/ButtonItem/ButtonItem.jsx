import React from 'react';
import PropTypes from 'prop-types';
import s from './button.module.css';

const ButtonItem = ({ onLeaveFeedback, nameButton }) => {
  return (
    <li>
      <button
        className={s.feedback__button}
        type="button"
        name={nameButton}
        onClick={onLeaveFeedback}
      >
        {nameButton}
      </button>
    </li>
  );
};
ButtonItem.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  nameButton: PropTypes.string.isRequired,
};
export default ButtonItem;
