import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchFilter from './components/SearchFilter'
import AddingForm from './components/AddingForm'
import Phonebook from './components/Phonebook'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

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

  const personsToShow = () => {
    if (search === '') {
      return persons
    } else {
      return persons.filter((person) => person.name.toLowerCase() === search.toLowerCase())
    }
  }

  const Header = ({ text }) => <h1>{text}</h1>

  return (
    <div>
      <Header text={'Phonebook'}/>
      <SearchFilter search={search} setSearch={setSearch} />
      <AddingForm addNewPerson={addNewPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <Phonebook personsToShow={personsToShow()} />
    </div>
  )
}

export default App