export function AppHeader({ selected, setSelected }) {

    function scrollToTop() {
        window.scrollTo(0, 0)
    }

    return (
        <header className="app-header">
            <div className="logo" onClick={() => scrollToTop()}>
                <img src="https://res.cloudinary.com/dollaguij/image/upload/v1716107339/logo-no-background_p7a7kq.png" alt="logo" />
            </div>
            <nav>
                <a href="#projects">Projects</a>
                <a href="#technologies">Technologies</a>
                <a href="#process">Process</a>
                <a href="#about">About</a>
            </nav>
            <button className="header-contact">
                <span>Contact Me</span>
                <img src="https://res.cloudinary.com/dollaguij/image/upload/v1716108050/icons8-email-50_k3jpwc.png" alt="email" />
            </button>
        </header>
    )
}