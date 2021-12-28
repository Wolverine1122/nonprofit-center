function RadioButtons(props) {
    return (
        <div className='filter-choice'>
            <input type='radio' name={props.name} id={props.id} />
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    )
}

export default RadioButtons;