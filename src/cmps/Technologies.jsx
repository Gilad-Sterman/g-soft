import { DownScroll } from "./DownScroll"

export function Technologies() {
    const techStack = [
        { name: 'HTML', url: 'https://res.cloudinary.com/dollaguij/image/upload/v1716115567/icons/html1_bzruj1.png' },
        { name: 'CSS', url: 'https://res.cloudinary.com/dollaguij/image/upload/v1716115645/icons/css1_mlpsus_20c615.png' },
        { name: 'SCSS', url: 'https://res.cloudinary.com/dollaguij/image/upload/v1716115569/icons/scss1_exopx4.png' },
        { name: 'JavaScript', url: 'https://res.cloudinary.com/dollaguij/image/upload/v1716115567/icons/js1_k9jcjo.png' },
        { name: 'React.js', url: 'https://res.cloudinary.com/dollaguij/image/upload/v1716115569/icons/react1_kgg4wy.png' },
        { name: 'Node.js', url: 'https://res.cloudinary.com/dollaguij/image/upload/v1716115568/icons/node2_nxizdj.png' },
        { name: 'MongoDB', url: 'https://res.cloudinary.com/dollaguij/image/upload/v1716115568/icons/mongo2_gxhkxq.png' },
        { name: 'Angular', url: 'https://res.cloudinary.com/dollaguij/image/upload/v1716115571/icons/angular1_mayvlj.png' },
        { name: 'Vue.js', url: 'https://res.cloudinary.com/dollaguij/image/upload/v1716115570/icons/vue1_kombdt.png' },
    ]

    return (
        <section id="technologies" className="technologies">
            <div className="pill">Technologies</div>
            <h2>Technologies I Use</h2>
            <p>I specialize in both front-end and back-end development, using HTML, CSS, SCSS, and JavaScript for responsive interfaces. My expertise includes React.js for dynamic apps, and Node.js, Express.js, and MongoDB for robust server-side solutions. I also have experience with Angular and Vue.</p>
            <ul className="tech-list">
                {techStack.map((tech, index) => (
                    <li key={index} className="tech-item" data-aos="slide-up">
                        <img className="tech-icon" src={tech.url} alt={tech.name} />
                        <span className="tech-name">{tech.name}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}