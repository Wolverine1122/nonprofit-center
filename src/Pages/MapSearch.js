import Map from '../Components/Map';
import SearchResults from '../Components/SearchResults';

function MapSearch() {
    return (
        <div className='map-search-page'>
            <SearchResults />
            <Map />
        </div>
    )
}

export default MapSearch;