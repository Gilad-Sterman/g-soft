import { useState } from "react"

export function AppHeader({ showForm, setShowForm }) {

    const [menuOpen, setMenuOpen] = useState(false)

    function scrollToTop() {
        window.scrollTo(0, 0)
    }

    function toggleMenu(ev) {
        ev.stopPropagation()
        setMenuOpen(!menuOpen)
    }

    function closeMenu() {
        setMenuOpen(false)
    }

    return (
        <header className="app-header" onClick={closeMenu}>
            <div className="logo" onClick={() => scrollToTop()}>
                <img src="https://res.cloudinary.com/dollaguij/image/upload/v1716107339/logo-no-background_p7a7kq.png" alt="logo" />
            </div>
            <nav className={menuOpen ? 'open' : ''}>
                <a href="#projects">Projects</a>
                <a href="#technologies">Technologies</a>
                <a href="#process">Process</a>
                <a href="#about">About</a>
                <button className="header-contact mobile" onClick={() => setShowForm(!showForm)}>
                    <span>Contact Me</span>
                    <img src="https://res.cloudinary.com/dollaguij/image/upload/v1716108050/icons8-email-50_k3jpwc.png" alt="email" />
                </button>
            </nav>
            <button className="header-contact" onClick={() => setShowForm(!showForm)}>
                <span>Contact Me</span>
                <img src="https://res.cloudinary.com/dollaguij/image/upload/v1716108050/icons8-email-50_k3jpwc.png" alt="email" />
            </button>
            <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={(ev) => toggleMenu(ev)}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </button>
        </header>
    )
}