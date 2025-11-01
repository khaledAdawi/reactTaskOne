import style from './Contact.module.css'

function Contact() {
    return <>
        <section id="contact" className={`py-5 text-center ${style.contactSection}`}>
            <div className="container">

                <h2 className={`fw-bold mb-3 ${style.contactTitle}`}>CONTACT ME</h2>



                <form className={`mx-auto ${style.formContainer}`}>
                    <div className="mb-4 text-start">
                        <label htmlFor="name" className={style.label}>Full name</label>
                        <input
                            type="text"
                            id="name"
                            className={`form-control border-0 border-bottom ${style.inputField}`}
                            required
                        />
                    </div>

                    <div className="mb-4 text-start">
                        <label htmlFor="email" className={style.label}>Email address</label>
                        <input
                            type="email"
                            id="email"
                            className={`form-control border-0 border-bottom`}
                            required
                        />
                    </div>

                    <div className="mb-4 text-start">
                        <label htmlFor="phone" className={style.label}>Phone number</label>
                        <input
                            type="tel"
                            id="phone"
                            className={`form-control border-0 border-bottom`}
                            required
                        />
                    </div>

                    <div className="mb-4 text-start">
                        <label htmlFor="message" className={style.label}>Message</label>
                        <textarea
                            id="message"
                            className={`form-control border-0 border-bottom`}
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className={`btn ${style.sendBtn}`}>Send</button>
                </form>
            </div>
        </section>
    </>
}
export default Contact;