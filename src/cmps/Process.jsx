import { DownScroll } from "./DownScroll"

export function Process() {
    const steps = [
        {
            title: 'Initial Consultation',
            description: 'Discuss the project requirements, goals, and timelines to ensure a clear understanding of the client’s needs.',
            icon: "https://res.cloudinary.com/dollaguij/image/upload/v1716126287/icons/Frame_87_jelyie.png"
        },
        {
            title: 'Project Proposal',
            description: 'Provide a detailed proposal outlining the project scope, deliverables, timeline, and cost estimate.',
            icon: "https://res.cloudinary.com/dollaguij/image/upload/v1716126283/icons/Frame_87_1_p2ua0a.png"
        },
        {
            title: 'Design & Development',
            description: 'Create design mockups for approval, then proceed with the development phase, ensuring continuous communication and updates.',
            icon: "https://res.cloudinary.com/dollaguij/image/upload/v1716126283/icons/Frame_87_2_mgzamy.png"
        },
        {
            title: 'Testing & Feedback',
            description: 'Conduct thorough testing to identify and fix any issues, and incorporate client feedback to refine the project.',
            icon: "https://res.cloudinary.com/dollaguij/image/upload/v1716126285/icons/Frame_87_4_rozrqj.png"
        },
        {
            title: 'Project Delivery',
            description: 'Deliver the completed project, provide necessary documentation, and offer training if required.',
            icon: "https://res.cloudinary.com/dollaguij/image/upload/v1716126286/icons/Frame_87_5_p9wliw.png"
        },
        {
            title: 'Post-Launch Support',
            description: 'Provide ongoing support and maintenance to ensure the project continues to run smoothly.',
            icon: "https://res.cloudinary.com/dollaguij/image/upload/v1716126284/icons/Frame_87_3_bcpapx.png"
        }
    ]

    return (
        <section id="process" className="process">
            <div className="pill">Process</div>
            <h2>My Process</h2>
            <p>From the initial consultation to project delivery and post-launch support, my process ensures a clear understanding of your needs, detailed planning, seamless execution, thorough testing, and ongoing maintenance. Each step is designed to deliver high-quality, tailored solutions.</p>
            <div className="process-steps">
                {steps.map((step, index) => (
                    <div key={index} className="process-step" data-aos="flip-up" data-aos-duration="1000">
                        <img src={step.icon} alt="icon" />
                        <div className="info">
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                        {index < steps.length - 1 && <div className="arrow">&#8595;</div>}
                    </div>
                ))}
            </div>
        </section>
    )
}