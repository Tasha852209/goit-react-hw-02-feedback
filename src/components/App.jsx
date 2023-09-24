import { Component } from 'react';
import { Section } from './Sections/Section';
import { FeedbackOptions } from './Sections/FeedbackOptions';
import { Statistics } from './Sections/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countFeedback = ({ good, neutral, bad }) => {
    this.setState({
      [this.state.good]: good + 1,
      [this.state.neutral]: neutral + 1,
      [this.state.bad]: bad + 1,
    });
  };
  countTotalFeedback() {}
  countPositiveFeedbackPercentage() {}
  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            countFeedback={this.countFeedback}
            countTotalFeedback={this.countTotalFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </div>
    );
  }
}
