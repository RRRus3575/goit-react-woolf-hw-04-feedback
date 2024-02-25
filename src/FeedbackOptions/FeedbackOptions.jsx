import css from "./FeedbackOptions.module.css";

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <ul className={css.list}>
      {options.map((btn) => (
        <button
          key={btn}
          onClick={onLeaveFeedback}
          name={btn}
          className={css.btn}
        >
          {btn}
        </button>
      ))}
    </ul>
  );
};
