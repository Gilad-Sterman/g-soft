export function ContactForm({ showForm, setShowForm }) {
    return (
        <section className="contact-form">
            <button className="btn-close" onClick={() => setShowForm(false)}>
                <img src="https://res.cloudinary.com/dollaguij/image/upload/v1699194245/svg/x_ti24ab.svg" alt="close-form" />
            </button>
            <form>
                <h4>Please Enter Your Contact Info, And I'll Get Back To You Shortly</h4>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" placeholder="Name" required/>
                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" placeholder="Last Name"/>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Example@mail.com" required/>
                <button className="btn-submit">Send</button>
            </form>
        </section>
    )
}