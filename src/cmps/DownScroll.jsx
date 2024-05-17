export function DownScroll({ scrollTo }) {

    function scroll(scrollTo) {
        window.scrollTo(scrollTo)
    }

    return (
        <section className="down-scroll">
            <a href={scrollTo}>
                <img src="https://res.cloudinary.com/dollaguij/image/upload/v1699194261/svg/forward_ohmney.svg" alt="down_arrow" />
            </a>
        </section>
    )
}