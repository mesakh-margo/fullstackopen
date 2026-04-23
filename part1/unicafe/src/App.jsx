import { useState } from 'react';

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.parameter}</td>
      <td>{props.value}{props.unit}</td>
    </tr>
  );
};

const Statistics = (props) => {
  if (Object.values(props).reduce((sum, val) => sum + val, 0) === 0) {
    return <p>No feedback given</p>;
  }

  const total = props.good + props.neutral + props.bad;
  const average = (props.good - props.bad) / total;
  const positive = props.good / total * 100;
  return (
    <>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticLine parameter='good' value={props.good} />
          <StatisticLine parameter='neutral' value={props.neutral} />
          <StatisticLine parameter='bad' value={props.bad} />
          <StatisticLine parameter='all' value={total} />
          <StatisticLine parameter='average' value={average ? average.toFixed(1) : 0} />
          <StatisticLine parameter='positive' value={positive ? positive.toFixed(1) :  0} unit='%'/>
        </tbody>
      </table>
    </>
  );
};

const Display = (props) => {
  return <Statistics { ...props } />;
};

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [statistics, setStatistics] = useState({good: 0, neutral: 0, bad: 0});

  const handleGoodFeedback = () => {
    setGood(good + 1);
    setStatistics({ ...statistics, good: good + 1});
  };

  const handleNeutralFeedback = () => {
    setNeutral(neutral + 1);
    setStatistics({ ...statistics, neutral: neutral + 1});
  };

  const handleBadFeedback = () => {
    setBad(bad + 1);
    setStatistics({ ...statistics, bad: bad + 1});
  };

  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={handleGoodFeedback} text='good' />
      <Button onClick={handleNeutralFeedback} text='neutral' />
      <Button onClick={handleBadFeedback} text='bad' />
      <Display { ...statistics } />
    </div>
  );
};

export default App;