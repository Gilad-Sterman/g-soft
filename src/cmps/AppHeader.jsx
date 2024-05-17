export function AppHeader({ selected, setSelected }) {

    function scrollToTop() {
        window.scrollTo(0, 0)
    }

    return (
        <header className="app-header">
            <div className="logo" onClick={() => scrollToTop()}>
                <img src="https://res.cloudinary.com/dollaguij/image/upload/v1715841971/svg/an-exquisite-modern-logo-design-featuring-the-inte-jRDUR9FgQu6oriC-52JpHw-ISVz9i9OSoqVjM6OWhjmug_bfw1er.jpg" alt="logo" />
            </div>
            <nav>
                <a href="#projects">Projects</a>
                <a href="#technologies">Technologies</a>
                <a href="#process">Process</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    )
}