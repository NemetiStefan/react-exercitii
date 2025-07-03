import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')

  const [newFilter, setFilter] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
    }, [])

  //functie care se ocupa efectiv de adaugarea in memorie
  const addPerson = (event) => {
    event.preventDefault()

    if(persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    if(newName === '') {
      alert('Name cannot be empty')
      return
    }

    if(newNumber === '') {
      alert('Number cannot be empty')
      return
    }

    const newPerson = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  

  //functia ca sa se vada schimbarea de nume in text box
  const handleNewPerson = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div> 
      <h1>Phonebook</h1>
      <p>Filter: <input value={newFilter} onChange={(e) => setFilter(e.target.value)} /></p>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        name: <input
          value={newName}
          onChange={handleNewPerson}/><br />
        number: <input
          value={newNumber}
          onChange={handleNewNumber}/><br />
        <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      <Filter persons={persons} newFilter={newFilter} setFilter={setFilter} />

    </div>
  )

}

export default App 