import style from './Footer.module.css'

function Footer() {
    return <>
        <footer className={`text-white text-center py-5 ${style.footerSection}`}>
            <div className="container">
                <div className="row">

                    <div className="col-md-4 mb-4 mb-md-0">
                        <h5 className="fw-bold mb-3">LOCATION</h5>
                        <p className="mb-0">2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>


                    <div className="col-md-4 mb-4 mb-md-0">
                        <h5 className="fw-bold mb-3">AROUND THE WEB</h5>
                        <div className="d-flex justify-content-center gap-3">
                            <a href="#" className={style.iconCircle}>
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="#" className={style.iconCircle}>
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                            <a href="#" className={style.iconCircle}>
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                            <a href="#" className={style.iconCircle}>
                                <i className="fa-solid fa-basketball"></i>
                            </a>
                        </div>
                    </div>


                    <div className="col-md-4">
                        <h5 className="fw-bold mb-3">ABOUT FREELANCER</h5>
                        <p>
                            Freelance is a free to use, MIT licensed Bootstrap theme created by{' '}
                            <a href="#" className={style.footerLink}>Start Bootstrap</a>.
                        </p>
                    </div>
                </div>
            </div>
        </footer>



    </>

}

export default Footer