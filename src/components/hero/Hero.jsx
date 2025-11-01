import img from './../../assets/img/child.png'
import style from './Hero.module.css'

function Hero() {

    return <>
        <header class={`${style.hero} text-center text-white py-5`}>
            <div class="container">
                <img
                    src={img}
                    alt="Profile Image"
                    class="rounded-circle mb-3"
                    width="200"
                />
                <h2 class="fw-bold">START BOOTSTRAP</h2>
                <p class="lead">Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </header>




    </>
}

export default Hero;