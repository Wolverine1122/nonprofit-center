import SearchResult from "./SearchResult";
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

function SearchResults() {
    return (
        <div className='search-results'>
            {TextSearchResults.map(createResultEntry)}
        </div>
    )
}

export default SearchResults;