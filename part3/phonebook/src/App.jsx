import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchFilter from './components/SearchFilter'
import AddingForm from './components/AddingForm'
import Phonebook from './components/Phonebook'
import Notification from './components/Notification'
import personService from './services/persons'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const alreadyAdded = (name) => {
    return persons.some((person) => person.name === name)
  }

  const displayNotification = (text) => {
    setErrorMessage(text)
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
  }

  const addNewPerson = (event) => {
    event.preventDefault()
    if (alreadyAdded(newName)) {
      const existingPerson = persons.find(person => person.name === newName)
      if (window.confirm(`${existingPerson.name} is already added to phonebook, replace the old number with a new one?`)) {
        const updatedPerson = { ...existingPerson, number: newNumber}
        personService
        .update(existingPerson.id, updatedPerson)
        .then(response => {
          setPersons(persons.map(person => person.id !== existingPerson.id ? person : updatedPerson))
          displayNotification(`Updated the number of ${existingPerson.name}`)
        })
      }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      personService
      .create(newPerson)
      .then(response => {
        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewNumber('')
        displayNotification(`Added ${newPerson.name}`)
      })
    }
  }

  const removePerson = (id) => {
    const deletedPerson = persons.find(person => person.id == id)
    if (window.confirm(`Delete ${deletedPerson.name} ?`)) {
      personService
      .remove(id)
      .then(response => {
        setPersons(persons.filter(person => person.id != id))
        displayNotification(`Deleted ${deletedPerson.name}`)
      })
      .catch(error => {
        displayNotification(`Information of ${deletedPerson.name} has already been removed from server`)
        setPersons(persons.filter(person => person.id !== deletedPerson.id))
      })
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
      <Notification message={errorMessage}/>
      <SearchFilter search={search} setSearch={setSearch} />
      <AddingForm addNewPerson={addNewPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <Phonebook personsToShow={personsToShow()} deletePerson={removePerson}/>
    </div>
  )
}

export default App