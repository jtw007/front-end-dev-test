import { iconsList } from '../Icons/iconsList'

const iconsText = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.'
}

const iconAccordionText = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}

const IconsSection = () => {
    const icons = iconsList.map((icon, idx) => {
            return (
               <div 
                    key={(`${idx}`)}
                    id='mapped-container'
                >
                    <div id='icon-container'>
                        <img id='icon' src={icon.icon} />
                    </div>
                    <p>{icon.desc}</p>
               </div> 
            )
        })

    return (
        <div id='icons-section'>
            <div id='icons-container'>
                {icons}
            </div>

            <div id='icons-text-container'>
                <p id='icons-text-title'>Lorem Ipsum Dolor Sit Amet</p>
                <p id='icons-text'>{iconsText.text}</p>

                <div id='icon-accordion'>
                    <input 
                        type='checkbox' 
                        id='icons-trigger' 
                    />
                    <label 
                        id='icon-accordion-label' 
                        htmlFor='icons-trigger'>Lorem Ipsum
                    </label>
                    <p id='icon-text'>{iconAccordionText.text}</p>
                </div>
            </div>
        </div>
    )
}

export default IconsSection