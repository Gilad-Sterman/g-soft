export function About({ selected, setSelected }) {
    return (
        <section id="about" className="about">
            <h2>About Me</h2>
            <div className="about-content">
                <img src="https://res.cloudinary.com/dollaguij/image/upload/v1715841971/svg/an-exquisite-modern-logo-design-featuring-the-inte-jRDUR9FgQu6oriC-52JpHw-ISVz9i9OSoqVjM6OWhjmug_bfw1er.jpg" alt="Gilad Sterman" className="about-photo" />
                <div className="about-text" data-aos="zoom-in">
                    <p>
                        Hi, I'm Gilad Sterman, a passionate web developer with over 6 years of experience in Hebrew-English translations and a strong background in full-stack web development. I recently completed an intensive bootcamp where I mastered HTML, CSS, SCSS, JavaScript, React.js, Node.js, Express.js, MongoDB, and more. During this time, I built several projects, including a full end-to-end recreation of Spotify. My expertise spans frontend and backend development, allowing me to create comprehensive and seamless web applications. I am dedicated to continuous learning and am always looking for new challenges to tackle.
                    </p>
                </div>
            </div>
        </section>
    )
}