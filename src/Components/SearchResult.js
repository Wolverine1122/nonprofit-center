import { useState } from 'react';
import DownArrow from '../images/icons/down-arrow.svg';

function SearchResult(props) {
    const [detailed, setDisplayDetailed] = useState(false)
    const [transform, setTransform] = useState(false)

    function handleClick() {
        setDisplayDetailed(!detailed)
        setTransform(!transform)
    }

    return (
        <div className='search-result'>
            <div className='result-highlight'>
                <div className='result-image'>
                    <img src={props.img} alt={props.name} />
                </div>
                <div className='result-text'>
                    <h4>{props.name}</h4>
                    <p>{props.description}</p>
                </div>
                <div className='learn-more-button'>
                    <button onClick={handleClick} className={transform ? 'button-transform' : null}>
                        <img src={DownArrow} alt='down arrow' />
                    </button>
                </div>
            </div>
            {detailed ? <ResultDetailed /> : null}
        </div>
    )
}

function ResultDetailed(props) {
    return (
        <div className='result-detailed'>
            <div className='Resources'>
                <h5>Resources</h5>
                <p>{props.resources}</p>
            </div>
            <div className='contact'>
                <h5>Contact</h5>
                <p>{props.contact}</p>
            </div>
            <div className='learning-attributes'>
                <h5>Attributes</h5>
                <p>{props.learningAttributes}</p>
            </div>
        </div>
    )
}

export default SearchResult;