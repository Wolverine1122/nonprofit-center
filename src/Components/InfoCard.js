function InfoCard(props) {
    return (
        <div className={props.class}>
            <h2>{props.title}</h2>
            <p>{props.details}</p>
        </div >
    )
}

export default InfoCard;