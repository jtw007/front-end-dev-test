import rockImg from '../front-end-dev-test-assets/img-1.jpg'

const rockText = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}

const accordionText = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}

const RockImage = () => {

    return (
        <div className='rock-container'>
                <img id='rock-img' src={rockImg}></img>

            <div id='rock-text-container'>
                <p id='rock-text-title'>Lorem Ipsum</p>
                <p id='rock-text'>{rockText.text}</p>

                <div id='rock-accordion'>
                    <input 
                        type='checkbox' 
                        id='rock-trigger' 
                    />
                    <label 
                        id='rock-accordion-label' 
                        htmlFor='rock-trigger'>Lorem Ipsum
                    </label>
                    <p id='accordion-text'>{accordionText.text}</p>
                </div>
            </div>
        </div>
    )
}

export default RockImage