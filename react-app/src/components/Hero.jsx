import HeroImage from '../front-end-dev-test-assets/hero.jpg'

import Button from 'react-bootstrap/Button'

const Hero = () => {
    return (
        <section id='hero-container'>
            <div className='hero-image' style={{backgroundImage: `url(${HeroImage})`,}}>
                <div id='hero-title-container'>
                    <p id='hero-title'>RoosterGrin </p>
                </div>

                <div id='welcome-container'>
                    <p id='welcome-text'>Welcome to </p>
                    <p id='welcome-text-2'>Rooster Grin </p>
                    <div id='button-container'>
                        <button id='welcome-btn'>Button Button</button>
                    </div>
                    
                </div>
            </div>
        </section>
        
    )
}

export default Hero