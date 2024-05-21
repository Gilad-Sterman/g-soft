export function About({ showForm, setShowForm }) {
    return (
        <section id="about" className="about">
            <div className="pill">About Me</div>
            <div className="about-content">
                <div className="about-text" data-aos="zoom-in">
                    <h4>Full Stack developer with experience in delivering quality products</h4>
                    <p>
                        I'm Gilad Sterman, a passionate web developer with a strong background in full-stack web development. I recently completed an intensive bootcamp where I mastered HTML, CSS, SCSS, JavaScript, React.js, Node.js, Express.js, MongoDB, and more. During this time, I built several projects, including a full end-to-end recreation of Spotify. My expertise spans frontend and backend development, allowing me to create comprehensive and seamless web applications. I am dedicated to continuous learning and am always looking for new challenges to tackle.
                    </p>
                    <button className="btn-contact" title="contact-me" onClick={() => setShowForm(!showForm)}>
                        <img src="https://res.cloudinary.com/dollaguij/image/upload/v1716108050/icons8-email-50_k3jpwc.png" alt="email" />
                        <span>Contact Me</span>
                    </button>
                </div>
                <div className="imgs">
                    <img src="https://res.cloudinary.com/dollaguij/image/upload/v1716109308/landing_pic2_cpxn6r.jpg" alt="cover-image" className="bg-img" />
                    <img src="https://res.cloudinary.com/dollaguij/image/upload/v1716107339/logo-no-background_p7a7kq.png" alt="Gilad Sterman" className="about-photo" />
                </div>
            </div>
        </section>
    )
}