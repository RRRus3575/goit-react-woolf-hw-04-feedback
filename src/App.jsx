import React, { Component, useState } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics ";
import { Notification } from "./Notification/Notification";

const App = () => {
  // state = {
  //   Good: 0,
  //   Neutral: 0,
  //   Bad: 0,
  // };

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // const onLeaveFeedback = (e) => {
  //   const name = e.target.name;
  //   return this.setState((prevState) => ({
  //     [name]: prevState[name] + 1,
  //   }));
  // };
  const neutralFeedback = () => {
    setNeutral((prev) => prev + 1);
  };
  const badFeedback = () => {
    setBad((prev) => prev + 1);
  };
  const goodFeedback = () => {
    setGood((prev) => prev + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return good >= 1 ? (good / countTotalFeedback()) * 100 : 0;
  };

  return (
    <div
      style={{
        marginLeft: 50,
      }}
    >
      <Section title={"Please leave feedback"}>
        <FeedbackOptions
          badFeedback={badFeedback}
          goodFeedback={goodFeedback}
          neutralFeedback={neutralFeedback}
        />
      </Section>
      {countTotalFeedback() === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title={"Statistics"}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </div>
  );
};

export default App;
