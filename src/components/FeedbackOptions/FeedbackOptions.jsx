import React from 'react';
import PropTypes from 'prop-types';
import s from './feedbackOpt.module.css';
import ButtonItem from './ButtonItem';

 const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={s.feedback__section}>
      {options.map((item) => (
        <ButtonItem key={item} onLeaveFeedback={onLeaveFeedback} nameButton={item} />
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
