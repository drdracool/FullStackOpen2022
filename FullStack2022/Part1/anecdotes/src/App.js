import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return <button onClick={handleClick}>
    {text}
  </button>
}

const Header = ({text}) => <h1>{text}</h1>;
const Anecdote = ({anecdote}) => <p>{anecdote}</p>;
const Votes = ({votes}) => <p>has {votes} votes</p>;

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));


  const handleClick = () => {
    setSelected(Math.floor(Math.random()*anecdotes.length))
    }

  const voteForAnecdote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  }

  const highestVotes = Math.max(...votes);
  const winningAnecdote = anecdotes[votes.indexOf(highestVotes)];

  return (
    <div>
      <Header text="Anecdote of the day" />      
      <Anecdote anecdote={anecdotes[selected]} />
      <Votes votes={votes[selected]} />
      <p><Button handleClick={voteForAnecdote} text='vote'/></p>
      <p><Button handleClick={handleClick} text='next anecdote'/></p>
      <Header text="Anecdote with most votes" />
      <Anecdote anecdote={winningAnecdote} />
      <Votes votes={highestVotes} />
    </div>
  )
}

export default App