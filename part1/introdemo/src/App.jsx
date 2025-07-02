import { useState } from 'react'

const Buton = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Give = (props) => {
  return (
    <div>
      <h1>Give feedback</h1>
      <Buton handleClick={props.handleGood} text="good" />
      <Buton handleClick={props.handleNeutral} text="neutral" />
      <Buton handleClick={props.handleBad} text="bad" />
    </div>
  )
}

const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  
  const total = good + neutral + bad
  
  if(total === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div className='table'>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticsLine text="Good" value={good} />
          <StatisticsLine text="Neutral" value={neutral} />
          <StatisticsLine text="Bad" value={bad} />
          <StatisticsLine text="Total" value={total} />
          <StatisticsLine text="Average" value={(good - bad) / total} />
          <StatisticsLine text="Positive" value={(good / total) * 100} />

        </tbody>
      </table>
    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    const newGood = good + 1
    setGood(newGood)
    console.log('Good button clicked', newGood)
  }

  const handleNeutral = () => {
    const newNeutral = neutral + 1
    setNeutral(newNeutral)
    console.log('Neutral button clicked', newNeutral)
  }

  const handleBad = () => {
    const newBad = bad + 1
    setBad(newBad)
    console.log('Bad button clicked', newBad)
  }

  return (
    <div>
      <Give handleGood={handleGood} handleNeutral={handleNeutral} handleBad={handleBad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App