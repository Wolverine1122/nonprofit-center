import { Link } from 'react-router-dom';
import Map from '../Components/Map';
import SearchResults from '../Components/SearchResults';

function MapSearch() {
    return (
        <div className='map-search-page'>
            <div className='search-and-map'>
                <SearchResults />
                <Map />
            </div>
            <p className='note-to-user'>
                Note: On this page, nonprofits that operate completely remotely do not
                appear in the search results. If you need to expand your options,
                please go to <Link to='/search'>Search Nonprofits Page</Link>
            </p>
        </div>
    )
}

export default MapSearch;