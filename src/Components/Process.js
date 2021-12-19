import ProcessSteps from "./ProcessSteps";
import TextProcessSteps from '../Texts/TextProcessSteps';

function createProcessEntry(steps) {
    return (
        <ProcessSteps
            key={steps.id}
            step={steps.step}
            alt={steps.alt}
            img={steps.img}
            description={steps.description} />
    )
}

function Process() {
    return (
        <div className="process-section">
            <div className="process-text">
                <h2>Get help for anything</h2>
                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                    sint elit amet minim mollit non deserunt ullamco est
                </p>
            </div>

            <div className="process-steps-row">
                {TextProcessSteps.map(createProcessEntry)}
            </div>
        </div>
    )
}

export default Process;