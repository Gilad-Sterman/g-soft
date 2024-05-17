import { DownScroll } from "./DownScroll"

export function Process() {
    const steps = [
        {
            title: 'Initial Consultation',
            description: 'Discuss the project requirements, goals, and timelines to ensure a clear understanding of the client’s needs.'
        },
        {
            title: 'Project Proposal',
            description: 'Provide a detailed proposal outlining the project scope, deliverables, timeline, and cost estimate.'
        },
        {
            title: 'Design & Development',
            description: 'Create design mockups for approval, then proceed with the development phase, ensuring continuous communication and updates.'
        },
        {
            title: 'Testing & Feedback',
            description: 'Conduct thorough testing to identify and fix any issues, and incorporate client feedback to refine the project.'
        },
        {
            title: 'Project Delivery',
            description: 'Deliver the completed project, provide necessary documentation, and offer training if required.'
        },
        {
            title: 'Post-Launch Support',
            description: 'Provide ongoing support and maintenance to ensure the project continues to run smoothly.'
        }
    ]

    return (
        <section id="process" className="process">
            <h2>My Process</h2>
            <div className="process-steps">
                {steps.map((step, index) => (
                    <div key={index} className="process-step" data-aos="flip-up" data-aos-duration="1000">
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                        {index < steps.length - 1 && <div className="arrow">&#8595;</div>}
                    </div>
                ))}
            </div>
            <DownScroll scrollTo={"#about"} />
        </section>
    )
}