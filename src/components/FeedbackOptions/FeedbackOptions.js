import React from 'react';

import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div>
        {options.map(option => (
            <button
                className={styles.button}
                type="button"
                onClick={() => onLeaveFeedback(option)}
                key={option}
            >
                {option}
            </button>
        ))}
    </div>
);

export default FeedbackOptions;
