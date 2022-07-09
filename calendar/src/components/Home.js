import './../css/Home.css'
import { useNavigate } from 'react-router-dom'
import 'animate.css';


const Home = () => {
    let navigate = useNavigate();
    function handleClick() {
        navigate('../aboutUs')
    }

    return (
        <div className='main-home'>
            <div className='container-home'>
                <div className='content-home'>
                    <h1 className='animate__animated animate__fadeInUp'>We Care About <br /> Your Beauty</h1>
                    <p className='animate__animated animate__fadeInUp'>"Discover your own style. Don't try to repeat what has already been written - have the courage to do your own thing and don't be afraid to do something different"</p>
                    <button className='btn-home animate__animated animate__fadeInUp' onClick={handleClick}>About us</button>
                </div>
            </div>
        </div>
    )
}

export default Home