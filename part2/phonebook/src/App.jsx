import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const alreadyAdded = (name) => {
    return persons.some((person) => person.name === name)
  }

  const addNewPerson = (event) => {
    event.preventDefault()
    if (alreadyAdded(newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat({name: newName, number: newNumber, id: persons.length + 1}))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchFieldChange = (event) => {
    setSearch(event.target.value)
  }

  const personsToShow = () => {
    if (search === '') {
      return persons
    } else {
      return persons.filter((person) => person.name.toLowerCase() === search.toLowerCase())
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={(event) => event.preventDefault()}>
        <div>name: <input value={search} onChange={handleSearchFieldChange}/></div>
      </form>
      <h2>add a new</h2>
      <form onSubmit={addNewPerson}>
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      {personsToShow().map((person) => <p key={person.id}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default App