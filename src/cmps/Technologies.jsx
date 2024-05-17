import { DownScroll } from "./DownScroll"

export function Technologies() {
    const techStack = [
        { name: 'HTML', url: 'https://res.cloudinary.com/dollaguij/image/upload/v1715804860/svg/html_jimh5e.png' },
        { name: 'CSS', url: 'https://res.cloudinary.com/dollaguij/image/upload/v1715804859/svg/css_kc7izm.jpg' },
        { name: 'SCSS', url: 'https://res.cloudinary.com/dollaguij/image/upload/v1715804864/svg/scss_aoankh.png' },
        { name: 'JavaScript', url: 'https://res.cloudinary.com/dollaguij/image/upload/v1715804860/svg/js_igjj5v.png' },
        { name: 'React.js', url: 'https://res.cloudinary.com/dollaguij/image/upload/v1715804863/svg/react_n5px3z.png' },
        { name: 'Node.js', url: 'https://res.cloudinary.com/dollaguij/image/upload/v1715804994/svg/node1_fze3qw.png' },
        { name: 'MongoDB', url: 'https://res.cloudinary.com/dollaguij/image/upload/v1715805080/svg/mongo1_nwcv1o.png' },
        { name: 'Angular', url: 'https://res.cloudinary.com/dollaguij/image/upload/v1715804866/svg/angular_qg6w01.png' },
        { name: 'Vue.js', url: 'https://res.cloudinary.com/dollaguij/image/upload/v1715804865/svg/vue_udoarb.png' },
    ]

    return (
        <section id="technologies" className="technologies">
            <h2>Technologies I Use</h2>
            <ul className="tech-list">
                {techStack.map((tech, index) => (
                    <li key={index} className="tech-item" data-aos="slide-up">
                        <img className="tech-icon" src={tech.url} alt={tech.name} />
                        <span className="tech-name">{tech.name}</span>
                    </li>
                ))}
            </ul>
            <DownScroll scrollTo={"#process"} />
        </section>
    )
}