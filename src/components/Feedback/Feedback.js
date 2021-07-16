import React, { Component } from 'react';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';

import styles from './Feedback.module.css';

class Feedback extends Component {
    static defaultProps = {
        initialGood: 0,
        initialNeutral: 0,
        initialBad: 0,
    };

    state = {
        good: this.props.initialGood,
        neutral: this.props.initialNeutral,
        bad: this.props.initialBad,
    };

    handleFeedback = e => {
        this.setState(prevState => {
            return { [e]: prevState[e] + 1 };
        });
    };

    countTotalFeedback = () =>
        this.state.good + this.state.neutral + this.state.bad;
    countPositiveFeedbackPercentage = () =>
        Math.ceil((this.state.good / this.countTotalFeedback()) * 100);

    render() {
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();
        // const options = ['good', 'neutral', 'bad'];
        return (
            <div className={styles.box}>
                <Section title="">
                    <FeedbackOptions
                        options={['good', 'neutral', 'bad']}
                        onLeaveFeedback={this.handleFeedback}
                    />
                    <Statistics
                        good={this.state.good}
                        neutral={this.state.neutral}
                        bad={this.state.bad}
                        total={total}
                        positivePercentage={positivePercentage}
                    />
                </Section>
            </div>
        );
    }
}

export default Feedback;
