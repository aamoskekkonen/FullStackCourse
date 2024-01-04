const Phonebook = ({ personsToShow, deletePerson }) => {
    return (
        <>
            <h2>Numbers</h2>
            {personsToShow.map((person) =>
                <div key={person.id}>
                    {person.name} {person.number}
                    <button onClick={() => deletePerson(person.id)}>delete</button>
                </div>
            )}
        </>
    )
}

export default Phonebook