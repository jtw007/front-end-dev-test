import { iconsList } from '../Icons/iconsList'

const IconsSection = () => {
    const icons = iconsList.map((icon, idx) => {
            return (
               <div 
                    key={(`${idx}`)}
                    id='mapped-container'
                >
                    <img id='icon' src={icon.icon} />
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
            </div>
        </div>
    )
}

export default IconsSection