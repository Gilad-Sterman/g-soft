import { DownScroll } from "./DownScroll";

export function Hero({ showForm, setShowForm }) {
    return (
        <section className="hero">
            <div className="txt">
                <div className="pill">Full Stack Developer</div>
                <h3>G-Softwares</h3>
                <p>Creating modern, responsive websites that bring your ideas to life. Explore my work and see how I can help you achieve your digital goals.</p>
                <button className="btn-contact" onClick={() => setShowForm(!showForm)}>
                    <img src="https://res.cloudinary.com/dollaguij/image/upload/v1716108050/icons8-email-50_k3jpwc.png" alt="email" />
                    <span>Contact Me</span>
                </button>
            </div>
            <div className="imgs">
                <img className="hero-img" src="https://res.cloudinary.com/dollaguij/image/upload/v1716109308/landing_pic1_qslv7r.png" alt="Hero_img" />
                <img className="hero-bg" src="https://res.cloudinary.com/dollaguij/image/upload/v1716109308/landing_pic2_cpxn6r.jpg" alt="Hero_bg" />
            </div>
        </section>
    )
}