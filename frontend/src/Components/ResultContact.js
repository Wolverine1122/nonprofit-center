function ResultContact(props) {
    return (
        <li className='result-contact'><a href={props.contact}>{props.contact}</a></li>
    )
}

export default ResultContact;