import './hero.scss'

import heroImg from './hero-img.png'

const HeroSection = () => {
    return ( 
        <div className="heroSection bg-lightBg" id="hero">
            <div className='hero-content'>
                <div className='hero-text'>
                    <h1 className='text-primary'>
                        Student Grade <br></br> Visualizer 
                    </h1>
                    <div>
                        <div className='line'></div>
                        <p className='text-customGray '>
                            Analyse student result with advanced visualizer
                        </p>
                    </div>
                    <button className="btn btn-wide mt-12 bg-secondary border-none text-white hover:bg-blue-700">
                        <span className='mr-5'>Analyze</span> &#8594;
                    </button>
                </div>
                <div className="hero-img">
                    <img src={heroImg} alt="hero" />
                </div>
            </div>
        </div>
    );
}

export default HeroSection;