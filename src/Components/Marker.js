import { useState } from 'react';
import MarkerImg from '../images/icons/marker.svg';

function Marker(props) {
    const [displayName, setDisplayName] = useState(false);

    function handleClick() {
        setDisplayName(!displayName)
    }

    return (
        <div className='marker'>
            <button onClick={handleClick}>
                <img
                    src={MarkerImg} alt='marker-icon'
                    className='marker-icon'
                />
            </button>
            {displayName ? <OrgName name={props.name} /> : null}
        </div>
    )
}

function OrgName(props) {
    return (
        <div className='org-name'>
            <p>{props.name}</p>
        </div>
    )
}

export default Marker;