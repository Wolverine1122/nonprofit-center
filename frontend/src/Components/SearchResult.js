import { useState } from 'react';
import DownArrow from '../images/icons/down-arrow.svg';
import LearningAttributes from './LearningAttributes';
import Resources from './Resources';
import ResultContact from './ResultContact';

function SearchResult(props) {
    const [detailed, setDisplayDetailed] = useState(false)
    const [transform, setTransform] = useState(false) //used for animating drop-down button

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
            {detailed ? <ResultDetailed resources={props.resources} contact={props.contact} learningAttributes={props.learningAttributes} /> : null}
        </div>
    )
}

function ResultDetailed(props) {
    return (
        <div className='result-detailed'>
            <div className='resources'>
                <h5>Resources</h5>
                <ul className='learning-resources'>
                    {props.resources.map((resource, index) => (
                        <Resources key={index} resource={resource} />
                    ))}
                </ul>
            </div>
            <div className='learning-attributes'>
                <h5>Attributes</h5>
                <ul className='learning-attributes'>
                    {props.learningAttributes.map((attribute, index) => (
                        <LearningAttributes key={index} attribute={attribute} />
                    ))}
                </ul>
            </div>
            <div className='result-contact-section'>
                <h5>Contact</h5>
                <ul className='result-contacts'>
                    {props.contact.map((contact, index) => (
                        <ResultContact key={index} contact={contact} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SearchResult;