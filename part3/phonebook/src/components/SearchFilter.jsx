const SearchFilter = ({ search, setSearch }) => {

    const handleSearchFieldChange = (event) => {
        setSearch(event.target.value)
      }

    return (
        <>
            <form onSubmit={(event) => event.preventDefault()}>
            <div>filter shown with: <input value={search} onChange={handleSearchFieldChange}/></div>
            </form>
        </>
    )
}

export default SearchFilter