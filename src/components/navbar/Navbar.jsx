
import style from './Navbar.module.css'

function Navbar() {

    return <>

        <nav className={`${style.nav} navbar navbar-expand-lg navbar-dark py-3`}>
            <div className="container">
                <a className="navbar-brand fw-bold text-white" href="#">START BOOTSTRAP</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarNav"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#portfolio">PORTFOLIO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#about">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#contact">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>



    </>
}

export default Navbar;