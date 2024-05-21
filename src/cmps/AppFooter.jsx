export function AppFooter({ showForm, setShowForm }) {
    return (
        <footer className="app-footer" id="contact">
            <div className="footer-content">
                <p>Gilad <span>Sterman</span> <br />Creating modern, responsive websites that bring your ideas to life. <br /> &copy; 2024 Gilad Sterman. All rights reserved.</p>
                <div className="contact-info">
                    <div className="info email">
                        <img src="https://res.cloudinary.com/dollaguij/image/upload/v1716108050/icons8-email-50_k3jpwc.png" alt="email" />
                        <a href="mailto:g.sterman@gmail.com">g.sterman@gmail.com</a>
                    </div>
                    <div className="info phone">
                        <img src="https://res.cloudinary.com/dollaguij/image/upload/v1716119137/icons/icons8-phone-50_q2ivfp.png" alt="phone" />
                        <a href="tel:+972585003431">+972-58-500-3431</a>
                    </div>
                    <button className="header-contact" title="contact-me" onClick={() => setShowForm(!showForm)}>
                        <img src="https://res.cloudinary.com/dollaguij/image/upload/v1716108050/icons8-email-50_k3jpwc.png" alt="email" />
                        <span>Contact Me</span>
                    </button>
                </div>
            </div>
            <div className="footer-bottom">
                <nav>
                    <a href="#projects">Projects</a>
                    <a href="#technologies">Technologies</a>
                    <a href="#process">Process</a>
                    <a href="#about">About</a>
                </nav>
                <div className="links">
                    <a href="https://github.com/Gilad-Sterman" target="_blank" rel="noopener noreferrer">
                        <img src="https://res.cloudinary.com/dollaguij/image/upload/v1716191784/icons/github_vpxvru.png" alt="GitHub" className="social-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/gilad-sterman-7b2469278/" target="_blank" rel="noopener noreferrer">
                        <img src="https://res.cloudinary.com/dollaguij/image/upload/v1715847533/svg/linkedin_3536505_hchtos.png" alt="LinkedIn" className="social-icon" />
                    </a>
                </div>
            </div>
        </footer>
    )
}