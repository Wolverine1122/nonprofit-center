import SearchBar from "../Components/SearchBar"
import SearchFilter from "../Components/SearchFilter";
import SearchResult from "../Components/SearchResult";
import TextSearchResults from "../Texts/TextSearchResults";

function createResultEntry(result, index) {
    return (
        <SearchResult
            key={index}
            name={result.name}
            img={result.img}
            description={result.description}
            resources={result.resources}
            contact={result.contact}
            learningAttributes={result.learningAttributes}
        />
    )
}

function Search() {
    return (
        <div className='search-page'>
            <SearchBar />
            <SearchFilter />
            <div className='search-results'>
                {TextSearchResults.map(createResultEntry)}
            </div>
        </div>
    )
}

export default Search