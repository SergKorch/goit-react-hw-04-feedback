import { useState } from 'react';
import s from './feedback.module.css';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = event => {
    const { name } = event.target;
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Number(((good / total) * 100).toFixed(0));
  };

  const total = countTotalFeedback();
  let percentage = countPositiveFeedbackPercentage();
  return (
    <div className={s.feedback}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({good, neutral, bad})}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      {total > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percentage}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};

export default App;
