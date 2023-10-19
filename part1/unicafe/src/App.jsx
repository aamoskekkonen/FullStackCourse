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

const StatisticsComponent = ( {text, value} ) => {
  return (<p>{text} {value}</p>)
}

const Statistics = ( {good, neutral, bad} ) => {
  const average = () => {
    const goodValue = good * 1
    const neutralValue = neutral * 0
    const badValue = bad * (-1)
    const valueSum = goodValue + neutralValue + badValue
    const countSum = good + neutral + bad
    if (countSum === 0) return 0
    return valueSum / countSum
  }

  const positives = () => {
    const countSum = good + neutral + bad
    if (countSum === 0) return 0
    return good / countSum
  }

  return (
    <div>
      <Header text={'statistics'} />
      <StatisticsComponent text={'good'} value={good}/>
      <StatisticsComponent text={'neutral'} value={neutral}/>
      <StatisticsComponent text={'bad'} value={bad}/>
      <StatisticsComponent text={'average'} value={average()} />
      <StatisticsComponent text={'positives'} value={positives()} />
    </div>
  )
}

export default App