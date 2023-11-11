import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOption/FeedbackOptions';
import Notification from 'components/Notification/Notification';
import { Container } from './App.styled';
import { useReducer, useRef } from 'react';
function reducer(prevState, action) {
  switch (action.type[0]) {
    case 'good':
      return { ...prevState, good: prevState.good + action.payLoad };

    case 'neutral':
      return { ...prevState, neutral: prevState.neutral + action.payLoad };

    case 'bad':
      return { ...prevState, bad: prevState.bad + action.payLoad };

    default:
      return;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const buttons = useRef(state);

  const addReviewByClick = reviwe => {
    dispatch({ type: [reviwe], payLoad: 1 });
  };
  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    const sum = good + neutral + bad;
    return sum;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = state;
    return Math.round((good * 100) / countTotalFeedback());
  };

  const options = Object.keys(buttons.current);
  const totalFeedback = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();
  const { good, neutral, bad } = state;

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={addReviewByClick} />
      </Section>
      <Section title="Statistics">
        {totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedback}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
}

export default App;
