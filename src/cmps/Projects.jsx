import { DownScroll } from "./DownScroll"

export function Projects({ selected, setSelected }) {
    const projects = [
        {
            title: 'Songify - Spotify Recreation',
            description: 'A full recreation of Spotify, an end-to-end, pixel-perfect full stack project, using the React.js, Node.js, and MongoDB stack, with the use of web sockets for real-time functionalities.',
            link: 'https://songify-njdj.onrender.com/',
            image: ['https://res.cloudinary.com/dollaguij/image/upload/v1715840614/svg/Screenshot_2023-12-24_141453_nr1qts.png']
        },
        {
            title: 'Visitor Center Information Pages',
            description: 'Two simple, informative web pages created for display at a visitors center, built with Vue and SCSS for a seamless and engaging user experience.',
            link: 'https://github.com/Gilad-Sterman/tekhelet-in-the-gmara',
            image: ['https://res.cloudinary.com/dollaguij/image/upload/v1731587189/tek1_dd1awl.png', 'https://res.cloudinary.com/dollaguij/image/upload/v1731587180/tek2_jbvdc9.png', 'https://res.cloudinary.com/dollaguij/image/upload/v1731587173/tek3_palzkz.png']
        },
        {
            title: 'Kord - Audio-Based Social Media Mockup',
            description: 'A mockup of a social media app centered around audio interactions, built using React to showcase community-building through sound.',
            link: 'https://gilad-sterman.github.io/Kord/',
            image: ['https://res.cloudinary.com/dollaguij/image/upload/v1731586862/kord1_u1cgyt.png', 'https://res.cloudinary.com/dollaguij/image/upload/v1731586855/kord2_kyymbp.png', 'https://res.cloudinary.com/dollaguij/image/upload/v1731586849/kord3_fa3ubw.png']
        },
        {
            title: 'Inventory Management Platform',
            description: 'A platform for factory workers to update inventory and a dashboard to show current inventory, based on complex filtering options.',
            link: 'https://github.com/Gilad-Sterman/ptil-tekhelet-inventory-back.git',
            image: ['https://res.cloudinary.com/dollaguij/image/upload/v1731587572/Ptil_Dashboard_Desktopcopy_rgtkxb.png', 'https://res.cloudinary.com/dollaguij/image/upload/v1731587578/dashcopy_zamvvw.png']
        },
        {
            title: 'Drone Mapping Company Landing Page',
            description: 'A landing page created for a 3D drone mapping company, focusing on showcasing cutting-edge mapping technology, built using React.',
            link: 'https://gilad-sterman.github.io/Ocean-Gr/',
            image: ['https://res.cloudinary.com/dollaguij/image/upload/v1731587337/ocean1_lkjafv.png']
        }
    ]


    return (
        <section id="projects" className="projects">
            <div className="pill">Recent Projects</div>
            <h4>In my portfolio, you will find a diverse array of web development projects that showcase my skills and expertise.</h4>
            <p>In my portfolio, you’ll find a diverse range of web development projects that showcase my skills in building both full-stack applications and polished front-end experiences. From recreating popular platforms like Spotify to developing a social media app centered around audio, my work spans various technologies and industries. I’ve also built informative web pages for a visitor center, an inventory management system for factory workers, and a landing page for a company specializing in 3D drone mapping. My focus is on delivering high-quality, responsive, and user-friendly applications that meet unique client needs.</p>
            <div className="project-list">
                {projects.map((project, index) => (
                    <div key={index} className={`project-card c${index + 1}`} data-aos="fade-up">
                        <h3>{project.title}</h3>
                        <div className="project-details">
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" className="project-link">View Project</a>
                        </div>
                        <section className="img-container-mobile">
                            <img src={project.image[0]} alt={project.title} className={`project-image`} />
                        </section>
                        <section className="img-container">
                            {project.image.map((img, idx) =>
                                <img key={idx} src={img} alt={project.title} className={`project-image ${idx === 0 ? 'first' : ''}`} />
                            )}
                        </section>
                    </div>
                ))}
            </div>
        </section>
    )
}