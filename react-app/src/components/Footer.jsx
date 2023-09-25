import instagramSvg from '../front-end-dev-test-assets/instagram.svg'
import facebookSvg from '../front-end-dev-test-assets/facebook.svg'

const Footer = () => {
    // const socials = socialsIcons.map((icon, idx) => {
    //     return (
    //         <img key={(`${idx}`)} id='social' src={icon.icon} />
    //     )
        
    // })

    return (
        <div id='footer'>
            <p id='follow'>Follow Us:</p>

            <div className='social'>
                <a 
                    href='https://www.instagram.com/roostergrinmedia/' 
                    rel="noopener noreferrer" 
                    target="_blank"
                >
                    <img className='social-icon' src={instagramSvg} alt='instagram' />
                </a>
                <a 
                    href='https://www.facebook.com/RoosterGrin/' 
                    rel="noopener noreferrer" 
                    target="_blank"
                >
                    <img className='social-icon' src={facebookSvg} alt='facebook' />
                </a>
            </div>
                
        </div>
    )
}

export default Footer