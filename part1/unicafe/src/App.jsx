import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

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
      <Header text={'give feedback'} />
      <div>
        <Button text={'good'} value={good} setFunc={setGood}/>
        <Button text={'neutral'} value={neutral} setFunc={setNeutral}/>
        <Button text={'bad'} value={bad} setFunc={setBad}/>
      </div>
      <Header text={'statistics'} />
      <Statistic text={'good'} value={good}/>
      <Statistic text={'neutral'} value={neutral}/>
      <Statistic text={'bad'} value={bad}/>
      <Statistic text={'average'} value={average()} />
      <Statistic text={'positives'} value={positives()} />
    </div>
  )
}

const Header = ( {text} ) => {
  return (<h1>{text}</h1>)
}

const Button = ( {text, value, setFunc} ) => {
  return (<button onClick={() => setFunc(value + 1)}>{text}</button>)
}

const Statistic = ( {text, value} ) => {
  return (<p>{text} {value}</p>)
}

export default App