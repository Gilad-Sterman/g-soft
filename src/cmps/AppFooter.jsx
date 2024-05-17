export function AppFooter() {
    return (
        <footer className="app-footer" id="contact">
            <div className="footer-content">
                <div className="contact-info">
                    <h3>Contact</h3>
                    <p>Email: <a href="mailto:your-email@example.com">g.sterman@gmail.com</a></p>
                    <p>Phone: <a href="tel:+1234567890">+972-58-500-3431</a></p>
                </div>
                <div className="social-links">
                    <h3>Follow Me</h3>
                    <div className="links">
                        <a href="https://github.com/Gilad-Sterman" target="_blank" rel="noopener noreferrer">
                            <img src="https://res.cloudinary.com/dollaguij/image/upload/v1715847543/svg/github_3291695_r9nldi.png" alt="GitHub" className="social-icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/gilad-sterman-7b2469278/" target="_blank" rel="noopener noreferrer">
                            <img src="https://res.cloudinary.com/dollaguij/image/upload/v1715847533/svg/linkedin_3536505_hchtos.png" alt="LinkedIn" className="social-icon" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Gilad Sterman. All rights reserved.</p>
            </div>
        </footer>
    )
}