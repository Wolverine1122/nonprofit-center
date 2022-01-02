import SearchBar from "../Components/SearchBar"
import SearchFilter from "../Components/SearchFilter";
import SearchResults from "../Components/SearchResults";

function Search() {
    return (
        <div className='search-page'>
            <SearchBar />
            <SearchFilter />
            <SearchResults />
        </div>
    )
}

export default Search;