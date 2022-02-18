import { useState } from 'react'
import SearchIcon from '../images/icons/search-icon.svg'

function SearchBar() {
    const [search, setSearch] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(search)

        // send a post request to the server
        // fetch('http://localhost:3000/search', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         search: search
        //     })
        // })
        //     .catch(function (res) { console.log(res) })
    }

    return (
        <div className='search-bar card'>
            <div className='categories'>
                <select name='categories' id='categories' defaultValue={'DEFAULT'}>
                    <option value='DEFAULT' disabled>Select an option</option>
                    <option value='Get help'>Get help</option>
                    <option value='Volunteer'>Volunteer</option>
                </select>
            </div>
            <div className='query'>
                <form onSubmit={handleSubmit} className='search-query-form'>
                    <input
                        type='text'
                        placeholder='Search...'
                        name='searchquery'
                        id='searchquery'
                        value={search}
                        onInput={(e) => setSearch(e.target.value)}
                    />
                    <button type='submit'>
                        <img src={SearchIcon} alt='search icon' />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SearchBar;