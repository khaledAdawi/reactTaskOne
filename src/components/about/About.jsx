import style from './About.module.css'

function About() {
    return <>
        <section id="about" className={`text-white text-center py-5 ${style.aboutSection}`}>
            <div className="container">

                <h2 className={`fw-bold mb-3 ${style.aboutTitle}`}>ABOUT</h2>


                <div className="row justify-content-center mb-4">
                    <div className="col-md-4">
                        <p>
                            Freelancer is a free bootstrap theme created by Start Bootstrap. The
                            download includes the complete source files including HTML, CSS, and
                            JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <p>
                            You can create your own custom avatar for the masthead, change the icon
                            in the dividers, and add your email address to the contact form to make
                            it fully functional!
                        </p>
                    </div>
                </div>


                <a href="#" className={`btn ${style.downloadBtn}`}>
                    <i className="fa-solid fa-download me-2"></i> Free Download!
                </a>
            </div>
        </section>
    </>

}
export default About;