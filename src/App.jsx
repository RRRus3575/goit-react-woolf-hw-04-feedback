import React, { Component, useState } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics ";
import { Notification } from "./Notification/Notification";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (e) => {
    const name = e.target.name;
    if (name === "Good") {
      setGood((prev) => prev + 1);
      return;
    } else if (name === "Neutral") {
      setNeutral((prev) => prev + 1);
      return;
    } else {
      setBad((prev) => prev + 1);
      return;
    }
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
          onLeaveFeedback={onLeaveFeedback}
          options={["Good", "Neutral", "Bad"]}
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
