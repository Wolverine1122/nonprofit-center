import SearchIcon from '../images/icons/search-icon.svg'

function SearchBar() {
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
                <form action='#' method='POST' className='search-query-form'>
                    <input
                        type='text'
                        placeholder='Search...'
                        name='searchquery'
                        id='searchquery'
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