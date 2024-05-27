import { useState } from "react"
import { contactService } from "../services/contact.service"

export function ContactForm({ showForm, setShowForm }) {

    const [clientInfo, setClientInfo] = useState({ name: '', email: '', addInfo: '' })
    const [msg, setMsg] = useState(false)

    function handleChange({ target }) {
        const field = target.id
        const val = target.value
        const infoCopy = JSON.parse(JSON.stringify(clientInfo))
        infoCopy[field] = val
        setClientInfo(infoCopy)
    }

    async function handleSubmit(ev) {
        ev.preventDefault()
        try {
            const res = await contactService.sendInfo(clientInfo)
            setMsg(true)
            setTimeout(() => {
                setShowForm(false)
            }, 2500)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <section className="contact-form">
            <button className="btn-close" onClick={() => setShowForm(false)}>
                <img src="https://res.cloudinary.com/dollaguij/image/upload/v1699194245/svg/x_ti24ab.svg" alt="close-form" />
            </button>
            {!msg && <form>
                <h4>Please Enter Your Contact Info, And I'll Get Back To You Shortly</h4>
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="Name" required onInput={handleChange} />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Example@mail.com" required onInput={handleChange} />
                <label htmlFor="addInfo">Additional Info</label>
                <textarea name="addInfo" id="addInfo" onInput={handleChange}></textarea>
                <button className="btn-submit" onClick={(ev => handleSubmit(ev))}>Send</button>
            </form>}
            {msg && <h4>Thank You For Reaching Out! I'll Get Back To You Shortly </h4>}
        </section>
    )
}