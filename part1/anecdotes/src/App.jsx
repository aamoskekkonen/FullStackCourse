import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const randomAnecdoteIndex = () => {
    return Math.floor(Math.random() * anecdotes.length)
  }

  const changeAnecdote = () => {
    const index = Math.floor(Math.random() * anecdotes.length)
    setSelected(index)
  }

  const voteForAnecdote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const anecdoteWithMostVotes = () => {
    let currentBestIndex = 0
    for (let i = 0; i < votes.length; i++) {
      if (votes[i] > votes[currentBestIndex]) {
        currentBestIndex = i
      }
    }
    return anecdotes[currentBestIndex]
  }

  return (
    <div>
      <Header text={'Anecdote of the day'}/>
      <Anecdote text={anecdotes[selected]}/>
      <div>
        <button onClick={voteForAnecdote}>vote</button>
        <button onClick={changeAnecdote}>next anecdote</button>               
      </div>
      <Header text={'Anecdote with most votes'}/>
      <Anecdote text={anecdoteWithMostVotes()}/>
    </div>  
  )
}

const Anecdote = ({ text }) => {
  return (<p>{text}</p>)
}

const Header = ({ text }) => {
  return (<h1>{text}</h1>)
}
 
export default App