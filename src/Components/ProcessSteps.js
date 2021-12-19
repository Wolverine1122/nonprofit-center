function ProcessSteps(props) {
    return (
        <div className='process-step'>
            <div className='process-img'>
                <img src={props.img} alt={props.alt} />
            </div>
            <div className="process-steps-text">
                <h3>{props.step}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default ProcessSteps;