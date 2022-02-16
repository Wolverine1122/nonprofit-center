import Location, { Reviews, Language } from '../Texts/TextSearchFilter.js';
import RadioButtons from './RadioButtons';

function createRadioEntry(choice, index) {
    return (
        <RadioButtons
            key={index}
            id={choice.id}
            label={choice.label}
            name={choice.name}
        />
    )
}

function SearchFilter() {
    return (
        <div className='search-filter-sidebar card'>
            <div className='filter-option'>
                <h4>Location</h4>
                {Location.map(createRadioEntry)}
            </div>
            <div className='filter-option'>
                <h4>Reviews</h4>
                {Reviews.map(createRadioEntry)}
            </div>
            <div className='filter-option'>
                <h4>Language</h4>
                {Language.map(createRadioEntry)}
            </div>
        </div>
    )
}

export default SearchFilter;