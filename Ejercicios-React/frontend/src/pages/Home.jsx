import tkdimg from '../assets/home/taekwon.jpg';
import yogaimg from '../assets/home/yoga.jpg';
import "@style/home.scss"

const Home = () => {

    return (
        <div className="card-home">
            <h2>En esta página hay información del GYM</h2>
            <div>
                <img src="/home/funcional.jpg" alt="Funcional" />
                <h2>Funcional</h2>
            </div>
            <div>
                <img src="/home/zumba.jpg" alt="Zumba" />
                <h2>Zumba</h2>
            </div>
            <div>
                <img src={tkdimg} alt="Taekwon" />
                <h2>Taekwon</h2>
            </div>
            <div>
                <img src={yogaimg} alt="Yoga" />
                <h2>Yoga</h2>
            </div>
        </div>
    )
}

export default Home;