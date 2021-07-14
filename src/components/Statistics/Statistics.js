import React from 'react';
import PropTypes from 'prop-types';

import Notification from '../Notification/Notification';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    // if(positivePercentage < 26) {

    // }
    return (
        <>
            {total > 0 ? (
                <div>
                    <h2>Statistics</h2>
                    <div>
                        <p className={styles.value}>
                            Good:{' '}
                            <span className={styles.value__good}>{good}</span>
                        </p>
                        <p className={styles.value}>
                            Neutral:{' '}
                            <span className={styles.value__neutral}>
                                {neutral}
                            </span>
                        </p>
                        <p className={styles.value}>
                            Bad:{' '}
                            <span className={styles.value__bad}>{bad}</span>
                        </p>
                        <p className={styles.value}>
                            Total:{' '}
                            <span className={styles.value__total}>{total}</span>
                        </p>
                        <p className={styles.value}>
                            Positive feedback:{' '}
                            <span
                                style={{
                                    color:
                                        positivePercentage >= 50
                                            ? 'green'
                                            : 'red',
                                }}
                            >
                                {positivePercentage > 0
                                    ? positivePercentage
                                    : '0'}
                                %
                            </span>
                        </p>
                    </div>
                </div>
            ) : (
                <Notification />
            )}
        </>
    );
};

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positiveFeedback: PropTypes.number,
};

export default Statistics;
