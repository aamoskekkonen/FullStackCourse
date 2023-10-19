import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text={'give feedback'} />
      <div>
        <Button text={'good'} value={good} setFunc={setGood}/>
        <Button text={'neutral'} value={neutral} setFunc={setNeutral}/>
        <Button text={'bad'} value={bad} setFunc={setBad}/>
      </div>
      <Header text={'statistics'} />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

const Header = ( {text} ) => {
  return (<h1>{text}</h1>)
}

const Button = ( {text, value, setFunc} ) => {
  return (<button onClick={() => setFunc(value + 1)}>{text}</button>)
}

const StatisticLine = ( {text, value} ) => {
  return (<tr><td>{text}</td><td>{value}</td></tr>)
}

const Statistics = ( {good, neutral, bad} ) => {
  const sum = good + neutral + bad
  const noFeedbackGiven = () => {
    if (sum === 0) return true
    else return false
  }

  const average = () => {
    const goodValue = good * 1
    const neutralValue = neutral * 0
    const badValue = bad * (-1)
    const valueSum = goodValue + neutralValue + badValue
    if (noFeedbackGiven()) return 0
    return valueSum / sum
  }

  const positives = () => {
    if (noFeedbackGiven()) return 0
    return good / sum * 100
  }

  if (noFeedbackGiven()) {
    return (<p>No feedback given</p>)
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text={'good'} value={good}/>
          <StatisticLine text={'neutral'} value={neutral}/>
          <StatisticLine text={'bad'} value={bad}/>
          <StatisticLine text={'average'} value={average()} />
          <StatisticLine text={'positives'} value={positives() + " %"} />
        </tbody>
      </table>
    </div>
  )
}

export default App