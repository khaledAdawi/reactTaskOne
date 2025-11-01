import cabinImg from './../../assets/img/cabin.png'
import cakeImg from './../../assets/img/cake.png'
import circusImg from './../../assets/img/circus.png'
import gameImg from './../../assets/img/game.png'
import safeImg from './../../assets/img/safe.png'
import submarineImg from './../../assets/img/submarine.png'



function Portfolio() {

    return <>
        
        <section id="portfolio" className="py-5">
            <div className="container text-center">
                <h2 className="fw-bold mb-4">PORTFOLIO</h2>
                <div className="row g-4">
                    <div className="col-md-4">
                        <img src={cabinImg} className="img-fluid rounded shadow" alt="Cabin" />
                    </div>
                    <div className="col-md-4">
                        <img src={cakeImg} className="img-fluid rounded shadow" alt="Cake" />
                    </div>
                    <div className="col-md-4">
                        <img src={circusImg} className="img-fluid rounded shadow" alt="Circus" />
                    </div>
                    <div className="col-md-4">
                        <img src={gameImg} className="img-fluid rounded shadow" alt="Game" />
                    </div>
                    <div className="col-md-4">
                        <img src={safeImg} className="img-fluid rounded shadow" alt="Safe" />
                    </div>
                    <div className="col-md-4">
                        <img src={submarineImg} className="img-fluid rounded shadow" alt="Submarine" />
                    </div>
                </div>
            </div>
        </section>


    </>
}
export default Portfolio;