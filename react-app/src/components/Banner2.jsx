import banner2Image from '../front-end-dev-test-assets/banner-2.jpg'

const banner2Text = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus nec feugiat in fermentum posuere. Fringilla phasellus faucibus scelerisque eleifend. Pharetra vel turpis nunc eget lorem dolor sed.'
}

const Banner2 = () => {

    return (
        <section 
            className='banner2-image'
            // style={{
            //     backgroundImage: `url(${banner2Image})`,
            //     backgroundSize: `cover`,
            // }}
        >
            <img id='banner2-img' src={banner2Image}></img>

            <div id='banner2-content-container'>
                <p id='banner2-title'>Lorem Ipsum</p>
                <p id='banner2-text'>{banner2Text.text}</p>
                <div id='banner2-btn-container'>
                    <button id='banner2-btn'>Button button</button>
                </div>
            </div>

        </section>
    )
}

export default Banner2