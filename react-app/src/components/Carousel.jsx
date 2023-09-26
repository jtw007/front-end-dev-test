import { Carousel } from "react-bootstrap"
import stars from '../front-end-dev-test-assets/5-stars.svg'

const slideOne = {
    name: 'John Doe 09/01/2023',
    text: `I am not sure what Lorem Ipsum is but it sure sounds like an interesting language I'd like to learn sometime.`
}

const slideTwo = {
    name: 'Jane Doe 08/11/2023',
    text: `Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
    tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
    quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
    sapiente officiis modi at sunt excepturi expedita sint? Lorem Ipsum.`
}

const slideThree = {
    name: 'Jack Doe 07/05/2023',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    optio, eaque rerum! Provident similique accusantium nemo autem.`
}

const CarouselSection = () => {

    return (
        <section className='carousel-content-container'>

            <div id='ratings-container'>
                <p id='ratings-title'>
                    Lorem Ipsum Dolor Sit Amet 
                </p>
                <div id='stars-container'>
                    <img id='stars' src={stars} />
                </div>
            </div>

            <Carousel interval={null} id='carousel-container'>
                <Carousel.Item className='carousel'>
                    <div className='carousel-text-container'>
                        <p className='carousel-title'>{slideOne.name}</p>
                        <p className='carousel-text'>{slideOne.text}.</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='carousel'>
                    <div className='carousel-text-container'>
                        <p className='carousel-title'>{slideTwo.name}</p>
                        <p className='carousel-text'>{slideTwo.text}</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='carousel'>
                    <div className='carousel-text-container'>
                        <p className='carousel-title'>{slideThree.name}</p>
                        <p className='carousel-text'>{slideThree.text}</p>
                    </div>
                </Carousel.Item>
            </Carousel>

        </section>
    )
}

export default CarouselSection