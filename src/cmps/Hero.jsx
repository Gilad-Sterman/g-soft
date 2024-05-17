import { DownScroll } from "./DownScroll";

export function Hero({ selected, setSelected }) {
    return (
        <section className="hero">
            <img className="hero-img" src="https://res.cloudinary.com/dollaguij/image/upload/v1715795146/a-striking-and-contemporary-hero-image-for-gilad-s-UzlF4DGvQ3m5Hbso0Jt1vQ-Wj4ifSUiRbK1iQK09vM8eg_puskex_2d5675.jpg" alt="Hero_img" />
            <h3>G Software</h3>
            <h4>Creating modern, responsive websites that bring your ideas to life.
                <br />Explore my work and see how I can help you achieve your digital goals.</h4>
            <DownScroll scrollTo={"#projects"} />
        </section>
    )
}