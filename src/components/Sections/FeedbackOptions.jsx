export const FeedbackOptions = ({ good, neutral, bad, countFeedback }) => {
  return (
    <div>
      <button onClick={() => countFeedback(good)}>Good</button>
      <button onClick={() => countFeedback(neutral)}>Neutral</button>
      <button onClick={() => countFeedback(bad)}>Bad</button>
    </div>
  );
};
