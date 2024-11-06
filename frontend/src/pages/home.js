import image from '../images/mountain-redesigned.webp';
import style from './styles/home.module.css'
import { useNavigate } from 'react-router-dom';
import Footer from '../components/footer.js'
import pokhara from '../images/pokhara.jpg'
import kathmandu from '../images/kathmandu.jpg'
import chitwan from '../images/chitwan.jpg'
import lumbini from '../images/lumbini.jpg'
import everest from '../images/everest.jpg'
import rara from '../images/rara.jpg'
import mustang from '../images/mustang.jpg'
import bandipur from '../images/bandipur.jpg'



const destinations = [
    {
        imgSrc: kathmandu,
        title: "Kathmandu",
        description: "Experience the vibrant culture of Nepal's capital city."
    },
    {
        imgSrc: pokhara,
        title: "Pokhara",
        description: "Relax by the beautiful Phewa Lake with mountain views."
    },
    {
        imgSrc: chitwan,
        title: "Chitwan",
        description: "Explore wildlife in the Chitwan National Park."
    },
    {
        imgSrc: lumbini,
        title: "Lumbini",
        description: "Visit the birthplace of Lord Buddha."
    }
];
const destinations2 = [
    {
        imgSrc: everest,
        title: "Mount Everest",
        description: "Plan a mountain flight to the tallest mountain of the world."
    },
    {
        imgSrc: rara,
        title: "Rara lake",
        description: "Relax by the beautiful Rara Lake surrounded by grenery."
    },
    {
        imgSrc: mustang,
        title: "Mustang",
        description: "Visit Mustang for most scenic views and amazing trekking experience."
    },
    {
        imgSrc: bandipur,
        title: "Bandipur",
        description: "Experience cultural diversity and different traditions of Nepal."
    }
];
function Home() {
    const navigate = useNavigate();
    function smoothScrollTo(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    return (
        <div>
            <div className={style["image-container"]}>
                <img src={image} alt="Mountains" />
                <div className={style["text-overlay"]}>
                    <div className={style["text"]}>Experience the Skies of Nepal</div>
                </div>
                <div className={style["buttons"]}>
                    <span className={style["button1"]} onClick={() => navigate("/booking")}>Book Now</span>
                    <span className={style["button2"]}  onClick={()=>smoothScrollTo('section2')}>Explore</span>
                </div>
                <div className={style["destinations"]} id='section2'>
                    <p className={style["destinations-heading"]}>POPULAR DESTINATIONS</p>
                    <div className={style["container"]}>
                        <div className={style["card-grid"]}>
                            {destinations.map((dest, index) => (
                                <div key={index} className={style["card"]}>
                                    <img src={dest.imgSrc} alt={dest.title} />
                                    <div className={style["card-content"]}>
                                        <h3 className={style["card-title"]}>{dest.title}</h3>
                                        <p className={style["card-description"]}>{dest.description}</p>
                                    </div>
                                </div>
                            ))}
                            
                        </div>
                        <div className={style["card-grid"]}>
                            {destinations2.map((dest, index) => (
                                <div key={index} className={style["card"]}>
                                    <img src={dest.imgSrc} alt={dest.title} />
                                    <div className={style["card-content"]}>
                                        <h3 className={style["card-title"]}>{dest.title}</h3>
                                        <p className={style["card-description"]}>{dest.description}</p>
                                    </div>
                                </div>
                            ))}
                            
                        </div>
                    </div>
      
                </div>

            </div>

        </div>

    );
}

export default Home;
