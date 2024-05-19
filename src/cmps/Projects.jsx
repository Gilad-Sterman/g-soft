import { DownScroll } from "./DownScroll"

export function Projects({ selected, setSelected }) {
    const projects = [
        {
            title: 'Songify - Spotify Recreation',
            description: 'A full recreation of Spotify, an end-to-end, pixel-perfect full stack project, using the React.js, Node.js and MongoDB stack, with the use of web sockets for real time functionalities.',
            link: 'https://songify-njdj.onrender.com/',
            image: 'https://res.cloudinary.com/dollaguij/image/upload/v1715840614/svg/Screenshot_2023-12-24_141453_nr1qts.png'
        },
        {
            title: 'Inventory Management Platform',
            description: 'A platform for factory workers to update inventory and a dashboard to show current inventory, based on complex filtering options.',
            link: 'https://github.com/Gilad-Sterman/ptil-tekhelet-inventory-back.git',
            image: 'https://res.cloudinary.com/dollaguij/image/upload/v1715805879/svg/Screenshot_2024-01-20_132842_sbnwgc.png'
        },
        {
            title: 'G-Vibes - Discover Exclusive Music',
            description: "A platform to discover and listen to exclusive, original new music. Relax, get in the vibe and find music you love!",
            link: 'https://g-vibes.onrender.com/',
            image: 'https://res.cloudinary.com/dollaguij/image/upload/v1715862745/svg/g2_dhwksk.png'
        },
    ]

    return (
        <section id="projects" className="projects">
            <div className="pill">Recent Projects</div>
            <h4>In my portfolio, you will find a diverse array of web development projects that showcase my skills and expertise.</h4>
            <p>From recreating popular platforms like Spotify to developing robust inventory management systems for factory workers, my work spans various domains and industries. Utilizing a wide range of technologies, I focus on delivering high-quality, responsive, and user-friendly applications.</p>
            <div className="project-list">
                {projects.map((project, index) => (
                    <div key={index} className={`project-card c${index + 1}`}>
                        <h3>{project.title}</h3>
                        <div className="project-details">
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" className="project-link">View Project</a>
                        </div>
                        <img src={project.image} alt={project.title} className="project-image" />
                    </div>
                ))}
            </div>
        </section>
    )
}