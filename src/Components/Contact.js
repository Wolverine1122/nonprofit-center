import EmailUs from './EmailUs';
import InfoCard from './InfoCard';
import TextInfoCard from '../Texts/TextInfoCard';

function createCardEntry(card, index) {
    return (
        <InfoCard
            key={index}
            class={card.class}
            title={card.title}
            details={card.details}
        />
    )
}

function Contact() {
    return (
        <div className='contact'>
            <EmailUs />
            {TextInfoCard.map(createCardEntry)}
        </div>
    )
}

export default Contact;