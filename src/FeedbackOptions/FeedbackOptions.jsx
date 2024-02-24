import css from "./FeedbackOptions.module.css";

export const FeedbackOptions = (props) => {
  return (
    <ul className={css.list}>
      <li>
        <button className={css.btn} onClick={props.badFeedback}>
          Bad
        </button>
      </li>
      <li>
        <button className={css.btn} onClick={props.neutralFeedback}>
          Neutral
        </button>
      </li>
      <li>
        <button className={css.btn} onClick={props.goodFeedback}>
          Good
        </button>
      </li>
    </ul>
  );
};
