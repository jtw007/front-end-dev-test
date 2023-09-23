import banner1Image from '../front-end-dev-test-assets/banner-1.jpg'

const Banner1 = () => {
return (
    <div 
        className='banner1-image'
        style={{
            backgroundImage: `url(${banner1Image})`,
            backgroundSize: `cover`,
        }}
    >

        <div id='banner1-title-container'>
            <p id='banner1-title'>Lorem Ipsum</p>
            <div id='banner1-btn-container'>
                <button id='banner1-btn'>Button button</button>
            </div>
            
        </div>


    </div>
)
}

export default Banner1