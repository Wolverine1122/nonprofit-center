import { Link } from "react-router-dom";
import SearchBar from "../Components/SearchBar"
import SearchFilter from "../Components/SearchFilter";
import SearchResults from "../Components/SearchResults";

function Search() {
    return (
        <div className='search-page'>
            <div className='search-main'>
                <SearchBar />
                <SearchFilter />
                <SearchResults />
            </div>
            <p className='note-to-user'>
                Note: If you want to see locations of nonprofits on a Google Map,
                please proceed to <Link to='/map-search'>Map Search Page</Link>
            </p>
        </div>
    )
}

export default Search;